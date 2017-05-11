import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Text,
    Button,
    View
} from 'react-native';
import { Actions} from 'react-native-router-flux';
import { Icon } from 'native-base';
import MapView from 'react-native-maps';

import Appmenu from './Appmenu';
import Register from './Register';


export default class Testmapproj extends Component {


    render() {
        return (
            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 55.704976,
                        longitude: 37.400746,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>

                    <MapView.Marker
                        coordinate={{
                            latitude: 55.704976,
                            longitude: 37.400746,
                        }}
                        title={'Мой дом!!!'}
                    />

                    <TouchableHighlight
                        onPress={() => Actions.Appmenu()}
                    >
                        <View>
                            <Icon
                                style={{
                                    backgroundColor: 'transparent',
                                    top: 30,
                                    right: 130
                                }}
                                name='menu' />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn} >
                        <Text style={styles.btnTxt}>НУЖНА ПОМОЩЬ</Text>
                    </TouchableHighlight>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    btn: {
        width: 300,
        height: 40,
        bottom: 30,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#DC143C',
        borderRadius: 30
    },
    btnTxt: {
        color: 'white',
        opacity: .8
    }
});