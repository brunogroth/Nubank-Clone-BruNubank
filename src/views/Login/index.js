import React, { useState, NavigationContainer } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

export default function Login({ navigation, route }) {
    const [name, SetName] = useState('Bruno Groth');


    return (
        <View style={styles.container}>
            <View style={styles.cardLogin}>
                <Text style={styles.title}>Bem vindo(a) ao BruNubank!</Text>
                <Text style={styles.label}>Seu nome:</Text>
                <TextInput style={styles.input} placeholder={'Seu nome aqui'} onChangeText={SetName}></TextInput>
                <TouchableOpacity>
                    <Text style={styles.buttonLogin} onPress={() => {navigation.navigate("Home", { name:name })}}
                        >LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/brunogroth'); }}>
                <Text style={styles.link}
                >Developed by Bruno Groth
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8000ff',
        flexDirection: 'column',
        justifyContent: 'center',
        tintColor: 'red',
        paddingHorizontal: 10,
    },
    logo: {
        color: 'white',
        textAlign: 'center',
    },
    cardLogin: {
        paddingTop: 30,
        paddingStart: 30,
        paddingEnd: 30,

        backgroundColor: 'white',
        borderRadius: 30,
    },
    title: {

        fontSize: 25,
        marginBottom: 30,
    },
    label: {
        color: '#616161',
        marginTop: 10,
        fontSize: 20,

    },
    input: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#5e5e5e',
        marginBottom: 23,
        borderRadius: 4,
    },
    buttonLogin: {
        backgroundColor: '#8000ff',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    link: {
        backgroundColor: 'white',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    }

})