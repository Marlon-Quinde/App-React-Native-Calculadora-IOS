import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadorScreen = () => {
  const {
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    limpiar,
    calcular,
    numero,
    numeroAnterior,
    positivoNegativo,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" color="gris" accion={limpiar}></BotonCalc>
        <BotonCalc
          texto="+/-"
          color="gris"
          accion={positivoNegativo}></BotonCalc>
        <BotonCalc texto="del" color="gris" accion={btnDelete}></BotonCalc>
        <BotonCalc texto="/" color="naranja" accion={btnDividir}></BotonCalc>
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="7" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="8" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="9" accion={armarNumero}></BotonCalc>
        <BotonCalc
          texto="X"
          color="naranja"
          accion={btnMultiplicar}></BotonCalc>
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="4" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="5" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="6" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="-" color="naranja" accion={btnRestar}></BotonCalc>
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="1" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="2" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="3" accion={armarNumero}></BotonCalc>
        <BotonCalc texto="+" color="naranja" accion={btnSumar}></BotonCalc>
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="0" ancho accion={armarNumero}></BotonCalc>
        <BotonCalc texto="." accion={armarNumero}></BotonCalc>
        <BotonCalc texto="=" color="naranja" accion={calcular}></BotonCalc>
      </View>
    </View>
  );
};
