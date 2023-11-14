import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import { UtilsContexto } from "./Context";

export default function Usuario(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Text style={{ fontSize: "70px", fontWeight: 700 }}>Usuários</Text>
            </View>
            {usuarios.usuariosArray.map((user, index) => <Container key={index} user={user}/>)}
        </View>
    );
}

function Container(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);
    
    return (    
        <View style={{ border: "solid 1px black", width: "500px", height: "130px", borderRadius: "10px", marginBottom: "20px" }}>
            <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                <Text>Nome: {props.user.nome} </Text>
                <Text>Idade: {props.user.idade} </Text>
                <Text>Sexo: {props.user.sexo} </Text>
                <Text>Email: {props.user.email} </Text>
                <TouchableOpacity
                    onPress={() => setUsuarios({...usuarios, usuariosArray : usuarios.usuariosArray.filter(user => user.id !== props.user.id)})}
                    style={{ backgroundColor: '#d1001f', borderRadius: 5, width: 50, height: 30, marginTop: 10, alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>
                        Deletar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}