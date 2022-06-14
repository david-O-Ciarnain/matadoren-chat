import { StyleSheet, Text } from "react-native";

const Header = () => {
  return <Text style={styles.title}>Matadoren</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: "200",
    color: "#444",
    textShadowColor: "#aaa",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
});

export default Header;
