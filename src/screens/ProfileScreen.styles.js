import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  avatarText: {
    fontSize: 32,
  },

  profileInfo: {
    marginLeft: 15,
  },

  profileName: {
    color: colors.text,
    fontSize: 23,
    fontWeight: "bold",
  },

  profileSubtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },

  mainCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 22,
    marginBottom: 30,
  },

  mainCardLabel: {
    color: "#DCD5FF",
    fontSize: 11,
    fontWeight: "bold",
  },

  mainCardValue: {
    color: colors.text,
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 5,
  },

  mainCardText: {
    color: "#E7E2FF",
    fontSize: 13,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 15,
  },

  statCard: {
    width: "48%",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statIcon: {
    fontSize: 23,
    marginBottom: 8,
  },

  statValue: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "bold",
  },

  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },

  averageCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  averageIcon: {
    fontSize: 30,
  },

  averageInfo: {
    flex: 1,
    marginLeft: 12,
  },

  averageTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  averageSubtitle: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 3,
  },

  averageValue: {
    color: colors.warning,
    fontSize: 24,
    fontWeight: "bold",
  },

  bestGameCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },

  sectionCardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 13,
  },

  bestGameTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },

  bestGameRating: {
    color: colors.warning,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 7,
  },

  statusCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  statusName: {
    color: colors.textSecondary,
    fontSize: 13,
    flex: 1,
  },

  statusValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "bold",
  },

  platformCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },

  emptyText: {
    color: colors.textSecondary,
    fontSize: 13,
  },

  collectionButton: {
    backgroundColor: colors.primary,
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },

  collectionButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
  },

  exploreButton: {
    backgroundColor: colors.surface,
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  exploreButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
