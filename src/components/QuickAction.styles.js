import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  icon: {
    fontSize: 27,
    marginBottom: 8,
  },

  title: {
    color: colors.text,
    fontWeight: "600",
  },
});

export default styles;
