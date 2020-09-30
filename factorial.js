//расчет факториала циклом
function fak(a){ 
  if (a == 1 || 0) return 1 //(`Факториал числа ${a} равен 1`)}
  else
  {rez = 1;
for( i = 1; i < a; i++){
  rez = rez * (i + 1)
  }
  return  rez// (`Факториал числа ${a} равен ${rez}`)
  }

  }
  fak(5)

  //расчет факториала ркурсией
function fakRekus(a){
  if (a > 1){
   a = a * fakRekus(a-1)
   }
return a
  }
  console.log(fakRekus(15))
