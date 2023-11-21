import { useContext } from 'react';
import { UtilsContexto } from "./Context";
import { Text, View, StyleSheet, Image,TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";

export default function Home(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <IconButton
                type= "contained"
                icon="plus"
                iconColor={MD3Colors.black}
                size={40}
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icons: {
        height: 30,
        width: 30
    }
})
