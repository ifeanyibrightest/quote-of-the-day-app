import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const STORAGE_KEY = "@quote_app_favorites";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from storage when app starts
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
          setFavorites(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to load favorites:", error);
      }
    };
    loadFavorites();
  }, []);

  // Add quote to favorites (with duplicate check)
  const addFavorite = async (quoteItem) => {
    try {
      // Prevent duplicate quotes
      if (favorites.some(item => item.id === quoteItem.id)) {
        return false; // Already exists
      }

      const updatedFavorites = [...favorites, quoteItem];
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
      return true;
    } catch (error) {
      console.error("Failed to save favorite:", error);
      return false;
    }
  };

  // Remove quote from favorites
  const removeFavorite = async (quoteId) => {
    try {
      const updatedFavorites = favorites.filter((item) => item.id !== quoteId);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
      return true;
    } catch (error) {
      console.error("Failed to remove favorite:", error);
      return false;
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ 
        favorites, 
        addFavorite, 
        removeFavorite 
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};