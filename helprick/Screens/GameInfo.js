import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Switch } from 'react-native';

export default class Game extends Component {
    state = {
        toggled: false
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./Icons/rick1.png')}
                    />
                    <Text style={styles.title}>Read these game infos carefully!</Text>
                </View>
                <Text style={styles.text}>
                    {this.props.navigation.state.params.username} you have to help Rick{'\n'} with some tasks...{'\n'}
                    You compete against your classmates on time and skill.{'\n'}
                    Wrong answers will result in time penalty.{'\n'}{'\n'}
                    Should be easy...
                    </Text>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Censored: 
                    </Text>
                    <Switch
                        onValueChange={(value) => this.setState({ toggled: value })}
                        value={this.state.toggled}
                    />
                </View>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Game1', { censor: this.state.toggled, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
                    style={styles.buttonContainer}
                >
                    <Text style={{fontSize:20}}>Continue</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        marginTop: 20,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
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
        width: 200,
        height: 200,
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
});