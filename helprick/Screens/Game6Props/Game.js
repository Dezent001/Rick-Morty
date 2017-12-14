import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Picker } from 'react-native';
import moment from 'moment';

let currentDay = moment().format('dddd');

const timehour = [
    {
        label: '12:00',
        value: '12:00',
    },
    {
        label: '12:30',
        value: '12:30',
    },
    {
        label: '13:00',
        value: '13:00',
    },
    {
        label: '13:30',
        value: '13:30',
    },
    {
        label: '14:00',
        value: '14:00',
    },
    {
        label: '14:30',
        value: '14:30',
    },
    {
        label: '15:00',
        value: '15:00',
    },
    {
        label: '15:30',
        value: '15:30',
    },
    {
        label: '16:00',
        value: '16:00',
    },
    {
        label: '16:30',
        value: '16:30',
    },
    {
        label: '17:00',
        value: '17:00',
    },
];

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: '',
        };
    }

    _handlePress = () => {
        switch (currentDay) {
            case 'Monday':
                if (this.state.hour == '12:00') {
                    this.props.navigation.navigate('Checking6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                } else {
                    this.props.navigation.navigate('Checking6', { fail: 1, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                }
                break;
            case 'Tuesday':
                if (this.state.hour == '12:30') {
                    this.props.navigation.navigate('Checking6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                } else {
                    this.props.navigation.navigate('Checking6', { fail: 1, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                }
                break;
            case 'Wednesday':
                if (this.state.hour == '13:00') {
                    this.props.navigation.navigate('Checking6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                } else {
                    this.props.navigation.navigate('Checking6', { fail: 1, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                }
                break;
            case 'Thursday':
                if (this.state.hour == '13:30') {
                    this.props.navigation.navigate('Checking6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                } else {
                    this.props.navigation.navigate('Checking6', { fail: 1, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                }
                break;
            case 'Friday':
                if (this.state.hour == '14:00') {
                    this.props.navigation.navigate('Checking6', { username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                } else {
                    this.props.navigation.navigate('Checking6', { fail: 1, username: this.props.navigation.state.params.username, groupname: this.props.navigation.state.params.groupname, penalty: this.props.navigation.state.params.penalty })
                }
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Icons/rick5.png')}
                    />
                    <Text style={styles.title}>Student guidance!</Text>
                </View>
                <Text style={styles.text}>
                    {this.props.navigation.state.params.username} you have to find the student guidance...{'\n'}
                    I need some documents from their office and therefore i need to know when they are off duty!{'\n'}
                    Tell me when the office closes...
                    </Text>
                <Picker
                    selectedValue={this.state.hour}
                    onValueChange={itemValue => this.setState({ hour: itemValue })}>
                    {timehour.map((i, index) => (
                        <Picker.Item color='lightblue' key={index} label={i.label} value={i.value} />
                    ))}
                </Picker>
                <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() =>
                        this._handlePress()
                    }
                    style={styles.buttonContainer}
                >
                    <Text style={{fontSize:20}}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
    row: {
        flexDirection: 'row'
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
        width: 220,
        height: 180,
    },
    title: {
        color: 'lightblue',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 26
    }
});