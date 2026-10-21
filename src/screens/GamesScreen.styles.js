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

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 4,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: colors.border,
  },

  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: colors.primary,
  },

  tabText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },

  activeTabText: {
    color: colors.text,
    fontWeight: "bold",
  },

  searchContainer: {
    gap: 10,
    marginBottom: 15,
  },

  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },

  searchButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
  },

  searchInfo: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  searchInfoText: {
    color: colors.textSecondary,
    fontSize: 13,
    flex: 1,
  },

  searchInfoHighlight: {
    color: colors.text,
    fontWeight: "bold",
  },

  clearSearch: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10,
  },

  sortContainer: {
    marginBottom: 20,
  },

  sortTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sortOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  sortButton: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activeSortButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  sortButtonText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },

  activeSortButtonText: {
    color: colors.text,
    fontWeight: "bold",
  },

  resultsHeader: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  resultsCount: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  sortActiveText: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "bold",
  },

  gamesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },

  loading: {
    alignItems: "center",
    marginTop: 40,
  },

  loadingText: {
    color: colors.textSecondary,
    marginTop: 12,
    fontSize: 15,
  },

  errorContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  errorText: {
    color: colors.danger,
    fontSize: 15,
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

  loadMoreButton: {
    backgroundColor: colors.primary,
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },

  loadMoreContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  loadMoreText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "bold",
  },

  endText: {
    color: colors.textSecondary,
    textAlign: "center",
    fontSize: 12,
    marginTop: 20,
  },

  emptySearch: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
  },

  emptySearchIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  emptySearchTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  emptySearchText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },

  collectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  collectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },

  collectionCount: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },

  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 25,
  },

  filterButton: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activeFilter: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  favoriteFilter: {
    backgroundColor: "#3A1F2B",
    borderColor: "#FF5C8A",
  },

  filterText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "600",
  },

  activeFilterText: {
    color: colors.text,
  },

  statusBadge: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginTop: 6,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: colors.border,
  },

  statusText: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "bold",
  },

  emptyCollection: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
  },

  emptyCollectionIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  emptyCollectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  emptyCollectionText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
  },
});

export default styles;
