/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

const convertTime = (h) => {
  let hour = h > 12 ? h - 12 : h;
  return hour;
}

const toAmPmHour = (h, m) => {
  const hour = convertTime(h)
  let period = h >= 12 && m > 0 ? 'P.M.' : 'A.M.'
  console.log(`${hour} : ${m} ${period} `);
}

toAmPmHour(18, 40)