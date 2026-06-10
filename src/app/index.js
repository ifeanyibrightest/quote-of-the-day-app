import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import * as Clipboard from 'expo-clipboard';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Share, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles/main';
import { FavoritesContext } from '../context/FavoritesContext';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {

  const [currentQuote, setCurrentQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { addFavorite, favorites } = useContext(FavoritesContext);


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

 
  const saveToFavorites = async () => {
    if (!currentQuote) return;

    
    const alreadySaved = favorites.some(q => q.id === currentQuote.id);
    if (alreadySaved) {
      Alert.alert('Info', 'This quote is already in favorites!');
      return;
    }

    await addFavorite(currentQuote);
    setIsSaved(true);
    Alert.alert('Success', 'Quote saved to favorites ❤️');
  };


  const [copiedMessage, setCopiedMessage] = useState(false);
  const textToCopy = `"${currentQuote?.quote}"\n\n— ${currentQuote?.author}`;

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(textToCopy); 
  }


  const shareQuote = async () => {
      const formattedMessage = `"${currentQuote.quote}"\n\n— ${currentQuote.author}`;
      
      const result = await Share.share({
        message: formattedMessage,
      });
  };

  
  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <SafeAreaView style={styles.containerforindex}>
      <View>
        <Text style={styles.indextitle}>Quote of the Day</Text>

        <View style={styles.indexquoteCard}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : currentQuote ? (
            <>
              <Text style={styles.indexquoteText}>"{currentQuote.quote}"</Text>
              <Text style={[styles.authorText, {textAlign: 'center',}]}>- {currentQuote.author}</Text>
            </>
          ) : (
            <Text style={styles.quoteText}>No quote available. Tap "New Quote"</Text>
          )}

          <Ionicons name="clipboard-outline" size={25}
            style={styles.designforclippy} 
            onPress={handleCopyToClipboard} 
          />

        </View>

        <View style={styles.buttonContainer}>

          <View>
            <TouchableOpacity 
              style={styles.newQuoteButton} 
              onPress={fetchNewQuote}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Loading..." : "New Quote"}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
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


            <View>
              <TouchableOpacity 
                style={[styles.shareButton]} 
                onPress={shareQuote}
              >
                <Ionicons name="share-social-outline" size={25}/>
                <Text style={styles.buttonText}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          


        </View>
      </View>
    </SafeAreaView>
  );
}