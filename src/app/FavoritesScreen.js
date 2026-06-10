import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { FlatList, Share, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../Styles/main';
import { FavoritesContext } from '../context/FavoritesContext';


export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const renderQuote = ({ item }) => (
    <View style={styles.favoritesquoteCard}>
      <Text style={styles.favoritesquoteText}>"{item.quote}"</Text>
      <Text style={styles.authorText}>- {item.author}</Text>
      
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removeFavorite(item.id)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>

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
  );

  const shareQuote = async (item) => {

    const formattedMessage = `"${item.quote}"\n\n— ${item.author}`;
    
    const result = await Share.share({
      message: formattedMessage,
    });
  };
      

  return (
    <SafeAreaView style={styles.containerinfavorites}> 
    <View >
      <Text style={styles.favoritestitle}>My Favorites ({favorites.length})</Text>
      
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
    </SafeAreaView>
  );
}
