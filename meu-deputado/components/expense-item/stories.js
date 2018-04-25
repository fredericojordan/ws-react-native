import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ExpenseItem from '.'

storiesOf('ExpenseItem', module)
    .add('Default', () => (
        <ExpenseItem />
    ))

    .add('With initial props', () => (
        <ExpenseItem
            expense={{
                'name': 'Companhia de Águas e Esgoto de Roraima',
                'type': 'Manutenção de Escritório de Apoio à Unidade',
                'date': '2018-05-10',
                'price': '1.65',
            }}
        />
    ))