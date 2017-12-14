import Expo from "expo";
import React from "react";
import axios from 'axios';
import { Pedometer } from "expo";
import { StyleSheet, Text, View, Image } from "react-native";

export default class PedometerSensor extends React.Component {
    state = {
        isPedometerAvailable: "checking",
        currentStepCount: 0,
    };

    resolve(){
        return axios.patch('https://a08ae967.ngrok.io/players/'+this.props.navigation.state.params.groupname, {
            progress: 'Game5',
        })
        .then(res => res.data);
    }

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            if (this.state.currentStepCount > 1) {
                this.props.navigation.navigate('Game5', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                this.resolve()
                this._unsubscribe();
            }else{
            this.setState({
                currentStepCount: result.steps
            });
        }
        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result)
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: "Could not get isPedometerAvailable: " + error
                });
            }
        );
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../Icons/rick3.png')}
                />
            </View>
            <View style={styles.TransformContainer}>
                    <Text style={styles.title}>I need electricity {this.props.navigation.state.params.username}!</Text>
                    <Text style={styles.text}>
                        {this.props.navigation.state.params.username} i'm almost out of power!{'\n'}
                        Thats the only thing that may not happen {this.props.navigation.state.params.username}!{'\n'}
                        Quickly start running! As you know humans generate power by movement!{'\n'}
                        {this.props.navigation.state.params.username} you only have to make around 100 steps!{'\n'}
                        Hope that's enough...
                    </Text>
                        <Text style={styles.large}>
                            Steps: {this.state.currentStepCount}
                        </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    buttonContainer: {
        borderRadius: 20,
        height: 50,
        width: 150,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    large: {
        color: 'lightblue',
        marginTop: 50,
        textAlign: 'center',
        fontSize: 35
    },
    TransformContainer: {
        flex: 2,
    },
    button: {
        height: 40,
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'lightblue',
        fontSize: 20
    },
    logo: {
        width: 200,
        height: 220,
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});

Expo.registerRootComponent(PedometerSensor);