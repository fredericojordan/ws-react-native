import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput as RNTextInput } from 'react-native'

const TextInput = props => (
    <RNTextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        underlineColorAndroid="transparent"
        // clearButtonMode="while-editing" // iOS only
    />
)

const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        height: 32,
        borderRadius: 8,
    }
})

export default TextInput