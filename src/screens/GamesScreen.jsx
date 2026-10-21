import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import { getGames, searchGames } from "../services/gameApi";
import { useGames } from "../context/GameContext";
import colors from "../constants/colors";
import styles from "./GamesScreen.styles";

export default function GamesScreen() {
  const navigation = useNavigation();

  const { games: collectionGames, loading: collectionLoading } = useGames();

  const [activeTab, setActiveTab] = useState("explore");

  const [games, setGames] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);

  const [searchActive, setSearchActive] = useState(false);

  const [sortOption, setSortOption] = useState("Relevância");

  const [statusFilter, setStatusFilter] = useState("Todos");

  const [favoriteOnly, setFavoriteOnly] = useState(false);

  function formatGames(results) {
    return results.map((game) => ({
      id: String(game.id),

      title: game.name,

      image: game.background_image,

      rating: game.rating ? game.rating.toFixed(1) : "N/A",

      platform:
        game.platforms?.length > 0
          ? game.platforms
              .slice(0, 2)
              .map((item) => item.platform.name)
              .join(" / ")
          : "Plataforma não informada",

      releaseDate: game.released || "",
    }));
  }

  async function loadGames() {
    try {
      setLoading(true);
      setError("");

      const data = await getGames(1);

      const formattedGames = formatGames(data.results);

      setGames(formattedGames);

      setPage(1);

      setHasMore(Boolean(data.next));

      setSearchActive(false);
    } catch (error) {
      console.log("ERRO AO CARREGAR JOGOS:", error);

      setError("Não foi possível carregar os jogos.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    const searchValue = search.trim();

    Keyboard.dismiss();

    if (!searchValue) {
      await loadGames();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await searchGames(searchValue, 1);

      const formattedGames = formatGames(data.results);

      setGames(formattedGames);

      setPage(1);

      setHasMore(Boolean(data.next));

      setSearchActive(true);
    } catch (error) {
      console.log("ERRO NA BUSCA:", error);

      setError("Não foi possível realizar a busca.");
    } finally {
      setLoading(false);
    }
  }

  async function loadMoreGames() {
    if (loading || loadingMore || !hasMore) {
      return;
    }

    try {
      setLoadingMore(true);

      const nextPage = page + 1;

      const data = searchActive
        ? await searchGames(search.trim(), nextPage)
        : await getGames(nextPage);

      const formattedGames = formatGames(data.results);

      setGames((currentGames) => [...currentGames, ...formattedGames]);

      setPage(nextPage);

      setHasMore(Boolean(data.next));
    } catch (error) {
      console.log("ERRO AO CARREGAR MAIS JOGOS:", error);
    } finally {
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    loadGames();
  }, []);

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  /*
   * Ordenação dos jogos da API
   *
   * Não alteramos o estado original.
   * Criamos uma cópia com [...games].
   */
  const sortedGames = [...games].sort((a, b) => {
    if (sortOption === "Melhor avaliação") {
      const ratingA = a.rating === "N/A" ? 0 : Number(a.rating);

      const ratingB = b.rating === "N/A" ? 0 : Number(b.rating);

      return ratingB - ratingA;
    }

    if (sortOption === "Mais recentes") {
      const dateA = new Date(a.releaseDate || 0).getTime();

      const dateB = new Date(b.releaseDate || 0).getTime();

      return dateB - dateA;
    }

    if (sortOption === "Nome A-Z") {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });

  let filteredCollection =
    statusFilter === "Todos"
      ? collectionGames
      : collectionGames.filter((game) => game.status === statusFilter);

  if (favoriteOnly) {
    filteredCollection = filteredCollection.filter((game) => game.favorite);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Jogos 🎮</Text>

      <Text style={styles.subtitle}>
        Explore novos jogos ou gerencie sua coleção
      </Text>

      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, activeTab === "explore" && styles.activeTab]}
          onPress={() => handleTabChange("explore")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "explore" && styles.activeTabText,
            ]}
          >
            Explorar
          </Text>
        </Pressable>

        <Pressable
          style={[styles.tab, activeTab === "collection" && styles.activeTab]}
          onPress={() => handleTabChange("collection")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "collection" && styles.activeTabText,
            ]}
          >
            Minha coleção
          </Text>
        </Pressable>
      </View>

      {activeTab === "explore" && (
        <>
          <View style={styles.searchContainer}>
            <SearchBar
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={handleSearch}
            />

            <Pressable style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.searchButtonText}>🔎 Buscar</Text>
            </Pressable>
          </View>

          {searchActive && (
            <View style={styles.searchInfo}>
              <Text style={styles.searchInfoText}>
                Resultados para:{" "}
                <Text style={styles.searchInfoHighlight}>{search}</Text>
              </Text>

              <Pressable
                onPress={() => {
                  setSearch("");
                  loadGames();
                }}
              >
                <Text style={styles.clearSearch}>Limpar</Text>
              </Pressable>
            </View>
          )}

          {!loading && error === "" && games.length > 0 && (
            <View style={styles.sortContainer}>
              <Text style={styles.sortTitle}>Ordenar por</Text>

              <View style={styles.sortOptions}>
                {[
                  "Relevância",
                  "Melhor avaliação",
                  "Mais recentes",
                  "Nome A-Z",
                ].map((option) => (
                  <Pressable
                    key={option}
                    style={[
                      styles.sortButton,
                      sortOption === option && styles.activeSortButton,
                    ]}
                    onPress={() => setSortOption(option)}
                  >
                    <Text
                      style={[
                        styles.sortButtonText,
                        sortOption === option && styles.activeSortButtonText,
                      ]}
                    >
                      {option}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.primary} />

              <Text style={styles.loadingText}>Carregando jogos...</Text>
            </View>
          )}

          {!loading && error !== "" && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>

              <Pressable style={styles.retryButton} onPress={loadGames}>
                <Text style={styles.retryButtonText}>Tentar novamente</Text>
              </Pressable>
            </View>
          )}

          {!loading && error === "" && games.length > 0 && (
            <>
              <View style={styles.resultsHeader}>
                <Text style={styles.resultsCount}>
                  {games.length} jogos carregados
                </Text>

                <Text style={styles.sortActiveText}>{sortOption}</Text>
              </View>

              <View style={styles.gamesGrid}>
                {sortedGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onPress={() =>
                      navigation.navigate("GameDetails", {
                        gameId: game.id,
                      })
                    }
                  />
                ))}
              </View>

              {hasMore && (
                <Pressable
                  style={styles.loadMoreButton}
                  onPress={loadMoreGames}
                  disabled={loadingMore}
                >
                  {loadingMore ? (
                    <View style={styles.loadMoreContent}>
                      <ActivityIndicator size="small" color={colors.text} />

                      <Text style={styles.loadMoreText}>Carregando...</Text>
                    </View>
                  ) : (
                    <Text style={styles.loadMoreText}>Carregar mais jogos</Text>
                  )}
                </Pressable>
              )}

              {!hasMore && (
                <Text style={styles.endText}>
                  Você chegou ao final dos resultados.
                </Text>
              )}
            </>
          )}

          {!loading && error === "" && games.length === 0 && (
            <View style={styles.emptySearch}>
              <Text style={styles.emptySearchIcon}>🔎</Text>

              <Text style={styles.emptySearchTitle}>
                Nenhum jogo encontrado
              </Text>

              <Text style={styles.emptySearchText}>
                Tente pesquisar por outro nome.
              </Text>
            </View>
          )}
        </>
      )}

      {activeTab === "collection" && (
        <>
          <View style={styles.collectionHeader}>
            <Text style={styles.collectionTitle}>Minha coleção</Text>

            <Text style={styles.collectionCount}>
              {collectionGames.length} jogos
            </Text>
          </View>

          <View style={styles.filters}>
            {["Todos", "Quero jogar", "Jogando", "Zerado"].map((status) => (
              <Pressable
                key={status}
                style={[
                  styles.filterButton,
                  statusFilter === status && styles.activeFilter,
                ]}
                onPress={() => setStatusFilter(status)}
              >
                <Text
                  style={[
                    styles.filterText,
                    statusFilter === status && styles.activeFilterText,
                  ]}
                >
                  {status}
                </Text>
              </Pressable>
            ))}

            <Pressable
              style={[
                styles.filterButton,
                favoriteOnly && styles.favoriteFilter,
              ]}
              onPress={() => setFavoriteOnly(!favoriteOnly)}
            >
              <Text
                style={[
                  styles.filterText,
                  favoriteOnly && styles.activeFilterText,
                ]}
              >
                ❤️ Favoritos
              </Text>
            </Pressable>
          </View>

          {collectionLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.primary} />

              <Text style={styles.loadingText}>Carregando coleção...</Text>
            </View>
          )}

          {!collectionLoading && filteredCollection.length > 0 && (
            <View style={styles.gamesGrid}>
              {filteredCollection.map((game) => (
                <View key={game.id}>
                  <GameCard
                    game={game}
                    onPress={() =>
                      navigation.navigate("GameDetails", {
                        gameId: game.id,
                      })
                    }
                  />

                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{game.status}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {!collectionLoading && filteredCollection.length === 0 && (
            <View style={styles.emptyCollection}>
              <Text style={styles.emptyCollectionIcon}>
                {favoriteOnly ? "❤️" : "🎮"}
              </Text>

              <Text style={styles.emptyCollectionTitle}>
                {favoriteOnly ? "Nenhum favorito" : "Nenhum jogo aqui"}
              </Text>

              <Text style={styles.emptyCollectionText}>
                {favoriteOnly
                  ? "Marque alguns jogos como favoritos para encontrá-los aqui."
                  : "Adicione jogos à sua coleção pela aba Explorar."}
              </Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}
