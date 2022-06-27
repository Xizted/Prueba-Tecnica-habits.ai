import { useNavigation } from '@react-navigation/native';
import { Box, makeStyles, Theme, useTheme } from '../theme';
import IconButton from './IconButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CardProps {
  headerComponent?: JSX.Element;
  children: JSX.Element | JSX.Element[];
  showHeader: boolean;
}

const Header = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <IconButton width={32} height={32} onPress={() => navigation.goBack()}>
      <MaterialIcons name='arrow-back' size={24} color={theme.colors.primary} />
    </IconButton>
  );
};

const Card = ({ headerComponent, children, showHeader }: CardProps) => {
  const styles = useStyles();

  return (
    <Box style={styles.card}>
      {showHeader && (
        <>
          <Box>{headerComponent ? headerComponent : <Header />}</Box>
          <Box style={styles.separator}></Box>
        </>
      )}
      <Box padding='s'>{children}</Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing.m,
    elevation: 8,
    backgroundColor: theme.colors.mainBackground,
    borderRadius: 10,
    marginBottom: theme.spacing.l,
  },
  separator: {
    height: 2,
    borderWidth: 1,
    borderColor: theme.colors.textColorSecondaryLight,
  },
}));

export default Card;
