import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Switch, } from "react-native";
import { useContext, useState } from 'react';
import { UtilsContexto } from "./Context";
import axios from 'axios';

export default function Cadastro(props) {

    const [inicio, setInicio] = useState(false)
    const { usuarios, setUsuarios } = useContext(UtilsContexto)

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("") 
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhare, setSenhare] = useState("")

    function goToLogin() {
        if (senha == senhare) {
            setUsuarios({ ...usuarios, usuariosArray:[...usuarios.usuariosArray,{nome: nome, idade: idade, sexo: sexo, email: email, senha: senha, id: usuarios.usuariosArray.length}] })
            props.navigation.navigate('Login')
            apiJava()
        }
    }

    const apiJava = async (nome, idade) =>
    {
        try {
        const response = await axios.post("http://localhost:8080/user", {nome, idade});
    
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    
    return (
        <View style={styles.container}>

            <Image style={styles.imagem}
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                }}
            />

            <Text style={styles.margem}>Nome:</Text>
            <TextInput
                onChangeText={e => setNome(e)}
                value={nome}
                style={styles.textArea} />

            <Text style={styles.margem}>Idade:</Text>
            <TextInput
                onChangeText={e => setIdade(e)}
                value={idade}
                style={styles.textArea} />

            <Text style={styles.margem}>Sexo:</Text>
            <TextInput
                onChangeText={e => setSexo(e)}
                value={sexo}
                style={styles.textArea} />

            <Text style={styles.margem}>Email:</Text>
            <TextInput
                onChangeText={e => setEmail(e)}
                value={email}
                style={styles.textArea} />

            <Text style={styles.margem}>Senha:</Text>
            <TextInput
                onChangeText={e => setSenha(e)}
                value={senha}
                style={styles.textArea} />

            <Text style={styles.margem2}>Confirmar senha:</Text>
            <TextInput
                onChangeText={e => setSenhare(e)}
                value={senhare}
                style={styles.textArea} />

            <Text style={styles.margem4}>Deseja receber notificações?</Text>

            <Switch
                style={styles.margem3}
                onValueChange={() => setInicio(!inicio)}
                value={inicio}
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={"#f4f3f4"}
                activeThumbColor={"#1ff28d"}
            />

            <TouchableOpacity
                style={{
                    width: "16em",
                    innerHeight: "10px",
                    padding: '10px',
                    backgroundColor: "white",
                    borderRadius: '10px',
                    marginTop: '10px',
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1em"
                }}
                onPress={() => goToLogin()}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
            >
                <View style={{
                    innerHeight: "40px",
                }}>
                    <Text style={{ color: "black" }}>Cancelar</Text>
                </View>
            </TouchableOpacity>
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
    textArea: {
        backgroundColor: 'white',
        color: 'black',
        width: '250px',
        maxLength: "90",
        numberOfLines: '1',
        borderRadius: '5px',
    },
    textArea2: {
        backgroundColor: 'white',
        color: 'black',
        width: '50px',
        maxLength: "90",
        numberOfLines: '1',
    },
    margem: {
        marginTop: "20px",
        marginRight: '200px',
        fontSize: '15px',
    },
    margem2: {
        marginTop: "20px",
        marginRight: '130px',
        fontSize: '15px',
    },
    margem3: {
        marginRight: '200px',
    },
    margem4: {
        marginRight: '65px',
        marginTop: '10px'
    },

});