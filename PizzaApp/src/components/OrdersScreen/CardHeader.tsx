import IconButton from '../common/IconButton';
import { Box, Text, useTheme } from '../theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useMutation } from 'react-query';
import { deleteOrder } from '../../services/orders.services';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import deleteOrderHelper from '../../helper/deleteOrder.helper';

interface CardHeader {
  Order_ID: number;
}
const CardHeader = ({ Order_ID }: CardHeader) => {
  const { orders, setOrders } = useContext(AppContext);

  const theme = useTheme();

  const { mutate } = useMutation(deleteOrder, {
    onSuccess: () => {
      const newOrders = deleteOrderHelper(orders, Order_ID);
      setOrders(newOrders);
    },
  });

  return (
    <Box flexDirection='row' justifyContent='space-between'>
      <Text variant='textBase' color='textColorSecondaryLight' fontSize={12}>
        #{Order_ID}
      </Text>
      <IconButton width={24} height={24} onPress={() => mutate(Order_ID)}>
        <MaterialIcons name='delete' size={20} color={theme.colors.red} />
      </IconButton>
    </Box>
  );
};

export default CardHeader;
