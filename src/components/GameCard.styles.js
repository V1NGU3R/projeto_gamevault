import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: 155,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  imageContainer: {
    height: 150,
    borderRadius: 12,
    backgroundColor: colors.surfaceLight,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  noImage: {
    fontSize: 50,
  },

  info: {
    gap: 3,
  },

  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  platform: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  rating: {
    color: colors.warning,
    fontSize: 13,
    marginTop: 4,
  },
});

export default styles;
