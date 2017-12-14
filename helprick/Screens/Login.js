import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput } from 'react-native';

export default class Login extends Component {

    componentDidMount() {
        this.setState({ username: 'John Doe', penalty: 0 })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./Icons/Rick.gif')}
                    />
                    <Text style={styles.title}>Ready for some fun?</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.containerText}>
                        <TextInput
                            placeholder="Your name"
                            onChangeText={(text) => this.setState({ username: text })}
                            onSubmitEditing={() => this.groupInput.focus()}
                            autoCorrect={false}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Group id"
                            onChangeText={(text) => this.setState({ groupname: text })}
                            style={styles.input}
                            keyboardType="numeric"
                            ref={(input) => this.groupInput = input}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('GameInfo', { username: this.state.username, groupname: this.state.groupname, penalty: this.state.penalty })}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerText: {
        padding: 20,
    },
    formContainer: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 200
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        textAlign: 'center'
    },
    input: {
        borderRadius: 15,
        height: 40,
        width: 250,
        backgroundColor: 'lightblue',
        marginBottom: 10,
        paddingHorizontal: 15,
        textAlign: 'center'
    },
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center'
    }
});