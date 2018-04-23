import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Avatar from '.'

const avatarUrl = 'https://mainlynorfolk.info/folk/images/largerec/songsofashropshirefarmworker_12t150.jpg'

storiesOf('Avatar', module)
    .add('Default', () => (
        <Avatar source={avatarUrl} />
    ))
    .add('Fit to container', () => (
        <View style={{width: 200, height: 200}}>
            <Avatar source={avatarUrl} />
        </View>
    ))