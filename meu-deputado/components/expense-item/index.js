import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const formatDate = date => {
    const dateObj = new Date(date)
    return [
        ('0' + dateObj.getDate()).slice(-2),
        ('0' + (dateObj.getMonth() + 1)).slice(-2),
        dateObj.getFullYear()
    ].join('/')
}

const formatPrice = moneyStr => {
    const moneyFloat = parseFloat(moneyStr)
    return 'R$' + moneyFloat.toFixed(2).replace('.', ',')
}

const ExpenseItem = props => (
    <View style={styles.container}>

        <View style={styles.info1}>
            <Text style={[styles.text, styles.name]} numberOfLines={2}>
                {props.expense.name}
            </Text>
            <Text style={styles.text} numberOfLines={2}>
                {props.expense.type}
            </Text>
        </View>

        <View style={styles.info2}>
            <Text style={styles.text} numberOfLines={1}>
                {formatDate(props.expense.date)}
            </Text>
            <Text style={[styles.text, styles.price]} numberOfLines={1}>
                {formatPrice(props.expense.price)}
            </Text>
        </View>
    </View>
)

ExpenseItem.defaultProps = {
    expense: {
        name: 'Default Name',
        type: 'Default Type',
        date: 'undefined',
        price: '0.00',
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    info1: {
        marginBottom: 16,
    },

    info2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    text: {
        fontSize: 14,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    price: {
        fontWeight: 'bold',
    }

})

export default ExpenseItem