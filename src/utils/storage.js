import AsyncStorage from "@react-native-async-storage/async-storage";

const GAMES_KEY = "@gamevault:games";

export async function saveGames(games) {
  try {
    const jsonValue = JSON.stringify(games);

    await AsyncStorage.setItem(GAMES_KEY, jsonValue);
  } catch (error) {
    console.log("Erro ao salvar jogos:", error);
  }
}

export async function getGames() {
  try {
    const jsonValue = await AsyncStorage.getItem(GAMES_KEY);

    if (jsonValue === null) {
      return null;
    }

    return JSON.parse(jsonValue);
  } catch (error) {
    console.log("Erro ao carregar jogos:", error);

    return null;
  }
}
