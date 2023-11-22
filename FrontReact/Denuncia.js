import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";
import { Modal, Portal, PaperProvider, IconButton, MD3Colors } from "react-native-paper";

export default function Home(props) {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = {backgroundColor: 'white', padding: 20, height: 100, width: 100};

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray", height: "100%" }}>
            <View style={{ marginTop: "50px" }}>
                <Image source={require('./villalogo.png')} style={{width: 100, height: 100}} />
            </View>
            <PaperProvider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
                <IconButton
                    type= "contained"
                    icon="plus"
                    iconColor={MD3Colors.black}
                    size={40}
                    onPress={showModal}
                />
            </PaperProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    icons: {
        height: 30,
        width: 30
    }
})
