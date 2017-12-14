import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Game extends Component {
    resolve(bool){
        return axios.patch('https://a08ae967.ngrok.io/players/'+this.props.navigation.state.params.groupname, {
            progress: 'Game7',
            penalty: bool,
        })
        .then(res => res.data);
    }

    render() {
        if (this.props.navigation.state.params.fail == undefined) {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../Icons/rick2.png')}
                        />
                    </View>
                    <Text style={styles.title}>
                        {this.props.navigation.state.params.username} you are becoming good!{'\n'}
                        {'\n'}Reeally good!
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                            this.resolve(this.props.navigation.state.params.penalty) &&
                            this.props.navigation.navigate('Done7', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
                            style={styles.buttonContainer}
                    >
                        <Text style={{fontSize:20}}>Continue</Text>
                    </TouchableOpacity>
                    </View>
            )
        }else{
            return (
            <View style={styles.container}>
            <View style={styles.logoContainer2}>
                <Image
                    style={styles.logo2}
                    source={require('../Icons/rickangry.png')}
                />
            </View>
            <Text style={styles.title}>
                        hmm...{'\n'}</Text>
                        <Text style={styles.text}>
                        Are you sure!.. Can't be true!{'\n'} hmm... Hey! You are WRONG! Moron!{'\n'}{'\n'}Lets continue.....
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                            this.resolve(this.props.navigation.state.params.penalty + 1) &&
                            this.props.navigation.navigate('Done7', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty + 1 })}
                            style={styles.buttonContainer}
                    >
                        <Text style={{fontSize:20}}>Continue</Text>
                    </TouchableOpacity>
            </View>  
            )
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
        marginTop: 60,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    TransformContainer: {
        flex: 2,
    },
    logoContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    logoContainer2: {
        marginTop: 20,
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
    logo2: {
        width: 200,
        height: 300,
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});