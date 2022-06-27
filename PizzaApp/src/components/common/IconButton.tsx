import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../theme';

interface IconButtonProps {
  children: JSX.Element;
  width: number;
  height: number;
}

const IconButton = ({
  children,
  width,
  height,
  style,
  ...props
}: IconButtonProps & TouchableOpacityProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          borderRadius: 100,
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
