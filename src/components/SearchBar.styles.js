import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingHorizontal: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default styles;
