import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Avatar = props => (
    <Image
        source={{uri: props.source}}
        style={styles.image}
    />
)

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    }
})

export default Avatar