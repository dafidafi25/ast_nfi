import '@utils/ignore-warning';
import React from 'react';
import {AppNavigator} from '@navigators/index';
import {Provider} from 'react-redux';
import {store} from '@store/store';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
