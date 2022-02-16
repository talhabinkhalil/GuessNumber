import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    // paddingTop: 10,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'black',
    fontSize:18
  }
})

export default Header