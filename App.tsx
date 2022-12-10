import '@utils/ignore-warning';
import React from 'react';
import * as storage from '@utils/storage/index';
import {AppNavigator, useNavigationPersistence} from '@navigators/index';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  console.log(initialNavigationState);
  if (!isNavigationStateRestored) return null;

  return (
    <>
      <AppNavigator
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </>
  );
}

export default App;
