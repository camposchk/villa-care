import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cadastro(props) {

    const [diaReserva, setDiaReserva] = useState(new Date())
    const [diasReservados, setDiasReservados] = useState([])

    function reservar() {
        apiJava()
        props.navigation.navigate('Reserva')
    }

    const apiJava = async () =>
    {
        try {
            const response = await axios.post("http://localhost:8080/churrasqueira", {diaReserva});
            console.log("resposta", response);
        } catch (error) {
            console.error(error);
        }
    }
    async function getApiJava() {
        try {
            const response = await axios.get("http://localhost:8080/churrasqueira");
            const dados = response.data.map(item => new Date(item.diaReserva));
            setDiasReservados(dados);
        } catch (error) {
            console.error("Erro ao buscar datas reservadas:", error);
        }
    }

    useEffect(() => {
        getApiJava();
    }, []);
    
    console.log("dias reservados", diasReservados);

    return (
        <View style={styles.container}>
            <SafeAreaProvider style={{height: '40%'}}>            
                <DatePickerInput
                    activeUnderlineColor="black" 
                    underlineColor="gray" 
                    locale="en"
                    label="Dia"
                    value={diaReserva}
                    onChange={(d) => setDiaReserva(d)}
                    inputMode="start"
                    style={styles.input}
                    mode="flat"
                    disabledDates={diasReservados}
                />                
            </SafeAreaProvider>

            <View style={{ display: "flex", flexDirection: 'row', marginBottom: '500px' }}>
                    <Pressable onPress={() => reservar()}
                        style={{
                            width: "10em",
                            height: "3em",
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                        <Text >Reservar</Text>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate("Reserva")}>
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
        width: '350px',
    }
});