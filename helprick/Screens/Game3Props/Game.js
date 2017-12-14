import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Game extends Component {

    componentDidMount() {
        this.setState({ pi: '' })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Icons/portalgun.png')}
                    />
                </View>
                    <Text style={styles.title}>My transportation gun is {'\n'}jammed {this.props.navigation.state.params.username}!</Text>
                    <Text style={styles.text}>
                        {this.props.navigation.state.params.username} i'm almost there just a little more configurations.{'\n'}
                        Can you tell me the square root of pi? That would really help me {this.props.navigation.state.params.username}!
                    </Text>
                    <TextInput
                        placeholder="Square root of pi"
                        onChangeText={(text) => this.setState({ pi: text })}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Checking3', { pi: this.state.pi, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
                        style={styles.buttonContainer}
                    >
                        <Text style={{ fontSize: 20 }}>Got it!</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
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
        marginTop: 40,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    TransformContainer: {
        flex: 2,
    },
    button: {
        height: 40,
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'lightblue',
        fontSize: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    input: {
        borderRadius: 15,
        height: 40,
        backgroundColor: 'lightblue',
        marginTop: 30,
        paddingHorizontal: 15
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});