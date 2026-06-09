import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { FavoritesContext } from '../context/FavoritesContext';

export default function HomeScreen() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { addFavorite, favorites } = useContext(FavoritesContext);

  // Fetch a new quote
  const fetchNewQuote = async () => {
    setLoading(true);
    setIsSaved(false);
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      const data = response.data;
      
      setCurrentQuote({
        id: data.id,
        quote: data.quote,
        author: data.author,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch quote. Please check your internet connection.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Save to favorites using Context
  const saveToFavorites = async () => {
    if (!currentQuote) return;

    // Check if already saved
    const alreadySaved = favorites.some(q => q.id === currentQuote.id);
    if (alreadySaved) {
      Alert.alert('Info', 'This quote is already in favorites!');
      return;
    }

    await addFavorite(currentQuote);
    setIsSaved(true);
    Alert.alert('Success', 'Quote saved to favorites ❤️');
  };

  // Load initial quote
  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote of the Day</Text>

      <View style={styles.quoteCard}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : currentQuote ? (
          <>
            <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
            <Text style={styles.authorText}>- {currentQuote.author}</Text>
          </>
        ) : (
          <Text style={styles.quoteText}>No quote available. Tap "New Quote"</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.newQuoteButton} 
          onPress={fetchNewQuote}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.saveButton, isSaved && styles.savedButton]} 
          onPress={saveToFavorites}
          disabled={!currentQuote || loading}
        >
          <Text style={styles.saveButtonText}>
            {isSaved ? "Saved ❤️" : "Save to Favorites"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#fff' },
  quoteCard: {
    width: '100%', padding: 25, backgroundColor: '#1A1A1A', borderRadius: 12,
    marginBottom: 30, minHeight: 220, justifyContent: 'center',
  },
  quoteText: { fontSize: 18, color: '#fff', textAlign: 'center', lineHeight: 26, fontStyle: 'italic' },
  authorText: { fontSize: 16, color: '#aaa', textAlign: 'center', marginTop: 15 },
  buttonContainer: { width: '100%', gap: 12 },
  newQuoteButton: { backgroundColor: '#4CAF50', paddingVertical: 15, borderRadius: 8 },
  saveButton: { backgroundColor: '#FF9800', paddingVertical: 15, borderRadius: 8 },
  savedButton: { backgroundColor: '#4CAF50' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});