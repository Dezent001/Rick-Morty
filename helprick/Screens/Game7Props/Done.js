import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import moment from 'moment';

let currentTime = moment().format('HH:mm');

export default class Game extends Component {

    render() {
        return (
            axios.patch('https://a08ae967.ngrok.io/players/' + this.props.navigation.state.params.groupname, {
                progress: 'Done',
            }).then(res => res.data),
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Icons/Ending.jpg')}
                    />
                </View>
                <Text style={styles.title}>{this.props.navigation.state.params.username} you did it!</Text>
                <Text style={styles.text}>
                    I got my transportation gun working again!{'\n'}
                    Great job {this.props.navigation.state.params.username} you really made it!{'\n'}{'\n'}
                    You can now return to your classroom{'\n'}
                </Text>
                <View style={styles.TransformContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('https://a08ae967.ngrok.io/players')}
                        style={styles.buttonContainer}
                    >
                        <Text style={{ fontSize: 20 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        marginTop: 60,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },
    TransformContainer: {
        flex: 2,
    },
    logoContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    logo: {
        width: 300,
        height: 250,
    },
    title: {
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});