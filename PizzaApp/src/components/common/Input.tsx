import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { makeStyles, Text, Theme } from '../theme';

interface InputProps {
  title: string;
}

const Input = ({ style, title, ...props }: TextInputProps & InputProps) => {
  const styles = useStyles();

  return (
    <>
      <Text variant='textSM'>{title}</Text>
      <TextInput style={[styles.input, style]} {...props} />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.colors.inputBackground,
    padding: theme.spacing.m,
    borderRadius: 50,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.m,
  },
}));

export default Input;
