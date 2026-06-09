import React, { useContext } from 'react';
import { 
  StyleSheet, Text, View, FlatList, TouchableOpacity, Alert 
} from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const renderQuote = ({ item }) => (
    <View style={styles.quoteCard}>
      <Text style={styles.quoteText}>"{item.quote}"</Text>
      <Text style={styles.authorText}>- {item.author}</Text>
      
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removeFavorite(item.id)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites ({favorites.length})</Text>
      
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite quotes yet</Text>
          <Text style={styles.emptySubText}>Save some quotes from the Home tab ❤️</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderQuote}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  quoteCard: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
  },
  quoteText: {
    fontSize: 17,
    color: '#fff',
    lineHeight: 24,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  authorText: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 15,
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: { fontSize: 20, color: '#fff', marginBottom: 10 },
  emptySubText: { fontSize: 16, color: '#888', textAlign: 'center' },
  listContent: { paddingBottom: 100 },
});