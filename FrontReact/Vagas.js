import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useState, useEffect } from 'react';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';

export default function Vagas(props) {
    const [selected, setSelected] = useState("");
  
    const data = [
        {key:'1', value:'1'},
        {key:'2', value:'2'},
        {key:'3', value:'3'},
        {key:'4', value:'4'},
        {key:'5', value:'5'},
        {key:'6', value:'6'},
        {key:'7', value:'7'},
        {key:'8', value:'8'},
        {key:'9', value:'9'},
        {key:'10', value:'10'},
        {key:'11', value:'11'},
        {key:'12', value:'12'},
        {key:'13', value:'13'},
        {key:'14', value:'14'},
        {key:'15', value:'15'},
        {key:'16', value:'16'},
        {key:'17', value:'17'},
        {key:'18', value:'18'},
        {key:'19', value:'19'},
        {key:'20', value:'20'},
    ]

    const [diaReserva, setDiaReserva] = useState(new Date())
    const [diasReservados, setDiasReservados] = useState([])

    function reservar() {
        apiJava()
        props.navigation.navigate('Reserva')
        alert("Reservado!")
    }

    const apiJava = async () =>
    {
        try {
            console.log("diaReserva",diaReserva)
            const response = await axios.post("http://localhost:8080/churrasqueira", {diaReserva, selected});
            console.log("resposta", response);
        } catch (error) {
            console.error(error);
        }
    }

    async function getApiJava() {
        try {
            const response = await axios.get("http://localhost:8080/churrasqueira");
            const dados = response.data.map(item => {
                const dataReserva = new Date(item.diaReserva);
    
                dataReserva.setDate(dataReserva.getDate() + 1);
    
                return dataReserva;
            });
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
            <Image source={require('./villalogo.png')} style={{width: 100, height: 100, marginBottom: 40}} />
            <SafeAreaProvider style={{height: '40%'}}>   
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    placeholder="Vagas"
                />    
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
                    validRange={{ startDate: new Date(),  disabledDates: diasReservados }}
                />                
            </SafeAreaProvider>

            <View style={{ display: "flex", flexDirection: 'row', marginBottom: '500px', marginTop: '100px' }}>
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