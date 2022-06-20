import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search for conversations:</Text>
      <TextInput placeholder="Username" style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btns}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#777",
    padding: 15,
    width: 250,
    backgroundColor: "#fff",
  },
  btns: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2D232E",
  },
  btnText: {
    color: "#fff",
  },
});

export default SearchScreen;
