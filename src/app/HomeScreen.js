import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote of the Day</Text>

      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>
          "The only true wisdom is in knowing you know nothing."
        </Text>
        <Text style={styles.authorText}>- Socrates</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, color: "#fff" },
  quoteCard: {
    width: "100%",
    padding: 20,
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    marginBottom: 30,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    color: "#ddd",
  },
  authorText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
    marginTop: 15,
    color: "#FF6B00",
  },
  button: {
    backgroundColor: "#FF6B00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
