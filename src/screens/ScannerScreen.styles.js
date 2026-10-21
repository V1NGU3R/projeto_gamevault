import { StyleSheet } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  camera: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    alignItems: "center",
    paddingTop: 45,
  },

  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: colors.text,
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 30,
    opacity: 0.9,
  },

  /* ÁREA DE SCAN */

  scanFrame: {
    width: 280,
    height: 280,
    marginTop: 70,
    position: "relative",
  },

  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: colors.primary,
    borderTopLeftRadius: 10,
  },

  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 45,
    height: 45,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.primary,
    borderTopRightRadius: 10,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: colors.primary,
    borderBottomLeftRadius: 10,
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.primary,
    borderBottomRightRadius: 10,
  },

  instruction: {
    color: colors.text,
    fontSize: 14,
    marginTop: 25,
    textAlign: "center",
  },

  /* RESULTADO */

  resultContainer: {
    backgroundColor: colors.surface,
    width: "88%",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  resultTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
  },

  resultCode: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },

  searchingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },

  searchingText: {
    color: colors.text,
    fontSize: 13,
  },

  message: {
    color: colors.textSecondary,
    fontSize: 13,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 19,
  },

  scanAgainButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 15,
  },

  scanAgainText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "bold",
  },

  /* PERMISSÃO */

  centerContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: colors.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },

  permissionContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },

  permissionIcon: {
    fontSize: 65,
    marginBottom: 20,
  },

  permissionTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  permissionText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 25,
  },

  permissionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 13,
  },

  permissionButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
  },

  permissionDenied: {
    color: colors.danger,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 15,
  },

  codeType: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
  },

  message: {
    color: colors.text,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 10,
  },
});

export default styles;
