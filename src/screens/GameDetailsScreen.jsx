import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
} from "react-native";

import { useEffect, useState } from "react";

import { getGameDetails } from "../services/gameApi";

import { useGames } from "../context/GameContext";

import GameQRCode from "../components/GameQRCode";

import colors from "../constants/colors";

import styles from "./GameDetailsScreen.styles";

export default function GameDetailsScreen({ route }) {
  const { gameId } = route.params;

  const {
    games,
    addGame,
    removeGame,
    updateGame,
    toggleFavorite,
    isGameInCollection,
  } = useGames();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showQRCode, setShowQRCode] = useState(false);

  async function loadGameDetails() {
    try {
      setLoading(true);
      setError("");

      const data = await getGameDetails(gameId);

      setGame(data);
    } catch (error) {
      console.log("ERRO AO CARREGAR DETALHES:", error);

      setError("Não foi possível carregar os detalhes do jogo.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGameDetails();
  }, [gameId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />

        <Text style={styles.loadingText}>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>

        <Pressable style={styles.retryButton} onPress={loadGameDetails}>
          <Text style={styles.retryButtonText}>Tentar novamente</Text>
        </Pressable>
      </View>
    );
  }

  if (!game) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>Jogo não encontrado.</Text>
      </View>
    );
  }

  const platforms =
    game.platforms?.map((item) => item.platform.name).join(" • ") ||
    "Não informado";

  const genres =
    game.genres?.map((genre) => genre.name).join(" • ") || "Não informado";

  const released = game.released || "Não informado";

  const description = game.description_raw || "Descrição não disponível.";

  const inCollection = isGameInCollection(game.id);

  const collectionGame = games.find(
    (item) => String(item.id) === String(game.id),
  );

  const currentStatus = collectionGame?.status || "Quero jogar";

  const isFavorite = collectionGame?.favorite || false;

  const personalRating = collectionGame?.personalRating || 0;

  const notes = collectionGame?.notes || "";

  function handleCollection() {
    if (inCollection) {
      removeGame(game.id);
      return;
    }

    const gameToSave = {
      id: String(game.id),

      title: game.name,

      platform:
        game.platforms?.length > 0
          ? game.platforms
              .slice(0, 2)
              .map((item) => item.platform.name)
              .join(" / ")
          : "Plataforma não informada",

      rating: game.rating ? game.rating.toFixed(1) : "N/A",

      image: game.background_image || "",
    };

    addGame(gameToSave);
  }

  function handleStatusChange(status) {
    if (!inCollection) return;

    updateGame(game.id, {
      status,
    });
  }

  function handleFavorite() {
    if (!inCollection) return;

    toggleFavorite(game.id);
  }

  function handlePersonalRating(rating) {
    if (!inCollection) return;

    updateGame(game.id, {
      personalRating: rating,
    });
  }

  function handleNotesChange(text) {
    if (!inCollection) return;

    updateGame(game.id, {
      notes: text,
    });
  }

  function formatDate(date) {
    if (!date) {
      return "Não informado";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Não informado";
    }

    return parsedDate.toLocaleDateString("pt-BR");
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {game.background_image && (
          <Image
            source={{
              uri: game.background_image,
            }}
            style={styles.image}
          />
        )}

        <View style={styles.titleRow}>
          <Text style={styles.title}>{game.name}</Text>

          {inCollection && (
            <Pressable style={styles.favoriteButton} onPress={handleFavorite}>
              <Text style={styles.favoriteButtonText}>
                {isFavorite ? "❤️" : "🤍"}
              </Text>
            </Pressable>
          )}
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            ⭐ {game.rating ? game.rating.toFixed(1) : "N/A"}
          </Text>

          <Text style={styles.ratingLabel}>Nota RAWG</Text>
        </View>

        <Pressable
          style={[styles.collectionButton, inCollection && styles.removeButton]}
          onPress={handleCollection}
        >
          <Text style={styles.collectionButtonText}>
            {inCollection
              ? "✅ Já está na minha coleção"
              : "➕ Adicionar à minha coleção"}
          </Text>
        </Pressable>

        {inCollection && (
          <>
            <Pressable
              style={{
                backgroundColor: colors.surfaceLight,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 12,
                paddingVertical: 14,
                paddingHorizontal: 16,
                alignItems: "center",
                marginTop: 10,
              }}
              onPress={() => setShowQRCode(true)}
            >
              <Text
                style={{
                  color: colors.text,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                📱 Meu QR Code
              </Text>
            </Pressable>

            <View style={styles.personalCard}>
              <Text style={styles.personalTitle}>Minha avaliação</Text>

              <Text style={styles.personalSubtitle}>
                Dê sua própria nota para o jogo
              </Text>

              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Pressable
                    key={star}
                    onPress={() => handlePersonalRating(star)}
                  >
                    <Text
                      style={[
                        styles.star,
                        star <= personalRating && styles.activeStar,
                      ]}
                    >
                      ⭐
                    </Text>
                  </Pressable>
                ))}
              </View>

              <Text style={styles.personalScore}>
                {personalRating > 0
                  ? `${personalRating}/5`
                  : "Ainda não avaliado"}
              </Text>
            </View>

            <Pressable style={styles.favoriteRow} onPress={handleFavorite}>
              <View>
                <Text style={styles.favoriteTitle}>Favorito</Text>

                <Text style={styles.favoriteSubtitle}>
                  {isFavorite
                    ? "Este jogo está nos seus favoritos"
                    : "Adicionar aos favoritos"}
                </Text>
              </View>

              <Text style={styles.favoriteIcon}>
                {isFavorite ? "❤️" : "🤍"}
              </Text>
            </Pressable>

            <View style={styles.notesContainer}>
              <Text style={styles.personalTitle}>Minhas anotações</Text>

              <Text style={styles.personalSubtitle}>
                Escreva algo sobre este jogo
              </Text>

              <TextInput
                style={styles.notesInput}
                value={notes}
                onChangeText={handleNotesChange}
                placeholder="Ex: Quero terminar esse jogo nas férias..."
                placeholderTextColor={colors.textSecondary}
                multiline
                textAlignVertical="top"
              />
            </View>

            <View style={styles.dateCard}>
              <Text style={styles.dateLabel}>ADICIONADO À COLEÇÃO</Text>

              <Text style={styles.dateText}>
                📅 {formatDate(collectionGame?.addedAt)}
              </Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.statusTitle}>STATUS DO JOGO</Text>

              <View style={styles.statusOptions}>
                {["Quero jogar", "Jogando", "Zerado"].map((status) => (
                  <Pressable
                    key={status}
                    style={[
                      styles.statusButton,
                      currentStatus === status && styles.activeStatusButton,
                    ]}
                    onPress={() => handleStatusChange(status)}
                  >
                    <Text
                      style={[
                        styles.statusButtonText,
                        currentStatus === status &&
                          styles.activeStatusButtonText,
                      ]}
                    >
                      {status}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.label}>LANÇAMENTO</Text>

          <Text style={styles.infoText}>📅 {released}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>PLATAFORMAS</Text>

          <Text style={styles.infoText}>🎮 {platforms}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>GÊNEROS</Text>

          <Text style={styles.infoText}>🏷️ {genres}</Text>
        </View>

        <Text style={styles.sectionTitle}>Sobre o jogo</Text>

        <Text style={styles.description}>{description}</Text>

        {inCollection && (
          <Text style={styles.collectionHint}>
            O jogo está salvo na sua coleção.
          </Text>
        )}
      </ScrollView>

      <GameQRCode
        visible={showQRCode}
        gameId={game.id}
        gameTitle={game.name}
        onClose={() => setShowQRCode(false)}
      />
    </>
  );
}
