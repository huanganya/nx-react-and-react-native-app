import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack as SuperviseeAppStack } from '@shareapp1/supervisee-ui';
import { AppStack as SupervisorAppStack } from '@shareapp1/supervisor-ui';
import { AuthStack } from '@shareapp1/auth-ui';
import { AppProvider } from '@shareapp1/common-ui/react-native';

export const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <SuperviseeAppStack />
        <SupervisorAppStack />
        <AuthStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
