import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Avatar from "../avatar/index";

const CongressistItem = props => (
    <View style={styles.container}>
        <View style={styles.avatar}>
            <Avatar source={props.congressist.avatarUrl} />
        </View>
        <View>
            <Text style={styles.name}>
                {props.congressist.name}
            </Text>
            <Text style={styles.party}>
                {props.congressist.party}
            </Text>
        </View>
    </View>
)

CongressistItem.defaultProps = {
    congressist: {
        avatarUrl: '',
        name: '',
        party: '',
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    avatar: {
        height: 60,
        width: 60,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
    },
    party: {
        fontSize: 12,
    },
})

export default CongressistItem