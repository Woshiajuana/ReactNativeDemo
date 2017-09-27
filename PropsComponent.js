/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PropsComponent extends Component {
    //默认属性
    static defaultProps = {
        name: '小红',
    };
    //属性检查
    static propTypes = {
        name: PropTypes.string,
    };
    render() {
        return <Text style={{fontSize:20,backgroundColor:'red'}}>HELLO，{ this.props.name }</Text>;
    }
}
