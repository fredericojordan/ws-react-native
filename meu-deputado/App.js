import React from 'react';
import { StackNavigator } from 'react-navigation'

import SearchScreen from './screens/search'

export default StackNavigator({
    Search: {
        screen: SearchScreen,
    },
    initialRouteName: 'Search',

})

// import StorybookUI from './storybook'
// export default StorybookUI
