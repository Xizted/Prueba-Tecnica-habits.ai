import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../screens/home/Order/OrdersScreen'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '../components/theme';
import IconButton from '../components/common/IconButton';
import Setting from '../screens/home/Setting';
import { useNavigation } from '@react-navigation/native';
import AddOrderScreen from '../screens/home/Order/AddOrderScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const theme = useTheme();

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='List Orders'
        component={OrdersScreen}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => {
            return (
              <IconButton
                width={32}
                height={32}
                onPress={() => navigation.navigate('Settings' as never)}
              >
                <MaterialIcons
                  name='settings'
                  size={24}
                  color={theme.colors.primary}
                />
              </IconButton>
            );
          },
        }}
      />
      <Stack.Screen
        name='Add Order'
        component={AddOrderScreen}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => {
            return (
              <IconButton
                width={32}
                height={32}
                onPress={() => navigation.goBack()}
              >
                <MaterialIcons
                  name='arrow-back'
                  size={24}
                  color={theme.colors.primary}
                />
              </IconButton>
            );
          },
        }}
      />
      <Stack.Screen
        name='Settings'
        component={Setting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
