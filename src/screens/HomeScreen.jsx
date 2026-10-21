import { View, Text, ScrollView, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import GameCard from "../components/GameCard";
import QuickAction from "../components/QuickAction";

import { useGames } from "../context/GameContext";

import styles from "./HomeScreen.styles";

export default function HomeScreen() {
  const navigation = useNavigation();

  const {
    games,
    loading,
    getFavoriteGames,
    getGamesByStatus,
    getPersonalRatingAverage,
  } = useGames();

  const favoriteGames = getFavoriteGames();

  const playingGames = getGamesByStatus("Jogando");

  const completedGames = getGamesByStatus("Zerado");

  const waitingGames = getGamesByStatus("Quero jogar");

  const personalAverage = getPersonalRatingAverage();

  const recentGames = [...games]
    .sort((a, b) => {
      const dateA = new Date(a.addedAt || 0).getTime();

      const dateB = new Date(b.addedAt || 0).getTime();

      return dateB - dateA;
    })
    .slice(0, 2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.smallTitle}>GAMEVAULT</Text>

          <Text style={styles.title}>Olá, jogador! 👋</Text>
        </View>

        <View style={styles.notification}>
          <Text style={styles.notificationText}>🔔</Text>
        </View>
      </View>

      <View style={styles.collectionCard}>
        <View>
          <Text style={styles.cardLabel}>MINHA COLEÇÃO</Text>

          <Text style={styles.gameCount}>
            {loading
              ? "..."
              : `${games.length} ${games.length === 1 ? "jogo" : "jogos"}`}
          </Text>

          <Text style={styles.cardDescription}>
            Continue organizando sua coleção
          </Text>
        </View>

        <Text style={styles.gameIcon}>🎮</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumo</Text>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>❤️</Text>

          <Text style={styles.statValue}>{favoriteGames.length}</Text>

          <Text style={styles.statLabel}>Favoritos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🎮</Text>

          <Text style={styles.statValue}>{playingGames.length}</Text>

          <Text style={styles.statLabel}>Jogando</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>✅</Text>

          <Text style={styles.statValue}>{completedGames.length}</Text>

          <Text style={styles.statLabel}>Zerados</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>⭐</Text>

          <Text style={styles.statValue}>
            {personalAverage > 0 ? personalAverage.toFixed(1) : "-"}
          </Text>

          <Text style={styles.statLabel}>Minha média</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Acesso rápido</Text>

      <View style={styles.quickActions}>
        <QuickAction
          icon="📷"
          title="Escanear"
          onPress={() => navigation.navigate("Scanner")}
        />

        <QuickAction
          icon="🔎"
          title="Buscar"
          onPress={() => navigation.navigate("Jogos")}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Jogos recentes</Text>

        <Pressable onPress={() => navigation.navigate("Jogos")}>
          <Text style={styles.seeAll}>Ver todos</Text>
        </Pressable>
      </View>

      {recentGames.length > 0 ? (
        <View style={styles.gamesRow}>
          {recentGames.map((game) => (
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
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🎮</Text>

          <Text style={styles.emptyTitle}>Sua coleção está vazia</Text>

          <Text style={styles.emptyText}>
            Explore os jogos disponíveis e adicione os que você quiser.
          </Text>

          <Pressable
            style={styles.emptyButton}
            onPress={() => navigation.navigate("Jogos")}
          >
            <Text style={styles.emptyButtonText}>Explorar jogos</Text>
          </Pressable>
        </View>
      )}

      {games.length > 0 && (
        <View style={styles.statusSummary}>
          <Text style={styles.statusSummaryTitle}>Sua coleção</Text>

          <View style={styles.statusRow}>
            <Text style={styles.statusName}>📌 Quero jogar</Text>

            <Text style={styles.statusValue}>{waitingGames.length}</Text>
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusName}>🎮 Jogando</Text>

            <Text style={styles.statusValue}>{playingGames.length}</Text>
          </View>

          <View style={styles.statusRow}>
            <Text style={styles.statusName}>✅ Zerados</Text>

            <Text style={styles.statusValue}>{completedGames.length}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
