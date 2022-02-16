import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Colors from '../constants/Colors';

const StartGame = () => {
  console.log(wp(1))
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card styles={styles.inputContainer}>
        <Text style={{fontWeight:'bold', color:'black'}}>
          Select Number
        </Text>
        <Input
         style = {styles.inputStyle} 
         autoCapitalize = 'none'
         blurOnSubmit
         autoCorrect = {false}
         keyboardType="numeric"
         />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWidth}>
            <Button title='Reset' color={Colors.accent} />
          </View>
          <View style={styles.buttonWidth}>
            <Button title='Confirm' color={Colors.primary}/>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: wp(1)
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    // borderWidth:2,
    justifyContent:'space-around',
    marginVertical: wp(2)
  },
  inputContainer: {
    width: '90%',
    padding: 10,
    alignItems:'center',
  },
  buttonWidth: {
    width:'30%'
  },
  inputStyle: {
    width:'60%', 
    height:hp(10),
    textAlign:'center'
  }
})
export default StartGame