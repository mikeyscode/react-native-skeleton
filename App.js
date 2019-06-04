import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import orderReducer from './reducers/orderReducer';
import AppNavigatorContainer from './AppNavigator';

const store = createStore(orderReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <Provider store={ store }>
        <AppNavigatorContainer />
      </Provider>
    );
  };
}

