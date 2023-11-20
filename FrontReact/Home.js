import { useContext } from 'react';
import { UtilsContexto } from "./Context";
import { Text, Button, View, StyleSheet, Image,TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";

export default function Home(props) {
    const { usuarios, setUsuarios } = useContext(UtilsContexto);

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <View style={{ display: "flex", flexDirection: 'row' }}>
                    <Pressable onPress={() => props.navigation.navigate("Login")}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Image source={require('./imagens/reserva.png')} style={styles.icons} />
                        <Text >Reservas</Text>
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
                        <Image source={require('./imagens/agendamento.png')} style={styles.icons} />
                        <Text >Agendamentos</Text>
                    </Pressable>
                </View>
            <View style={{ display: "flex", flexDirection: 'row'}}>
                    <Pressable onPress={() => props.navigation.navigate("Financeiro")}
                        style={{
                            width: "10em",
                            height: "6em",
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: '#BBBABA',
                            borderRadius: '15px',
                            margin: 2
                        }}>
                        <Image source={require('./imagens/financeiro.png')} style={styles.icons} />
                        <Text >Financeiro</Text>
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
                        <Image source={require('./imagens/denuncia.png')} style={styles.icons} />
                        <Text >Denúncias</Text>
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
                        <Image source={require('./imagens/historico.png')} style={styles.icons} />
                        <Text >Registros</Text>
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
                        <Image source={require('./imagens/apartamento.png')} style={styles.icons} />
                        <Text >Apartamentos</Text>
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
                        <Image source={require('./imagens/eleicao.png')} style={styles.icons} />
                        <Text >Eleições</Text>
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
                        <Text >Mais informações</Text>
                    </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icons: {
        height: 30,
        width: 30
    }
})
