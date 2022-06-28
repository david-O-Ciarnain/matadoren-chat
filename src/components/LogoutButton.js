import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LogoutButton = () => {
  return (
    <TouchableOpacity style={styles.btns} onPress={() => authContext.logout()}>
      <Text style={styles.btnText}>SIGN OUT</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: "75%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#2D232E",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 7,
  },
});

export default LogoutButton;
