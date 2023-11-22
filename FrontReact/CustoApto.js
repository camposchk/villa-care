import { View, StyleSheet, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro(props) {

    const [agua, setAgua] = useState("")
    const [funcionarios, setFuncionarios] = useState("")
    const [fundos, setFundos] = useState("") 
    const [extras, setExtras] = useState("")

    function update() {
        apiJava()
        props.navigation.navigate('Financeiro')
        
    }

    const apiJava = async () =>
    {
        try {
        const response = await axios.post("http://localhost:8080/custo", {agua, funcionarios, fundos, extras});
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                left={<TextInput.Icon icon="currency-brl" />}
                label="Água"
                style={styles.input}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={agua}
                onChangeText={e => setAgua(e)}
                keyboardType='numeric'
            />

            <TextInput
                left={<TextInput.Icon icon="currency-brl" />}
                label="Funcionários"
                style={styles.input}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={funcionarios}
                onChangeText={e => setFuncionarios(e)}
            />

            <TextInput
                left={<TextInput.Icon icon="currency-brl" />}
                label="Fundos"
                style={styles.input}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={fundos}
                onChangeText={e => setFundos(e)}
            />

            <TextInput
                left={<TextInput.Icon icon="currency-brl" />}
                label="Mais despesas"
                style={styles.input}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={extras}
                onChangeText={e => setExtras(e)}
            />

            <View style={{ display: "flex", flexDirection: 'row', marginTop: '40px' }}>
                    <Pressable onPress={() => update()}
                        style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                        <Text >Atualizar</Text>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate("Financeiro")}>
                        <View style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center", 
                            borderLeftWidth: 1 
                        }}>
                            <Text style={{ color: "black" }}>Cancelar</Text>
                        </View>
                    </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        backgroundColor: "lightgray",
        height: '100%',
    },
    imagem: {
        height: "100px",
        width: "100px",
        margin: "20px",
        marginTop: "50px"
    },
    input: {
        backgroundColor: 'lightgray', 
        marginTop: '40px', 
        width: '350px'
    }
});