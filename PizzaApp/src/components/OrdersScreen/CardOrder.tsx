import Card from '../common/Card';
import { Box, Text } from '../theme';
import PIZZA from '../../../assets/img/pizza.svg';
import { Dimensions } from 'react-native';
import CardHeader from './CardHeader';

interface CardOrderProps {
  Crust: string;
  Flavor: string;
  Order_ID: number;
  Size: string;
  Table_No: number;
  Timestamp: string;
}



const CardOrder = ({
  Order_ID,
  Flavor,
  Size,
  Table_No,
  Crust,
  Timestamp,
}: CardOrderProps) => {
  const { width, height } = Dimensions.get('window');
  return (
    <Card headerComponent={<CardHeader Order_ID={Order_ID} />} showHeader={true}>
      <Box flexDirection='row' flex={1}>
        <Box>
          <Text variant='textSM'>Crust: {Crust}</Text>
          <Text variant='textSM'>Flavor: {Flavor}</Text>
          <Text variant='textSM'>Size: {Size}</Text>
          <Text variant='textSM'>Table: {Table_No}</Text>
          <Text variant='textSM'>{Timestamp}</Text>
        </Box>
        <Box>
          <PIZZA width={width * 0.3} height={height * 0.2} />
        </Box>
      </Box>
    </Card>
  );
};

export default CardOrder;
