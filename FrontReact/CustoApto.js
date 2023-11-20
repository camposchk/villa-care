import { View, StyleSheet, Text, Pressable, Switch, } from "react-native";
import { TextInput } from "react-native-paper";
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

            {/* <Image style={styles.imagem}
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                }}
            /> */}

            <TextInput
                label="Água"
                style={{ backgroundColor: 'lightgray', marginTop: '40px', width: '350px' }}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={nome}
                onChangeText={e => setNome(e)}
            />
            <TextInput
                label="Funcionários"
                style={{ backgroundColor: 'lightgray', marginTop: '40px', width: '350px' }}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <View style={{display: "flex", flexDirection: 'row'}}>
                <TextInput
                    label="Fundos"
                    style={{ backgroundColor: 'lightgray', marginTop: '40px', marginRight: '5px', width: '170px' }}
                    activeUnderlineColor="black" 
                    underlineColor="gray" 
                    value={idade}
                    onChangeText={e => setIdade(e)}
                />
                <TextInput
                    label="Mais despesas"
                    style={{ backgroundColor: 'lightgray', marginTop: '40px', marginLeft: '5px', width: '170px' }}
                    activeUnderlineColor="black" 
                    underlineColor="gray" 
                    value={sexo}
                    onChangeText={e => setSexo(e)}
                />
            </View>
            <TextInput
                label="Senha"
                style={{ backgroundColor: 'lightgray', marginTop: '40px', width: '350px' }}
                activeUnderlineColor="black" 
                underlineColor="gray" 
                value={senha}
                onChangeText={e => setSenha(e)}
            />

            {/* <Text style={styles.margem4}>Deseja receber notificações?</Text> */}

            <View style={{display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Switch
                    style={{marginTop: 20}}
                    onValueChange={() => setInicio(!inicio)}
                    value={inicio}
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={"#f4f3f4"}
                    activeThumbColor={"#1ff28d"}
                />
                <Text style={{marginTop: 18, marginLeft: 5}}>Sindico?</Text>
            </View>

            <View style={{ display: "flex", flexDirection: 'row', marginTop: '40px' }}>
                    <Pressable onPress={() => goToLogin()}
                        style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                        <Text >Cadastrar</Text>
                    </Pressable>

                    {/* <Text style={{ justifyContent: 'center', alignItems: 'center' }}>|</Text> */}
                    
                    <Pressable onPress={() => props.navigation.navigate("Login")}>
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