import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props {
  texto: string;
  color?: Color;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

type Color = 'grisOscuro' | 'naranja' | 'gris';

export const BotonCalc = ({
  texto,
  color = 'grisOscuro',
  ancho = false,
  accion,
}: Props) => {
  let newColor;
  switch (color) {
    case 'grisOscuro':
      newColor = '#202D2D';
      break;
    case 'naranja':
      newColor = '#FF9427';
      break;
    case 'gris':
      newColor = '#9B9B9B';
      break;

    default:
      newColor = '#FFFFFF';
      break;
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: newColor,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === 'gris' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
