import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useMutation } from 'react-query';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import Input from '../../../components/common/Input';
import { Box, makeStyles, Theme, useTheme } from '../../../components/theme';
import AppContext from '../../../context/AppContext';
import { addOrder } from '../../../services/orders.services';

interface AddOrderValues {
  Crust: string;
  Flavor: string;
  Size: string;
  Table_No: string;
}

const AddOrderScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const navigation = useNavigation();
  const { orders, setOrders } = useContext(AppContext);

  const { control, handleSubmit } = useForm<AddOrderValues>({
    defaultValues: {
      Crust: '',
      Flavor: '',
      Size: '',
      Table_No: '',
    },
    mode: 'all',
  });

  const { mutate } = useMutation(addOrder, {
    onSuccess: (data) => {
      navigation.goBack();
      setOrders([...orders, data]);
    },
  });

  const onSubmit = async (values: AddOrderValues) => {
    mutate({
      Crust: values.Crust,
      Flavor: values.Flavor,
      Size: values.Size,
      Table_No: parseInt(values.Table_No),
    });
  };

  return (
    <KeyboardAwareScrollView>
      <Box flex={1} padding={'l'}>
        <Card showHeader={false}>
          <Box style={styles.form}>
            <Box>
              <Controller
                name='Crust'
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    title='Crust'
                    value={value}
                    placeholder='Crust'
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                name='Flavor'
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    title='Flavor'
                    value={value}
                    placeholder='Flavor'
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                name='Size'
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    title='Size'
                    value={value}
                    placeholder='Size'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType={'number-pad'}
                  />
                )}
              />
              <Controller
                name='Table_No'
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    title='Table_No'
                    value={value.toString()}
                    placeholder='Table_No'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType={'number-pad'}
                  />
                )}
              />
            </Box>
            <Button
              text='ADD'
              bgcolor={theme.colors.primary}
              onPress={handleSubmit(onSubmit)}
            />
          </Box>
        </Card>
      </Box>
    </KeyboardAwareScrollView>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
  },
}));

export default AddOrderScreen;
