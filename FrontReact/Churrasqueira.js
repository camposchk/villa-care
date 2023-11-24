import { View, StyleSheet, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from 'axios';

export default function Cadastro(props) {

    const [diaReserva, setDiaReserva] = useState("")

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
                />                
            </SafeAreaProvider>

            <View style={{ display: "flex", flexDirection: 'row', marginBottom: '500px' }}>
                    <Pressable onPress={() => update()}
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