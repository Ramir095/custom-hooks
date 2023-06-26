import { useState } from "react"

export const useCounter = (initialValue = 10) => {

  // eslint-disable-next-line no-unused-vars
  const [ counter, setCounter ] = useState(initialValue);

  const handleIncrement = (value = 1) => {
    setCounter( (current) => current + value );
  };

  const handleDecrement = (value = 1) => {
    setCounter( (current) => current - value );  // Actualizamos la forma de sumar el nuevo valor ya que en los test, cuando realizamos los act, no aplica correctamente la funcion. Se toma el valor iniciar en lugar del valor actualizado
  };

  const handleReset = () => {
    setCounter(initialValue )
  };

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset
  }
}
