import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import IconButton from '../../../components/common/IconButton';
import CardOrder from '../../../components/OrdersScreen/CardOrder';
import { Box, Text, theme } from '../../../components/theme';
import AppContext from '../../../context/AppContext';
import { getOrders } from '../../../services/orders.services';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ListOrder = () => {
  const navigation = useNavigation();
  const { orders, setOrders } = useContext(AppContext);

  const { isLoading } = useQuery('orders', getOrders, {
    onSuccess: (data) => {
      setOrders(data);
    },
  });

  if (isLoading) return <Text variant='textBase'>loading...</Text>;

  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
      >
        <Box flex={1} padding='l'>
          {orders.map((orders) => (
            <CardOrder key={orders.Order_ID} {...orders} />
          ))}
        </Box>
      </ScrollView>
      <Box
        position='absolute'
        bottom={48}
        right={20}
        backgroundColor='transparent'
      >
        <IconButton
          height={64}
          width={64}
          style={{ backgroundColor: theme.colors.primary, elevation: 8 }}
          onPress={() => navigation.navigate('Add Order' as never)}
        >
          <MaterialIcons
            name='add'
            size={32}
            color={theme.colors.textColorSecondary}
          />
        </IconButton>
      </Box>
    </>
  );
};

export default ListOrder;
