import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem("@favorite_quotes");
      if (savedFavorites !== null) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites from storage:", error);
    }
  };

  const addFavorite = async (quote) => {
    try {
      // Logic for adding a quote goes here (Member 5 & 6)
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async (quoteId) => {
    try {
      // Logic for removing a quote goes here (Member 5 & 6)
    } catch (error) {
      console.error(error);
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
