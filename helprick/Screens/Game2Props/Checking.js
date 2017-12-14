import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Game extends Component {
    resolve(){
        return axios.patch('https://a08ae967.ngrok.io/players/'+this.props.navigation.state.params.groupname, {
            progress: 'Game3',
        })
        .then(res => res.data);
    }
    
    render() {
        if (this.props.navigation.state.params.scandata == 57045399) {
            return (
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../Icons/rick2.png')}
                        />
                    </View>
                    <Text style={styles.title}>
                        {this.props.navigation.state.params.username} you did it!{'\n'}
                        Then i don't have to terminate you anyway! 
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                            this.resolve() &&
                            this.props.navigation.navigate('Game3', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })}
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
                        {this.props.navigation.state.params.username} you fucking moron!{'\n'}</Text>
                        <Text style={styles.text}>
                        Do you think i could drink this shit your{'\n'} fucking lazy prick! 
                        </Text>
                        <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.goBack()}
                            style={styles.buttonContainer}
                    >
                        <Text style={{fontSize:20}}>Scan again</Text>
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
        paddingHorizontal: 15,
        marginTop: 100,
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