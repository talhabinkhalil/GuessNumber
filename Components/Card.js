import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
  return (
    <View style = {{...styles.card, ...props.styles}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    // width: '90%',
    // padding: 10,
    // alignItems:'center',
    elevation:10,
    backgroundColor:'white',
    borderRadius:15
  }
})
export default Card