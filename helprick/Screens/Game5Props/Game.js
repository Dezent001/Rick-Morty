import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { Constants } from 'expo';

export default class Game extends Component {
    state = {
        isDisabled1: false,
        isDisabled2: false,
        isDisabled3: false,
        penalty: this.props.navigation.state.params.penalty,
    }

    resolve(penalty){
        return axios.patch('https://a08ae967.ngrok.io/players/'+this.props.navigation.state.params.groupname, {
            progress: 'Game6',
            penalty: penalty,
        })
        .then(res => res.data);
    }

    render() {
        const { isDisabled1, isDisabled2, isDisabled3 } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Icons/rick5.png')}
                    />
                    <Text style={styles.title}>{this.props.navigation.state.params.username} i forgot the chemical formula</Text>
                </View>
                <Text style={styles.text}>
                    {this.props.navigation.state.params.username} you need to finde the chemical formula for sulfuric acids...{'\n'}
                    I have some options that you can choose from!{'\n'}{'\n'}
                    25% chance... EASY!{'\n'}
                </Text>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={isDisabled1 ? styles.disabled : styles.enable}
                        disabled={isDisabled1}
                        onPress={() => this.setState({ isDisabled1: !this.state.isDisabled1, penalty: this.state.penalty + 1 })}>
                        <Text style={styles.title}>{isDisabled1 ? "Disabled" : "H2SO3"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={isDisabled2 ? styles.disabled : styles.enable}
                    disabled={isDisabled2}
                    onPress={() => this.setState({ isDisabled2: !this.state.isDisabled2, penalty: this.state.penalty + 1 })}>
                    <Text style={styles.title}>{isDisabled2 ? "Disabled" : "H4SO6"}</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.enable}
                        onPress={() =>
                            this.resolve(this.state.penalty) &&
                            this.props.navigation.navigate('Game6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.state.penalty })}
                        >
                        <Text style={styles.title}>H2SO4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={isDisabled3 ? styles.disabled : styles.enable}
                        disabled={isDisabled3}
                        onPress={() => this.setState({ isDisabled3: !this.state.isDisabled3, penalty: this.state.penalty + 1 })}>
                        <Text style={styles.title}>{isDisabled3 ? "Disabled" : "H4SO2"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    enable: {
        borderRadius: 20,
        height: 50,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    disabled: {
        borderRadius: 20,
        height: 50,
        width: 150,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logoContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'lightblue',
        fontSize: 20
    },
    logo: {
        width: 250,
        height: 200,
    },
    title: {
        color: 'black',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});