function verificarNumero(numero) {
    if (numero > 0) {
      return "O número é positivo.";
    } else if (numero < 0) {
      return "O número é negativo.";
    } else {
      return "O número é zero.";
    }
}
  
console.log(verificarNumero(5));
console.log(verificarNumero(-3));
console.log(verificarNumero(0));