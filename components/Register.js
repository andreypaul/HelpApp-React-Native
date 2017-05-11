import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight,
    TextInput,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Main from './Main';

export default class register extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        source={require('../img/splash.png')}
                        style={styles.img}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Введите имя'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Введите e-mail'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Пароль'}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Подтвердите пароль'}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableHighlight
                    onPress={() => Actions.Main()}
                    style={styles.button}>
                    <Text
                        style={styles.text}>
                        Зарегистрироваться
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => Actions.pop()}
                    style={styles.button}>
                    <Text
                        style={styles.text}>
                        Назад
                    </Text>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CD5C5C',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#DC143C',
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
    text: {
        color: 'white',
        opacity: 0.8,
        fontFamily: 'Avenir',
    },

    img: {
        width: 50,
        height: 60
    }
});