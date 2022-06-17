import { Button, StyleSheet, View } from "react-native";


export default function MessageScreen(){

    return ( 
        <View style={styles.messageScreen}>
            <Text>MessageScreen</Text>
            <Button 
            title="Click me"
            onPress={() => {}}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    messageScreen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})