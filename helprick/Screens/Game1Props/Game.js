import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity, NetInfo } from 'react-native';
import moment from 'moment';

let currentTime = moment().format('HH:mm');

export default class Game extends Component {
    resolve() {
        return axios.post('https://a08ae967.ngrok.io/players', {
            id: this.props.navigation.state.params.groupname,
            name: this.props.navigation.state.params.username,
            progress: 'Game2',
            timeStart: currentTime,
            timeEnd: '',
            penalty: this.props.navigation.state.params.penalty,
        })
            .then(res => res.data);
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({ status: isConnected }); }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
    }

    handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
    }

    _handlePress() {
        if (this.state.status == true) {
            this.props.navigation.navigate('Game2', { censur: this.props.navigation.state.params.censur, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
            this.resolve();
            this.mutation;
        } else {
            this.props.navigation.navigate('Game1', { fail: 1, censur: this.props.navigation.state.params.censur, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
        }
    }

    render() {
        if (this.props.navigation.state.params.fail == undefined) {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../Icons/rick4.png')}
                        />
                        <Text style={styles.title}> I lost my internet!</Text>
                    </View>
                    <Text style={styles.text}>
                        {this.props.navigation.state.params.username} i lost my internet connection.{'\n'}{'\n'}
                        Can i borrow some of yours?{'\n'}Just connect to the school network and press the button!!!{'\n'}{'\n'}
                        INFO: you can minimize the app - no worries{'\n'}
                    </Text>
                    <TouchableOpacity
                        onPress={() => this._handlePress()}
                        style={styles.buttonContainer}
                    >
                        <Text style={{ fontSize: 20 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../Icons/rickangry.png')}
                        />
                        <Text style={styles.title}> you bastard!</Text>
                    </View>
                    <Text style={styles.text}>
                        {this.props.navigation.state.params.username} i really need you help here!{'\n'}
                        And you {this.props.navigation.state.params.username} is just shitting around!{'\n'}{'\n'}
                        NOW get me the connection!{'\n'}How hard is it to connect to an internet and press ONE button!{'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'lightblue' }}>
                        INFO: you can minimize the app - no worries
                    </Text>
                    <TouchableOpacity
                        onPress={() => this._handlePress()}
                        style={styles.buttonContainer}
                    >
                        <Text style={{ fontSize: 20 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        paddingHorizontal: 15,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});