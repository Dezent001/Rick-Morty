import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Game extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Icons/rick2.png')}
                    />
                </View>
                <Text style={styles.title}>{this.props.navigation.state.params.username} i'm thirsty!</Text>
                <Text style={styles.text}>
                    {this.props.navigation.state.params.username} my transportation gun is fucking me.{'\n'}
                    But i made a copying machine! I just need you {this.props.navigation.state.params.username} to fetch me the bar code from a CocaCola for my... Drink...
                    </Text>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Scanner2', { censur: this.props.navigation.state.params.censur, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
                    style={styles.buttonContainer}
                >
                    <Text style={{ fontSize: 20 }}>Start scanner</Text>
                </TouchableOpacity>
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
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        marginTop: 100,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    TransformContainer: {
        flex: 2,
    },
    button: {
        marginTop: 100,
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