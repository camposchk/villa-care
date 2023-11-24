import { useContext } from 'react';
import { UtilsContexto } from "./Context";
import { Text, Button, View, StyleSheet, Image,TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";

export default function Home(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <View style={{ display: "flex", flexDirection: 'row' }}>
                    <Pressable onPress={() => props.navigation.navigate("Churrasqueira")}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Image source={require('./imagens/churrasqueira.png')} style={styles.icons} />
                        <Text>Churrasqueira</Text>
                    </Pressable>
                    <Pressable 
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Image source={require('./imagens/estacionamento.png')} style={styles.icons} />
                        <Text >Vagas</Text>
                    </Pressable>
                </View>
            <View style={{ display: "flex", flexDirection: 'row' }}>
                    <Pressable onPress={() => props.navigation.navigate("Home")}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text>Voltar</Text>
                    </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icons: {
        height: 30,
        width: 30
    }
})
