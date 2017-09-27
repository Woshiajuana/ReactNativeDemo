/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent'

export default class setup extends Component {
    constructor (props) {
        super(props);
        this.state = ({
            remove: false
        })
    }
    render() {
        var view = this.state.remove ? null : <LifecycleComponent/>;
        var text = this.state.remove ? '让他复活' : '干掉他';
        return (
            <View style={styles.container}>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        this.setState({
                            remove: !this.state.remove,
                        });
                    }}
                >{text}</Text>
                {view}
                <PropsComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
