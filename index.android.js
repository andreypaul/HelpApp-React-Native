import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Appmenu from './components/Appmenu';


export default class HelpMeApp extends Component {
    render() {
        return (
            <Router>
              <Scene key="root" >
                <Scene key="Login"  component={Login} initial={true} hideNavBar={true} />
                <Scene key="Register" direction="vertical" component={Register} hideNavBar={true}/>
                <Scene key="Main" component={Main} hideNavBar={true} />
                <Scene key="Appmenu" direction="vertical" component={Appmenu} title="МЕНЮ" hideNavBar={false}/>
              </Scene>
            </Router>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



AppRegistry.registerComponent('HelpMeApp', () => HelpMeApp);

