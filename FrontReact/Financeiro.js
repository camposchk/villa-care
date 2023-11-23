import { useState,useCallback } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function Home(props) {

    const [cost,setCost] = useState(0);

    async function apiJava() {
        try {
            await axios.get("http://localhost:8080/custo").then(response => {
                const dados = response.data;
                console.log("dados",dados)
                const soma = dados.agua + dados.funcionarios + dados.fundos + dados.extras;
                setCost(soma)
            });
            
        } catch (error) {
            console.log("error",error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            apiJava()
        }, [])
    );

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <View style={{ display: "flex", flexDirection: 'row' }}>
                    <Pressable onPress={() => props.navigation.navigate("CustoApto")}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#9e9d9d',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Image source={require('./imagens/custo.png')} style={styles.icons} />
                        <Text id='somaElemento'>{`Condomínio: ${cost}`}</Text>
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
                        <Image source={require('./imagens/codigo-de-barras.png')} style={styles.icons} />
                        <Text >Boleto</Text>
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
