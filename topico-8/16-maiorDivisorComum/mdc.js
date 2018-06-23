/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero inteiro positivo
 * @param {number} b - Representa um numero inteiro positivo
 * @param {number} num1 - Representa um numero inteiro positivo
 * @param {number} num2 - Representa um numero inteiro positivo
 * @param {number} x - Representa uma variavel auxiliar
 */

var x = 0; 

function maiorDivisorComum(a, b) {
	if( (a >= b) && (b > x) ){
		while( b != x ){
			m = a % b;
			a = b;
			b = m;
		}
	
		return a;
	}
	
}

var num1 = 300;
var num2 = 200;
console.log(maiorDivisorComum(num1, num2));