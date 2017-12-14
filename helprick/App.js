import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Login from './Screens/Login' //Login skærm
import GameInfo from './Screens/GameInfo' //Info om spil
import Game1 from './Screens/Game1Props/Game' //Internet connection
import Scanner2 from './Screens/Game2Props/Scanner' //Scanner barcode
import Checking2 from './Screens/Game2Props/Checking' //Checker barcode
import Game2 from './Screens/Game2Props/Game' // Scanner spil -startSide
import Checking3 from './Screens/Game3Props/Checking' //Checker kvadratrod af pi
import Game3 from './Screens/Game3Props/Game' //Kvadratrod pi -startSide
import Game4 from './Screens/Game4Props/Game' //Bevægelse/løb -Spil
import Game5 from './Screens/Game5Props/Game' //MultipleChoice
import Checking6 from './Screens/Game6Props/Checking' //Checker for rigtig tidspunkt studievejledning
import Game6 from './Screens/Game6Props/Game' //Studievejledning spil
import Done7 from './Screens/Game7Props/Done' // Færdig

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Login: { screen: Login, },
  GameInfo: { screen: GameInfo, },
  Game1: { screen: Game1, },
  Scanner2: { screen: Scanner2, },
  Checking2: { screen: Checking2, },
  Game2: { screen: Game2, },
  Checking3: { screen: Checking3, },
  Game3: { screen: Game3, },
  Game4: { screen: Game4, },
  Game5: { screen: Game5, },
  Checking6: {screen: Checking6, },
  Game6: { screen: Game6, },
  Done7: { screen: Done7, },
}, {
    headerMode: 'none',
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
