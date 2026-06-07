import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const theme = {
    background: isDark ? "#121212" : "#F5F7FA",
    card: isDark ? "#1E1E1E" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#222222",
    secondary: isDark ? "#AAAAAA" : "#666666",
    primary: "#6C63FF",
  };

  // dummy data (backend will replace later)
  const favorites = [
    {
      id: "1",
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      id: "2",
      quote: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Favorite Quotes ❤️
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.quote, { color: theme.text }]}>
              {item.quote}
            </Text>
            <Text style={[styles.author, { color: theme.secondary }]}>
              — {item.author}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
       style={styles.homeButton}
      onPress={() => router.push("/")}
      >
     <Text style={styles.homeButtonText}>
       Home 🏠
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  quote: {
    fontSize: 18,
    lineHeight: 26,
  },
  author: {
    marginTop: 10,
    textAlign: "right",
    fontStyle: "italic",
  },
  homeButton: {
  paddingVertical: 14,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: "#6C63FF",
  alignItems: "center",
  marginTop: 20,
  marginHorizontal: 20,
},

homeButtonText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#6C63FF",
},
});