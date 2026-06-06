import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const STORAGE_KEY = "@quote_app_favorites";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage when the app opens
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
          setFavorites(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to load favorites from storage:", error);
      }
    };
    loadFavorites();
  }, []);

  // Action: Add a quote to favorites
  const addFavorite = async (quoteItem) => {
    try {
      const updatedFavorites = [...favorites, quoteItem];
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Failed to save favorite:", error);
    }
  };

  // Action: Remove a quote from favorites
  const removeFavorite = async (quoteId) => {
    try {
      const updatedFavorites = favorites.filter((item) => item.id !== quoteId);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Failed to remove favorite:", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
