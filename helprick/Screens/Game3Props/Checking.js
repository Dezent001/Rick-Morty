import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Game extends Component {
    resolve(bool){
        return axios.patch('https://a08ae967.ngrok.io/players/'+this.props.navigation.state.params.groupname, {
            progress: 'Game4',
            penalty: bool,
        })
        .then(res => res.data);
    }
    render() {
        if (this.props.navigation.state.params.pi == "1,77" || this.props.navigation.state.params.pi == "1.77") {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../Icons/rick2.png')}
                        />
                    </View>
                    <Text style={styles.title}>
                        {this.props.navigation.state.params.username} thats it!{'\n'}
                        Well too bad i did'nt need it anyway...{'\n'}Lets move on!
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                        this.resolve(this.props.navigation.state.params.penalty) &&
                            this.props.navigation.navigate('Game4', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
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
                        {this.props.navigation.state.params.username} do you feel superior?{'\n'}</Text>
                        <Text style={styles.text}>
                        Well your not! Are you stupid? most easy question!{'\n'} fucking ass wipe! Lets move on.....
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                            this.resolve(this.props.navigation.state.params.penalty + 1) &&
                            this.props.navigation.navigate('Game4', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty + 1 })}
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
        marginTop: 50,
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