import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, Modal, Pressable, TextInput, Alert } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import axios from 'axios'; // Ensure axios is imported

export default function Denuncia(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [denuncia, setDenuncia] = useState("");
    const [denuncias, setDenuncias] = useState([]);

    function denunciar() {
        setModalVisible(!modalVisible);
        apiJava();
        props.navigation.navigate('Denuncia');
    }

    const apiJava = async () => {
        try {
            const response = await axios.post("http://localhost:8080/denuncia", { denuncia });
            console.log("resposta", response);
        } catch (error) {
            console.error(error);
        }
    };

    async function getApiJava() {
        try {
            const response = await axios.get("http://localhost:8080/denuncia");
            const dados = response.data.map(item => {
                return { denuncia: item.denuncia };
            });
            setDenuncias(dados);
        } catch (error) {
            console.error("Erro ao buscar denuncias:", error);
        }
    }

    const deleteDenuncia = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/denuncia/${id}`);
    
            const updatedDenuncias = denuncias.filter(denuncia => denuncia.id !== id);
            setDenuncias(updatedDenuncias);
        } catch (error) {
            console.error("Erro ao excluir denúncia:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getApiJava()
        }, [])
    );

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: 50 }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Denúncia</Text>
                        <TextInput 
                            style={{height: 100, marginBottom: 10, borderColor: 'darkred', borderWidth: 1, borderRadius: 5}} 
                            onChangeText={setDenuncia} 
                            value={denuncia}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={denunciar}>
                            <Text style={styles.textStyle}>Fazer Denuncia</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <IconButton 
                onPress={() => setModalVisible(true)}
                type= "contained"
                icon="plus"
                iconColor={MD3Colors.black}
                size={40}
            />
            {denuncias.map((item, index) => (
                <Container key={index} denuncia={item.denuncia} onDelete={() => deleteDenuncia(item.id)} />
            ))}
        </View>
    );
}

function Container(props) {
    return (
        <View style={{ border: "solid 1px white", width: 200, height: 100, borderRadius: 10, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
                <Text>Denuncia: {props.denuncia}</Text>
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
    // ... existing styles ...
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: 'darkred',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
});
