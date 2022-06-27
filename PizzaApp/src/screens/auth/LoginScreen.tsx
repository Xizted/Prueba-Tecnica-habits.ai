import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { Box, makeStyles, Text, Theme, useTheme } from '../../components/theme';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import LOGO from '../../../assets/img/login.svg';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useMutation } from 'react-query';
import login from '../../services/auth.services';
import { setItemAsync } from 'expo-secure-store';
import AppContext from '../../context/AppContext';

interface LoginValues {
  username: string;
  password: string;
}

const LoginScreen = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { width, height } = Dimensions.get('window');
  const { setToken } = useContext(AppContext);

  const { control, handleSubmit } = useForm<LoginValues>({
    mode: 'all',
    defaultValues: {
      username: 'test',
      password: 'test',
    },
  });
  const { mutate, isLoading } = useMutation(login, {
    onSuccess: async ({ data }) => {
      const token = data.access_token;
      await setItemAsync('token', data.access_token);
      setToken(token);
    },
  });

  const onSubmit = (values: LoginValues) => mutate(values);

  if (isLoading) return <Text variant='textBase'>loading...</Text>;

  return (
    <Box style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <Box style={styles.logoContainer}>
          <LOGO width={width * 0.5} height={height * 0.4} />
        </Box>
        <Text variant='header' textAlign='center'>
          Login Now
        </Text>
        <Text
          variant='textBase'
          textAlign='center'
          color='textColor'
          marginTop={'l'}
        >
          Please Enter the details below to continue
        </Text>
        <Box style={styles.form}>
          <Box>
            <Controller
              name='username'
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  title='Username'
                  value={value}
                  placeholder='Username'
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field: { onBlur, onChange, value } }) => (
                <Input
                  title='Password'
                  value={value}
                  placeholder='Password'
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />
          </Box>
          <Button
            text='LOGIN'
            bgcolor={theme.colors.primary}
            onPress={handleSubmit(onSubmit)}
          />
        </Box>
      </KeyboardAwareScrollView>
    </Box>
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

export default LoginScreen;
