import React from 'react'
import { StyleSheet, View} from 'react-native'
import { storiesOf } from '@storybook/react-native'

import CongressistItem from '.'

const avatarUrl = 'https://mainlynorfolk.info/folk/images/largerec/songsofashropshirefarmworker_12t150.jpg'

storiesOf('CongressistItem', module)
    .add('Default', () => (
        <View style={styles.container}>
            <CongressistItem congressist={{
                avatarUrl: avatarUrl,
                name: 'Fred',
                party: 'OH YEA',
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