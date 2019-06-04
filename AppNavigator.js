import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
});

const AppNavigatorContainer = createAppContainer(AppNavigator);


export default AppNavigatorContainer;