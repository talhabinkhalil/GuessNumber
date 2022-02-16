import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = (props) => {
  return (
    <TextInput
     style = {{...styles.input, ...props.style}}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 5
  }
})

export default Input