import React from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'

import TextInput from '.'

storiesOf('TextInput', module)
    .add('Default', () => (
        <TextInput/>
    ))

    .add('With placeholder', () => (
        <TextInput placeholder="Busca por nome"/>
    ))

    .add('With background color', () => (
        <View style={{backgroundColor: 'red', padding: 10}}>
            <TextInput placeholder="Busca por nome"/>
        </View>
    ))

    .add('With value', () => (
        <View style={{backgroundColor: 'blue', padding: 10}}>
            <TextInput placeholder="Busca por nome" value="Test value"/>
        </View>
    ))

    .add('Action on input', () => (
        <View style={{backgroundColor: 'blue', padding: 10}}>
            <TextInput
                placeholder="Busca por nome"
                value="Test value"
                onChangeText={action('input')}
            />
        </View>
    ))