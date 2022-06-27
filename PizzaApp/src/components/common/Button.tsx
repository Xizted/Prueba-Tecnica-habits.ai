import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { makeStyles, Text, Theme } from '../theme';

interface ButtonProps {
  text: string;
  bgcolor: string;
}

const Button = ({
  bgcolor,
  text,
  style,
  ...props
}: ButtonProps & TouchableOpacityProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[{ ...styles.ButtonContainer, backgroundColor: bgcolor }, style]}
      {...props}
    >
      <Text variant='textBase' textAlign='center' color='textColorSecondary'>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  ButtonContainer: {
    marginTop: theme.spacing.l,
    elevation: 8,
    borderRadius: 50,
    padding: theme.spacing.m,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
}));

export default Button;
