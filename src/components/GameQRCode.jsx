import { Modal, View, Text, Pressable } from "react-native";

import QRCode from "react-native-qrcode-svg";

import colors from "../constants/colors";

export default function GameQRCode({ visible, gameId, gameTitle, onClose }) {
  if (!gameId) {
    return null;
  }

  const qrValue = `GAMEVAULT:${gameId}`;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>QR Code do jogo 📱</Text>

          <Text style={styles.gameTitle}>{gameTitle}</Text>

          <View style={styles.qrContainer}>
            <QRCode
              value={qrValue}
              size={220}
              backgroundColor="white"
              color="black"
            />
          </View>

          <Text style={styles.instruction}>
            Escaneie este QR Code pelo scanner do GameVault.
          </Text>

          <Text style={styles.code}>{qrValue}</Text>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  container: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  gameTitle: {
    color: colors.textSecondary,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 20,
    textAlign: "center",
  },

  qrContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  instruction: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 20,
  },

  code: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  closeButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
  },

  closeButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
  },
};
