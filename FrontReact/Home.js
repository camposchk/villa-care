import { useContext } from 'react';
import { UtilsContexto } from "./Context";
import { Text, Button, View, StyleSheet, Image,TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";

export default function Usuario(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <View style={{ display: "flex", flexDirection: 'row' }}>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                </View>
            <View style={{ display: "flex", flexDirection: 'row'}}>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                </View>
            <View style={{ display: "flex", flexDirection: 'row'}}>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                </View>
            <View style={{ display: "flex", flexDirection: 'row'}}>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                    <Pressable onPress={() => goToUsuario()}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Text >Login</Text>
                    </Pressable>
                </View>
        </View>
    );
}
