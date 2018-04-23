import React from 'react'
import { StyleSheet, View} from 'react-native'
import { storiesOf } from '@storybook/react-native'

import CongressistItem from '.'

const avatarUrl = 'http://lorempixel.com/200/200'

storiesOf('CongressistItem', module)
    .add('Default', () => (
        <View style={styles.container}>
            <CongressistItem congressist={{
                avatarUrl: avatarUrl,
                name: 'Frederico Jordan',
                party: 'My Party',
            }}/>
        </View>
    ))

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})