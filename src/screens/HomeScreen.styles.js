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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  smallTitle: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },

  notification: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  notificationText: {
    fontSize: 20,
  },

  collectionCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  cardLabel: {
    color: "#DCD5FF",
    fontSize: 12,
    fontWeight: "bold",
  },

  gameCount: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  cardDescription: {
    color: "#E7E2FF",
    fontSize: 13,
    marginTop: 5,
  },

  gameIcon: {
    fontSize: 50,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 30,
  },

  statCard: {
    width: "48%",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statIcon: {
    fontSize: 22,
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

  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    color: colors.primary,
    fontWeight: "600",
    marginBottom: 15,
  },

  gamesRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },

  emptyContainer: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 25,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 12,
  },

  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  emptyText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 18,
  },

  emptyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  emptyButtonText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 14,
  },

  statusSummary: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statusSummaryTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  statusName: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  statusValue: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
