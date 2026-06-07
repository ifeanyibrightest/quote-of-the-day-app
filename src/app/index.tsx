import { router } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const theme = {
    background: isDark ? "#121212" : "#F5F7FA",
    card: isDark ? "#1E1E1E" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#222222",
    secondaryText: isDark ? "#AAAAAA" : "#666666",
    primary: "#6C63FF",
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
      />

      <Text
        style={[
          styles.heading,
          { color: theme.text },
        ]}
      >
        Quote of the Day
      </Text>

      <Text
        style={[
          styles.subHeading,
          { color: theme.secondaryText },
        ]}
      >
        Daily Motivation & Inspiration
      </Text>

      <View
        style={[
          styles.quoteCard,
          { backgroundColor: theme.card },
        ]}
      >
        <Text
          style={[
            styles.quoteMark,
            { color: theme.primary },
          ]}
        >
          ❝
        </Text>

        <Text
          style={[
            styles.quoteText,
            { color: theme.text },
          ]}
        >
          Success is not final, failure is not fatal: it is the courage to continue that counts.
        </Text>

        <Text
          style={[
            styles.authorText,
            { color: theme.secondaryText },
          ]}
        >
          — Winston Churchill
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.primary },
        ]}
      >
        <Text style={styles.buttonText}>
          Get New Quote
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.favoriteButton}>
        <Text
          style={[
            styles.favoriteText,
            { color: theme.primary },
          ]}
        >
          Add to Favorites ❤️
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.favoritesPageButton}
       onPress={() => router.push("/favorites")}
      >
       <Text style={styles.favoritesPageText}>
      Favourites Quotes 📚
      </Text>
      </TouchableOpacity>
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  subHeading: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

  quoteCard: {
    borderRadius: 25,
    padding: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginBottom: 30,
  },

  quoteMark: {
    fontSize: 55,
    textAlign: "center",
  },

  quoteText: {
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    fontWeight: "600",
  },

  authorText: {
    marginTop: 20,
    textAlign: "right",
    fontStyle: "italic",
    fontSize: 16,
  },

  button: {
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  favoriteButton: {
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#6C63FF",
    alignItems: "center",
  },

  favoriteText: {
    fontSize: 18,
    fontWeight: "600",
  },
  favoritesPageButton: {
  paddingVertical: 16,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: "#6c63ff",
  alignItems: "center",
  marginTop: 10,
},

favoritesPageText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#6c63ff",
},
});