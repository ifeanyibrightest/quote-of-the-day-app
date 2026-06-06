import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavouritesScreen() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorite Quotes</Text>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={{ color: "#fff" }}>{item.quote}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    color: "#fff",
  },
  emptyText: { color: "#666", textAlign: "center", marginTop: 50 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#333" },
});
