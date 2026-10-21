// Biblioteca facilitadora de requisições
import axios from "axios";

// Configuração Padrão
const api = axios.create({
  // URL que vai ser usada em todos
  baseURL: "https://api.rawg.io/api",

  // Parâmetros adicionais
  params: {
    key: process.env.EXPO_PUBLIC_RAWG_API_KEY,
  },
});

// Buscar Jogos
export async function getGames(page = 1) {
  // Requisição --> Usa baseURL + key + /games
  const response = await api.get("/games", {
    params: {
      page,
      page_size: 20,
    },  
  });

  return response.data;
}

export async function searchGames(search, page = 1) {
  const response = await api.get("/games", {
    params: {
      search,
      page,
      page_size: 20,
    },
  });

  return response.data;
}

export async function getGameDetails(id) {
  const response = await api.get(`/games/${id}`);

  return response.data;
}

/*
 * IMPORTANTE:
 *
 * A RAWG não é uma base de códigos
 * de barras de produtos.
 *
 * Esta função tenta usar o conteúdo
 * escaneado como texto de pesquisa.
 *
 * Mais para frente podemos trocar
 * esta etapa por uma API específica
 * de códigos de barras.
 */
export async function searchGameByCode(code) {
  if (!code) {
    return {
      results: [],
    };
  }

  const response = await api.get("/games", {
    params: {
      search: code,
      page: 1,
      page_size: 10,
    },
  });

  return response.data;
}
