import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingBottom: 40,
  },

  image: {
    width: "100%",
    height: 250,
    backgroundColor: colors.surface,
  },

  /* TÍTULO */

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  title: {
    flex: 1,
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 10,
  },

  favoriteButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  favoriteButtonText: {
    fontSize: 23,
  },

  /* NOTA RAWG */

  ratingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  rating: {
    color: colors.warning,
    fontSize: 18,
    fontWeight: "bold",
  },

  ratingLabel: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  /* COLEÇÃO */

  collectionButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
  },

  removeButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.success,
  },

  collectionButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  /* ÁREA PESSOAL */

  personalCard: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  personalTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  personalSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },

  starsContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 15,
  },

  star: {
    fontSize: 28,
    opacity: 0.3,
  },

  activeStar: {
    opacity: 1,
  },

  personalScore: {
    color: colors.warning,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 8,
  },

  /* FAVORITO */

  favoriteRow: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  favoriteTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  favoriteSubtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },

  favoriteIcon: {
    fontSize: 28,
  },

  /* ANOTAÇÕES */

  notesContainer: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  notesInput: {
    backgroundColor: colors.surfaceLight,
    color: colors.text,
    borderRadius: 12,
    marginTop: 15,
    padding: 14,
    minHeight: 110,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 14,
    lineHeight: 20,
  },

  /* DATA */

  dateCard: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  dateLabel: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 7,
  },

  dateText: {
    color: colors.text,
    fontSize: 14,
  },

  /* STATUS */

  statusContainer: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statusTitle: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 12,
  },

  statusOptions: {
    gap: 8,
  },

  statusButton: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: colors.surfaceLight,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activeStatusButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  statusButtonText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },

  activeStatusButtonText: {
    color: colors.text,
    fontWeight: "bold",
  },

  /* INFORMAÇÕES */

  infoCard: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  label: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 7,
  },

  infoText: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },

  description: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginHorizontal: 20,
  },

  collectionHint: {
    color: colors.success,
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 25,
  },

  /* LOADING */

  loadingContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: colors.textSecondary,
    marginTop: 12,
    fontSize: 15,
  },

  /* ERRO */

  errorContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  error: {
    color: colors.danger,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },

  retryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  retryButtonText: {
    color: colors.text,
    fontWeight: "bold",
  },
});

export default styles;
