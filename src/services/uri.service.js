

export const exercicio1 = async (x) => { 
  
  var a=Math.trunc(x/3600);
  x=x-(a*3600);
  var b=Math.trunc(x/60);
  x=x-(b*60);

  return a.toString() +':'+ b.toString() + ':' + x.toString();
}

export const exercicio2 = async (x,y) => {
  var quadrante;
  if (x == 0 && y == 0)
    quadrante = 'Origem';  
  else if (x == 0)
    quadrante = 'Eixo Y';
  else if (y == 0)
    quadrante = 'Eixo X';
  else if (x > 0 && y > 0)
    quadrante = 'Q1';
  else if (x > 0 && y < 0)
    quadrante = 'Q4';
  else if (x < 0 && y > 0)
    quadrante = 'Q2';
  else if (x < 0 && y < 0)
    quadrante = 'Q3';

  return quadrante;

}


export const exercicio3 = async (x) => {   
  var i = 1;
  var retorno = "";
  while (i <= x)
  {
     retorno += Math.pow(i, 1) + ' ' + Math.pow(i, 2) + ' ' + Math.pow(i, 3) + '\n';
     retorno += Math.pow(i, 1) + ' ' + (Math.pow(i, 2) + 1) + ' ' + (Math.pow(i, 3) + 1) + '\n';
     i++;
  }
  return retorno;
}


export const exercicio4 = async (x) => {   

  var retorno = "";

  var a = Math.floor(x / 100);
  x = x - (a*100);
  var b = Math.floor(x / 50);
  x = x - (b * 50);
  var c = Math.floor(x / 20);
  x = x - (c * 20);
  var d = Math.floor(x / 10);
  x = x - (d * 10);
  var e = Math.floor(x / 5);
  x = x - (e * 5);
  var f = Math.floor(x / 2);
  x = x - (f * 2);
  retorno += a + ' nota(s) de R$ 100,00' + '\n';
  retorno += b + ' nota(s) de R$ 50,00' + '\n';
  retorno += c + ' nota(s) de R$ 20,00' + '\n';
  retorno += d + ' nota(s) de R$ 10,00' + '\n';
  retorno += e + ' nota(s) de R$ 5,00' + '\n';
  retorno += f + ' nota(s) de R$ 2,00' + '\n';
  retorno += x + ' nota(s) de R$ 1,00' + '\n';

  return retorno;
}

