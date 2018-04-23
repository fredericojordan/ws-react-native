import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Avatar from '.'

const avartarUrl = 'https://mainlynorfolk.info/folk/images/largerec/songsofashropshirefarmworker_12t150.jpg'
// const avartarUrl = 'http://lorempixel.com/200/200'

storiesOf('Avatar', module)
    .add('Default', () => (
        <Avatar source={avartarUrl} />
    ))
    .add('Fit to container', () => (
        <View style={{width: 200, height: 200}}>
            <Avatar source={avartarUrl} />
        </View>
    ))