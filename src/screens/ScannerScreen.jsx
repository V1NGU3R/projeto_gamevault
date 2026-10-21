import { View, Text, Pressable, ActivityIndicator } from "react-native";

import { useState, useEffect } from "react";

import { CameraView, useCameraPermissions } from "expo-camera";

import { useNavigation } from "@react-navigation/native";

import { searchGames } from "../services/gameApi";

import { searchProductByBarcode } from "../services/barcodeApi";

import colors from "../constants/colors";

import styles from "./ScannerScreen.styles";

export default function ScannerScreen() {
  const navigation = useNavigation();

  const [permission, requestPermission] = useCameraPermissions();

  const [scanned, setScanned] = useState(false);

  const [code, setCode] = useState("");

  const [codeType, setCodeType] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  /*
   * Converte o nome técnico do
   * tipo de código para um nome
   * mais fácil de entender.
   */
  function getCodeTypeName(type) {
    const types = {
      qr: "QR Code",
      ean13: "EAN-13",
      ean8: "EAN-8",
      upc_a: "UPC-A",
      upc_e: "UPC-E",
      code128: "Code 128",
      code39: "Code 39",
      code93: "Code 93",
    };

    return types[type] || type || "Código";
  }

  /*
   * Verifica se o código lido
   * é um código de barras.
   */
  function isBarcode(type) {
    return [
      "ean13",
      "ean8",
      "upc_a",
      "upc_e",
      "code128",
      "code39",
      "code93",
    ].includes(type);
  }

  /*
   * Função chamada automaticamente
   * quando a câmera detecta um código.
   */
  async function handleBarcodeScanned({ data, type }) {
    /*
     * Impede que a câmera leia
     * vários códigos seguidos.
     */
    if (scanned) {
      return;
    }

    setScanned(true);

    setCode(data);

    const readableType = getCodeTypeName(type);

    setCodeType(readableType);

    console.log("TIPO DO CÓDIGO:", type);

    console.log("CÓDIGO:", data);

    /*
     * QR Code possui um tratamento
     * separado.
     */
    if (type === "qr") {
      handleQRCode(data);
      return;
    }

    /*
     * Códigos de barras seguem para
     * a API de identificação.
     */
    if (isBarcode(type)) {
      await handleBarcode(data);
      return;
    }

    setMessage("Tipo de código não suportado.");
  }

  /*
   * QR CODE
   *
   * IMPORTANTE:
   *
   * Não vamos mandar o conteúdo
   * de um QR aleatório para a RAWG.
   *
   * Isso evita situações como:
   *
   * QR aleatório
   *       ↓
   * RAWG
   *       ↓
   * GTA V
   *
   * que não significa que o QR
   * realmente representa GTA V.
   */
  function handleQRCode(data) {
    setLoading(false);

    console.log("CONTEÚDO DO QR CODE:", data);

    const GAMEVAULT_PREFIX = "GAMEVAULT:";

    if (typeof data !== "string" || !data.startsWith(GAMEVAULT_PREFIX)) {
      setMessage("QR Code não reconhecido pelo GameVault.");

      return;
    }

    const gameId = data.substring(GAMEVAULT_PREFIX.length).trim();

    if (!gameId) {
      setMessage("QR Code GameVault inválido.");

      return;
    }

    console.log("ID DO JOGO GAMEVAULT:", gameId);

    setMessage("QR Code GameVault reconhecido! Abrindo jogo...");

    setTimeout(() => {
      navigation.navigate("GameDetails", {
        gameId,
      });
    }, 500);
  }

  /*
   * CÓDIGO DE BARRAS
   *
   * Primeiro tentamos descobrir
   * qual produto pertence ao código.
   *
   * Depois usamos o nome encontrado
   * para pesquisar na RAWG.
   */
  async function handleBarcode(data) {
    try {
      setLoading(true);

      setMessage("Identificando produto...");

      /*
       * Consulta a API específica
       * de códigos de barras.
       */
      const product = await searchProductByBarcode(data);

      /*
       * Nenhum produto encontrado.
       */
      if (!product) {
        setMessage("Nenhum produto foi encontrado para esse código.");

        return;
      }

      console.log("PRODUTO ENCONTRADO:", product);

      /*
       * Produto encontrado, mas
       * sem nome.
       */
      if (!product.title) {
        setMessage(
          "O código foi encontrado, mas não possui um nome de produto.",
        );

        return;
      }

      setMessage(`Produto encontrado: ${product.title}`);

      /*
       * Agora usamos o nome do produto
       * para pesquisar na RAWG.
       */
      const response = await searchGames(product.title, 1);

      /*
       * RAWG encontrou algum jogo.
       */
      if (response.results && response.results.length > 0) {
        const firstGame = response.results[0];

        console.log("JOGO ENCONTRADO NA RAWG:", firstGame.name);

        setMessage(`Jogo encontrado: ${firstGame.name}`);

        /*
         * Pequeno intervalo para
         * mostrar a mensagem antes
         * de abrir os detalhes.
         */
        setTimeout(() => {
          navigation.navigate("GameDetails", {
            gameId: String(firstGame.id),
          });
        }, 500);

        return;
      }

      /*
       * O produto existe, mas a RAWG
       * não encontrou um jogo correspondente.
       */
      setMessage(
        `Encontramos "${product.title}", mas não encontramos esse jogo na RAWG.`,
      );
    } catch (error) {
      console.log("ERRO AO PROCESSAR BARCODE:", error);

      setMessage("Não foi possível identificar esse código.");
    } finally {
      setLoading(false);
    }
  }

  /*
   * Permite realizar uma nova leitura.
   */
  function handleScanAgain() {
    setScanned(false);

    setCode("");

    setCodeType("");

    setMessage("");

    setLoading(false);
  }

  /*
   * Enquanto a permissão ainda
   * está sendo verificada.
   */
  if (!permission) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary} />

        <Text style={styles.loadingText}>
          Verificando permissão da câmera...
        </Text>
      </View>
    );
  }

  /*
   * Permissão não concedida.
   */
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionIcon}>📷</Text>

        <Text style={styles.permissionTitle}>Acesso à câmera</Text>

        <Text style={styles.permissionText}>
          O GameVault precisa da câmera para escanear códigos de jogos.
        </Text>

        {permission.canAskAgain && (
          <Pressable
            style={styles.permissionButton}
            onPress={requestPermission}
          >
            <Text style={styles.permissionButtonText}>Permitir câmera</Text>
          </Pressable>
        )}

        {!permission.canAskAgain && (
          <Text style={styles.permissionDenied}>
            A permissão da câmera foi bloqueada. Ative-a nas configurações do
            dispositivo.
          </Text>
        )}
      </View>
    );
  }

  /*
   * Tela principal do Scanner.
   */
  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: [
            "qr",
            "ean13",
            "ean8",
            "upc_a",
            "upc_e",
            "code128",
            "code39",
            "code93",
          ],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Escanear jogo 📷</Text>

          <Text style={styles.subtitle}>
            Aponte a câmera para um QR Code ou código de barras
          </Text>

          <View style={styles.scanFrame}>
            <View style={styles.cornerTopLeft} />

            <View style={styles.cornerTopRight} />

            <View style={styles.cornerBottomLeft} />

            <View style={styles.cornerBottomRight} />
          </View>

          {!scanned && (
            <Text style={styles.instruction}>
              Posicione o código dentro da área
            </Text>
          )}

          {scanned && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Código detectado</Text>

              <Text style={styles.resultCode} numberOfLines={2}>
                {code}
              </Text>

              <Text style={styles.codeType}>Tipo: {codeType}</Text>

              {loading && (
                <View style={styles.searchingContainer}>
                  <ActivityIndicator color={colors.text} />

                  <Text style={styles.searchingText}>
                    {codeType === "QR Code"
                      ? "Verificando QR Code..."
                      : "Identificando produto..."}
                  </Text>
                </View>
              )}

              {!loading && message !== "" && (
                <Text style={styles.message}>{message}</Text>
              )}

              {!loading && (
                <Pressable
                  style={styles.scanAgainButton}
                  onPress={handleScanAgain}
                >
                  <Text style={styles.scanAgainText}>Escanear novamente</Text>
                </Pressable>
              )}
            </View>
          )}
        </View>
      </CameraView>
    </View>
  );
}
