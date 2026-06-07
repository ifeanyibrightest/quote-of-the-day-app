import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";


export default function HomeScreen() {
  const { quote, fetchQuote, addToFavorites } = useQuote();

  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const theme = {
    background: isDark ? "#121212" : "#F4F7FC",
    card: isDark ? "#1E1E1E" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#222222",
    secondaryText: isDark ? "#BDBDBD" : "#666666",
    primary: "#6C63FF",
    shadow: "#000",
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

      <Text style={[styles.title, { color: theme.text }]}>
        Quote of the Day
      </Text>

      <View
        style={[
          styles.quoteCard,
          {
            backgroundColor: theme.card,
            shadowColor: theme.shadow,
          },
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
          {quote?.content ||
            "Tap the button below to fetch an inspirational quote."}
        </Text>

        <Text
          style={[
            styles.author,
            { color: theme.secondaryText },
          ]}
        >
          {quote?.author ? `— ${quote.author}` : ""}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.primaryButton,
          { backgroundColor: theme.primary },
        ]}
        onPress={fetchQuote}
      >
        <Text style={styles.primaryButtonText}>
          Get New Quote
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.secondaryButton,
          { borderColor: theme.primary },
        ]}
        onPress={() => addToFavorites(quote)}
      >
        <Text
          style={[
            styles.secondaryButtonText,
            { color: theme.primary },
          ]}
        >
          Add to Favorites ❤️
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

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
  },

  quoteCard: {
    borderRadius: 25,
    padding: 25,
    elevation: 6,

    shadowOpacity: 0.15,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    marginBottom: 30,
  },

  quoteMark: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 10,
  },

  quoteText: {
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    fontWeight: "600",
  },

  author: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
  },

  primaryButton: {
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    alignItems: "center",
  },

  secondaryButtonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});