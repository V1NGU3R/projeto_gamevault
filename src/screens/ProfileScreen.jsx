import { View, Text, ScrollView, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useGames } from "../context/GameContext";

import styles from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const {
    games,
    getFavoriteGames,
    getGamesByStatus,
    getPersonalRatingAverage,
  } = useGames();

  const favoriteGames = getFavoriteGames();

  const playingGames = getGamesByStatus("Jogando");

  const completedGames = getGamesByStatus("Zerado");

  const waitingGames = getGamesByStatus("Quero jogar");

  const ratedGames = games.filter((game) => Number(game.personalRating) > 0);

  const personalAverage = getPersonalRatingAverage();

  const platformCounts = {};

  games.forEach((game) => {
    const platform = game.platform || "Não informado";

    platformCounts[platform] = (platformCounts[platform] || 0) + 1;
  });

  const platforms = Object.entries(platformCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const bestRatedGame = [...ratedGames].sort(
    (a, b) => Number(b.personalRating) - Number(a.personalRating),
  )[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🎮</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Jogador</Text>

          <Text style={styles.profileSubtitle}>Colecionador de jogos</Text>
        </View>
      </View>

      <View style={styles.mainCard}>
        <Text style={styles.mainCardLabel}>MINHA COLEÇÃO</Text>

        <Text style={styles.mainCardValue}>{games.length}</Text>

        <Text style={styles.mainCardText}>
          {games.length === 1 ? "jogo salvo" : "jogos salvos"}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Estatísticas</Text>

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
          <Text style={styles.statIcon}>📌</Text>

          <Text style={styles.statValue}>{waitingGames.length}</Text>

          <Text style={styles.statLabel}>Quero jogar</Text>
        </View>
      </View>

      <View style={styles.averageCard}>
        <Text style={styles.averageIcon}>⭐</Text>

        <View style={styles.averageInfo}>
          <Text style={styles.averageTitle}>Minha média</Text>

          <Text style={styles.averageSubtitle}>
            Baseada nas suas avaliações
          </Text>
        </View>

        <Text style={styles.averageValue}>
          {personalAverage > 0 ? personalAverage.toFixed(1) : "-"}
        </Text>
      </View>

      {bestRatedGame && (
        <View style={styles.bestGameCard}>
          <Text style={styles.sectionCardTitle}>Melhor avaliado por você</Text>

          <Text style={styles.bestGameTitle}>{bestRatedGame.title}</Text>

          <Text style={styles.bestGameRating}>
            ⭐ {bestRatedGame.personalRating}/5
          </Text>
        </View>
      )}

      <View style={styles.statusCard}>
        <Text style={styles.sectionCardTitle}>Status da coleção</Text>

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

      <View style={styles.platformCard}>
        <Text style={styles.sectionCardTitle}>Plataformas</Text>

        {platforms.length > 0 ? (
          platforms.map(([platform, count]) => (
            <View key={platform} style={styles.statusRow}>
              <Text style={styles.statusName}>🎮 {platform}</Text>

              <Text style={styles.statusValue}>{count}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhuma plataforma registrada.</Text>
        )}
      </View>

      <Pressable
        style={styles.collectionButton}
        onPress={() => navigation.navigate("Jogos")}
      >
        <Text style={styles.collectionButtonText}>Ver minha coleção</Text>
      </Pressable>

      <Pressable
        style={styles.exploreButton}
        onPress={() => navigation.navigate("Scanner")}
      >
        <Text style={styles.exploreButtonText}>📷 Escanear jogo</Text>
      </Pressable>
    </ScrollView>
  );
}
