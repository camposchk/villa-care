import { Text, Button, View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

import { UtilsContexto } from "./Context";
import { useContext, useState } from 'react';



const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightgray"
    },
    texto1: {
        fontSize: ".8em",
        marginTop: "4em",
        marginBottom: "0.5em",
        textAlign: "center",
    },
    caixa: {

    },
    textinput: {
        width: "25em",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "0.3em",
        marginBottom: "1.8em"

    }
});

export default function Login(props) {
    const { utils, setUtils } = useContext(UtilsContexto)

    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState("")

    function goToCadastro() {
        props.navigation.navigate('Cadastro')
    }

    function goToUsuario() {
        // if (usuario == utils.nome && senha == utils.senha) {
            props.navigation.navigate('Home')
        // }
    }

    return (

        <View style={{ backgroundColor: "lightgray", height: '100%' }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.texto1}>Login</Text>
                    <View style={styles.caixa}>
                        <TextInput
                            label="Email"
                            style={{ backgroundColor: 'lightgray', marginTop: '40px', width: '350px' }}
                            activeUnderlineColor="black" 
                            underlineColor="gray" 
                            value={usuario}
                            onChangeText={e => setUsuario(e)}
                        />
                    </View>
                    <View style={styles.caixa}>
                        <TextInput
                            label="Senha"
                            style={{ backgroundColor: 'lightgray', marginTop: '40px', width: '350px' }}
                            activeUnderlineColor="black" 
                            underlineColor="gray" 
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={e => setSenha(e)}
                        />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: 'row', marginTop: '40px' }}>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center",
                            borderRightWidth: 1 
                        }}>
                        <Text >Login</Text>
                    </Pressable>

                    {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>|</Text> */}
                    
                    <Pressable onPress={() => goToCadastro()}>
                        <View style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center", 
                            borderLeftWidth: 1 
                        }}>
                            <Text style={{ color: "black" }}>Cadastrar</Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Image source={require('./villalogo.png')} style={{width: 200, height: 200, marginTop: '40px'}} />
                </View>
            </View>
        </View>
    )
}