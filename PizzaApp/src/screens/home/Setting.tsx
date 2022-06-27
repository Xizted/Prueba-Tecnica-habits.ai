import React, { useContext } from 'react';
import { deleteItemAsync } from 'expo-secure-store';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Card from '../../components/common/Card';
import IconButton from '../../components/common/IconButton';

import AppContext from '../../context/AppContext';
import { Box, useTheme } from '../../components/theme';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/common/Button';

const Header = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <IconButton width={32} height={32} onPress={() => navigation.goBack()}>
      <MaterialIcons name='arrow-back' size={24} color={theme.colors.primary} />
    </IconButton>
  );
};

const Setting = () => {
  const { setToken } = useContext(AppContext);
  const theme = useTheme();

  const logout = async () => {
    await deleteItemAsync('token');
    setToken(null);
  };

  return (
    <Box flex={1} padding={'l'}>
      <Card showHeader={true}>
        <Button
          text='Log Out'
          bgcolor={theme.colors.primary}
          onPress={logout}
        />
      </Card>
    </Box>
  );
};

export default Setting;
