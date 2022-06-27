import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const AppContainer = () => {
  const { token } = useContext(AppContext);

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default AppContainer;
