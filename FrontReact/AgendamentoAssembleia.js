import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AgendamentoAssembleia(props) {
    const [diasReservados, setDiasReservados] = useState([]);

    async function getApiJava() {
        try {
            const response = await axios.get("http://localhost:8080/assembleia");
            const dados = response.data.map(item => {
                const dataReserva = new Date(item.diaReserva);
    
                dataReserva.setDate(dataReserva.getDate() + 1);
    
                return { id: item.id, diaReserva: dataReserva };
            });
            setDiasReservados(dados);
        } catch (error) {
            console.error("Erro ao buscar datas reservadas:", error);
        }
    }

    async function handleDeleteDay(id) {
        try {
            await axios.delete(`http://localhost:8080/assembleia/${id}`);

            const updatedDiasReservados = diasReservados.filter(dia => dia.id !== id);
            setDiasReservados(updatedDiasReservados);
        } catch (error) {
            console.error("Erro ao excluir dia reservado:", error);
        }
    }
    
    useEffect(() => {
        getApiJava();
    }, []);

    function formatarData(data) {
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Lembre-se que os meses começam em zero
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: 50 }}>
                {/* <Image source={require('./imagens/reuniao.png')} style={{width: 40, height: 40, borderRightWidth: 1}} /> */}
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            {diasReservados.map((diaReserva, index) => (
                <Container key={index} diaReserva={diaReserva} onDelete={() => handleDeleteDay(diaReserva.id)} />
            ))}
        </View>
    );
}

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Lembre-se que os meses começam em zero
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function Container(props) {
    return (    
        <View style={{ border: "solid 1px white", width: "200px", height: "100px", borderRadius: "10px", marginBottom: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                <Text>Data Assembleia: {formatarData(props.diaReserva.diaReserva)} </Text>
                <Pressable
                    onPress={props.onDelete}
                    style={{ backgroundColor: 'lightgray', borderRadius: 10, width: 40, height: 20, marginTop: 10, alignItems: "center", justifyContent: 'center', borderColor: 'white' }}>
                    <Text style={{ color: 'darkred' }}>
                        Deletar
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    icons: {
        height: 30,
        width: 30
    }
})
