
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Olá, {name}!</Text>
                <View style={styles.icons}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.buttonShowValues}>
                        <Feather name="eye" size={20} color='#FFF' onPress={() => setShowValue(!showValue)} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4} style={styles.buttonUser}>
                        <Feather name="user" size={27} color='#FFF' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    icons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    buttonShowValues: {
        width: 33,
        height: 33,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
        marginRight:12,
    }


})