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

export default class LifecycleComponent extends Component {
    /**组件被装载时期START*/
    //在组件挂载之前调用一次。返回值将会作为 this.state 的初始值   getInitialState
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('——————————————constructor1————————————————')
    }
    //服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用
    componentWillMount () {
        console.log('——————————————componentWillMount2————————————————')
    }
    //在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
    componentDidMount () {
        console.log('——————————————componentDidMount3————————————————')
    }
    /**组件被装载时期END*/

    /**组件更新时期START*/
    //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    componentWillReceiveProps (nextProps) {
        console.log('——————————————componentWillReceiveProps4————————————————')
    }
    //在接收到新的 props 或者 state，将要渲染之前调用。
    shouldComponentUpdate (nextProps, nextState) {
        console.log('——————————————shouldComponentUpdate5————————————————')
        return true;
    }
    //在接收到新的 props 或者 state 之前立刻调用。
    componentWillUpdate (nextProps, nextState) {
        console.log('——————————————componentWillUpdate6————————————————')
    }
    //在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。使用该方法可以在组件更新之后操作 DOM 元素。
    componentDidUpdate(prevProps, prevState) {
        console.log('——————————————componentDidUpdate7————————————————')
    }
    /**组件更新时期END*/

    /**组件移除时期START*/
    //在组件从 DOM 中移除的时候立刻被调用。在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。
    componentWillUnmount () {
        console.log('——————————————componentWillUnmount8————————————————')
    }
    /**组件移除时期END*/

    render() {
        console.log('——————————————render————————————————')
        return <View>
                <Text
                    style={{fontSize:20,backgroundColor:'red'}}
                    onPress={()=>{
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >有本事你打我呀.</Text>
                <Text
                    style={{fontSize:20}}>被打了：{this.state.count}次</Text>
            </View>


    }
}
