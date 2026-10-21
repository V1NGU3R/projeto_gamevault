import { createContext, useContext, useEffect, useState } from "react";

import { saveGames, getGames } from "../utils/storage";

const GameContext = createContext();

const initialGames = [
  {
    id: "1",
    title: "GTA V",
    platform: "PlayStation",
    rating: "4.8",
    image: "🎮",
    status: "Jogando",
    favorite: false,
    personalRating: 0,
    notes: "",
    addedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Elden Ring",
    platform: "PC",
    rating: "4.9",
    image: "⚔️",
    status: "Zerado",
    favorite: true,
    personalRating: 5,
    notes: "",
    addedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Minecraft",
    platform: "PC",
    rating: "4.7",
    image: "⛏️",
    status: "Jogando",
    favorite: false,
    personalRating: 0,
    notes: "",
    addedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "God of War",
    platform: "PlayStation",
    rating: "4.9",
    image: "🪓",
    status: "Zerado",
    favorite: false,
    personalRating: 0,
    notes: "",
    addedAt: new Date().toISOString(),
  },
];

function normalizeGame(game) {
  return {
    ...game,

    id: String(game.id),

    status: game.status || "Quero jogar",

    favorite: game.favorite ?? false,

    personalRating: game.personalRating ?? 0,

    notes: game.notes || "",

    addedAt: game.addedAt || new Date().toISOString(),
  };
}

export function GameProvider({ children }) {
  const [games, setGames] = useState(initialGames);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGames() {
      const storedGames = await getGames();

      if (storedGames !== null) {
        const normalizedGames = storedGames.map(normalizeGame);

        setGames(normalizedGames);
      }

      setLoading(false);
    }

    loadGames();
  }, []);

  useEffect(() => {
    if (!loading) {
      saveGames(games);
    }
  }, [games, loading]);

  function addGame(game) {
    setGames((currentGames) => {
      const alreadyExists = currentGames.some(
        (item) => String(item.id) === String(game.id),
      );

      if (alreadyExists) {
        return currentGames;
      }

      const newGame = normalizeGame({
        ...game,
        status: "Quero jogar",
        favorite: false,
        personalRating: 0,
        notes: "",
        addedAt: new Date().toISOString(),
      });

      return [...currentGames, newGame];
    });
  }

  function removeGame(gameId) {
    setGames((currentGames) =>
      currentGames.filter((item) => String(item.id) !== String(gameId)),
    );
  }

  function updateGame(gameId, updates) {
    setGames((currentGames) =>
      currentGames.map((game) =>
        String(game.id) === String(gameId)
          ? {
              ...game,
              ...updates,
            }
          : game,
      ),
    );
  }

  function toggleFavorite(gameId) {
    setGames((currentGames) =>
      currentGames.map((game) =>
        String(game.id) === String(gameId)
          ? {
              ...game,
              favorite: !game.favorite,
            }
          : game,
      ),
    );
  }

  function isGameInCollection(gameId) {
    return games.some((item) => String(item.id) === String(gameId));
  }

  function getFavoriteGames() {
    return games.filter((game) => game.favorite);
  }

  function getGamesByStatus(status) {
    return games.filter((game) => game.status === status);
  }

  function getPersonalRatingAverage() {
    const ratedGames = games.filter((game) => Number(game.personalRating) > 0);

    if (ratedGames.length === 0) {
      return 0;
    }

    const total = ratedGames.reduce(
      (sum, game) => sum + Number(game.personalRating),
      0,
    );

    return total / ratedGames.length;
  }

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        loading,

        addGame,
        removeGame,
        updateGame,
        toggleFavorite,

        isGameInCollection,
        getFavoriteGames,
        getGamesByStatus,
        getPersonalRatingAverage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGames() {
  return useContext(GameContext);
}
