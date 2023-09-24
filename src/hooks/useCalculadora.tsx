import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  resta,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //Evaluar si hay otro cero y hay otro punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        //Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        //Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    let negativo: boolean = false;
    let numeroTemp = numero;

    if (numero.includes('-')) {
      negativo = true;
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      console.log(numeroTemp.slice(0, -1));
      setNumero((negativo ? '-' : '') + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }

    // TODO: Mi metodo
    // if (numero.includes('-')) {
    //   if (numero.length === 2) {
    //     setNumero('0');
    //   } else {
    //     quitarUltimoNumero();
    //   }
    // } else if (numero.length === 1) {
    //   setNumero('0');
    // } else {
    //   quitarUltimoNumero();
    // }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const quitarUltimoNumero = () => {
    const nuevoNumero = numero.split('');
    nuevoNumero.pop();

    setNumero(nuevoNumero.join(''));
  };

  const btnDividir = () => {
    ultimaOperacion.current = Operadores.dividir;
    validar();
  };
  const btnMultiplicar = () => {
    ultimaOperacion.current = Operadores.multiplicar;
    validar();
  };
  const btnSumar = () => {
    ultimaOperacion.current = Operadores.sumar;
    validar();
  };

  const btnRestar = () => {
    ultimaOperacion.current = Operadores.resta;
    validar();
  };

  const validar = () => {
    if (numero !== '0' && numeroAnterior !== '0') {
      calcular();
    } else {
      cambiarNumeroPorAnterior();
    }
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    // console.log(ultimaOperacion.current);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumeroAnterior(`${num1 + num2}`);
        break;
      case Operadores.resta:
        setNumeroAnterior(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumeroAnterior(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (num1 !== 0) {
          setNumeroAnterior(`${num2 / num1}`);
        } else {
          setNumero('0');
        }
        break;
    }

    setNumero('0');
  };

  return {
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
  };
};
