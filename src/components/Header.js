import { StyleSheet, Text } from "react-native";

const Header = () => {
  return <Text style={styles.title}>Matadoren</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: "300",
    color: "#222",
  },
});

export default Header;
