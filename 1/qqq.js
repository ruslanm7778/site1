let admin, name;
name = "джон";
admin = name;
alert (admin);





let earth = "земля", correntUserName = "Илон";
let ourPlanetName = earth;
alert( correntUserName + " на " + ourPlanetName );








alert( 1 / 0 );//= alert( Infinity );
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
Значение NaN «прилипчиво». Любая операция с NaN возвращает NaN:
alert( "не число" / 2 + 5 ); // NaN






 символ "n" в конце означает, что это BigInt (число больше 16 цифр)
const bigInt = 1234567890123456789012345678901234567890n;






let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
alert( `результат: ${1 + 2}` ); // результат: 3





let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено






let isGreater = 4 > 1;
alert( isGreater ); // true (результатом сравнения будет "да"))








|| (ИЛИ), && (И) и ! (НЕ).
== равно, = присвоить  	alert( true == 1 ); // true
							alert( false == 0 ); // true
=== проверяет равенство без приведения типов.    alert( 0 === false );//false
  "2" > "12" → true





let age = null; нет значения.

Если переменная объявлена, но ей не присвоено никакого значения,
то её значением будет undefined
let x;
alert(x); // выведет "undefined" значение не присвоено

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert // "function"  (3)







let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string
alert(value)





Number(value)
Правила численного преобразования:

Значение	Преобразуется в…
undefined	NaN
null	0
true / false	1 / 0
string	Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка,
 то 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа в "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
alert( Number(undefined));
	alert( Number(null));





let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", так как бинарный плюс складывает строки
alert( +apples + +oranges ); // 5




alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)





let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение





//let n = 2;
//n += 5; // теперь n=7 (работает как n = n + 5)
//n *= 2; // теперь n=14 (работает как n = n * 2)

// три операции в одной строке
//for (a = 1, b = 3, c = a * b; a < 10; a++) {...}



//let a = 1, b = 1;
//let c = ++a; // ?
//let d = b++; // ?
/*	a = 2
	b = 2
	c = 2
	d = 1




let a = 1, b = 1;
alert( ++a ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма выводит старое значение и присваивает новое
alert( a ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз*/

//alert( 'Я' > 'А' ); // true
//alert( 'Кот' > 'Код' ); // true
//alert( 'Сонный' > 'Сон' ); // true
// a > A

//

let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK



//

let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year == 2015) alert( 'Вы правы!' );
else alert('вы не правы')

//


	let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year == 2015) {alert( 'Вы правы!' )};
if (year != 2015) {alert('вы не правы')}


	//
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

//

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

//

let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
alert( message );





 let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
      alert('Верно!');
    } else {
      alert('Не знаете? ECMAScript!');
    }



    let a = +prompt("Введите число", ''); //ввели 1, вернулось число 1
let b = Number(prompt("Введите число", '')); //ввели 2, вернулось число 2
result = (a + b < 4) ? 'Мало' : 'Много';// 
alert(result);


let login = prompt("Введите должность", '')
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
  alert(message)


  let login = prompt('введите логин', '');
(login == 'Сотрудник') ? alert('Привет') : 
(login == 'Директор') ? alert('Здравствуйте') :
(login == '') ? alert('Нет логина') : ''





let login = prompt("Введите должность", '')
  let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = 'Не правильное введение';
}
  alert(message)






  let hello = confirm('Добро пожаловать на сайт, вы готовы пройти регистрацию ?');
if (hello == true) {
let name = prompt("Отлично, введите ваше имя", "Введите имя здесь");
let surname = prompt("Введите вашу Фамилию", "Фамилия");
let age = prompt("Сколько вам лет ?", "Мне ... лет");
let question = confirm(`И так, вас зовут:" ${name}, ваша фамилия: ${surname} и вам ${age} лет, все верно ?`);
if (question == true) {
alert(`Спасибо, ${surname} ${name} регистрация завершена успешно!`);
} else {
while (question != true) {
name = prompt("Еще раз, введите ваше имя", "Введите имя здесь");
surname = prompt("Введите вашу Фамилию", "Фамилия");
age = prompt("Сколько вам лет ?", "Мне ... лет");
question = confirm(`И так, вас зовут:" ${name}, ваша фамилия: ${surname} и вам ${age} лет, все верно ?`);
}
}
}






let hour = +prompt('enter hour', '');
let isWeekend = confirm("today is weekend?");

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}
else {alert('офис открыт');}








let x;
let a = confirm('пусть х будет undefindet?');   // если нажать ок а == true, и оно выведится
a || (x = 1);

alert(x);








let x = confirm('are you happy?');

(x == true) && alert( 'yes you are' ) || (x == !true) && alert('no you not');



alert( !!"non-empty string" ); // true
alert( !!null ); // false  !! = boolean





let hour = prompt('enter number', '');

alert( alert(1) ||  hour  || alert(3) );



let hour = +prompt('enter number', '');

alert( alert('you entered') ||  hour  || 'not a number' );





alert( null || 2 && 3 || 4 );// результат 3




let age = prompt("введите возраст", "")
if (age >= 14 && age <= 90) {alert('age betvin 14 and 90');} 
else {alert('strange age')}



	let age = prompt("введите возраст", "")
if (!(age >= 14 && age <= 90)) {alert('age are not betvin 14 and 90');} 
else {alert('age betven 14 and 90')}




	let login = prompt("введите логин", "");

if (login == "Админ") {
	let pass = prompt("введите пароль", ""); 

if (pass == "Я главный") {alert("Здраствуйте");}
else if (pass == '' || pass == null) {
	alert('Отменено');}
else {alert('Не верный пароль');}}
else if (login == "" || login == null) {alert('Отменено');}
else {alert('Я вас не знаю');}





//    ЦИКЛИ




let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}



let i = 3;
while (i) { //  = while (i != 0) когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}


let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);




for (начало; условие; шаг) {
  // ... тело цикла ...
}




Давайте разберёмся, что означает каждая часть, на примере. 
Цикл ниже выполняет alert(i) для i от 0 до (но не включая) 3:

for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}

начало	i = 0	Выполняется один раз при входе в цикл
условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.
тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.

В целом, алгоритм работы цикла выглядит следующим образом:

Выполнить *начало*
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ ...


В примере переменная счётчика i была объявлена прямо в цикле.
 Это так называемое «встроенное» объявление переменной. Такие переменные существуют только внутри цикла.


 можно и вообще убрать всё, получив бесконечный цикл:

//for (;;) {
  // будет выполняться вечно
//}



let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*) продовження доки !falce

  sum += value;

}
alert( 'Сумма: ' + sum );









for (let i = 0; i < 10; i++) {

  //
  if (i % 2 == 0) continue; // можно использовать 0 вместо false

  alert(i); //               1, затем 3, 5, 7, 9
}



for (let i = 0; i < 10; i++) {

  if (i % 2) {     // виводить і коли значення в душках true
    alert( i );
  }

}






for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 3 == 0) continue; // можно использовать 0 вместо false
  alert(i); //               1,2,4, 5, 7, 8
}









outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');
    
alert(`Значение на координатах (${i},${j}) равно ` + input)
    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)


  }
}

alert('Готово!');





let i = 0;
while (i++ < 5) alert( i ); останнє значення 5 так як 
спочатку виконується порівняння, а потім збільшення і

let i = 0;
while (++i < 5) alert( i ); тут спочатку збільшення





for (let i = 1; i <= 10; i++)
{
if(i % 2 != 0) continue
	alert (i)

}
//=

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}







let i = 0
while(i < 3) {
	alert( `number ${i}!` )

i++
}

//=


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}





let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);




////////////////////SWitch


let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}




let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}







let a = +prompt('vvedite chislo', '');

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: //Здесь выполнение case 3 начинается со строки (*) и продолжается в case 5, потому что отсутствует break.

  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}






let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}









let browser = prompt('enter your browser' , '');

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}







const number = +prompt('Введите число между 0 и 3', '');

switch (number)
{case 0 :
alert('Вы ввели число 0');
break

case 1 :
 alert('Вы ввели число 1');
 break
 
 case 2 :
 case 3 :
 alert('Вы ввели число 2, а может и 3');
 break
}let x;
let a = confirm('пусть х будет undefindet?');   // если нажать ок а == true, и оно выведится
a || (x = 1);

alert(x);









function showMessage(from, text) { // аргументы: from, text
  alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен



let from
let text


function anotherFunction() {outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');
    
console.log(`Значение на координатах (${i},${j}) равно ` + input)
alert(`Значение функцыи` + input)
    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

  }
}
alert('Готово!')
console.log('Готово!');

}


function showMessage(from = prompt('введите название функцыи', ''), text = anotherFunction()) {

alert(from + text)
}

showMessage(from, text)






function sum(a, b) {
  return a + b;
}

let result = sum(+prompt('введите число',''), +prompt('введите число',''));
alert( result ); // 3






function showMessage(from, text) {
  // Если значение text ложно, тогда присвоить параметру text значение по умолчанию
  text = text || 'текст не добавлен';
   alert( from + ": " + text );
}

showMessage('hi','text')




function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}





Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined:

function doNothing() { /* пусто */ }

alert( doNothing() === undefined ); // true





function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
}

showPrimes(15)










let n = 15


function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

if  (isPrime(n) == true) {alert(showPrimes(n) +"простое")}   ????????????????????????????????????????????????????????





  let age

function checkAge(age) {
  
  return (age > 18) ? true : confirm('Родители разрешили?'); }

  checkAge(prompt("ррр", ""))






let age


function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

checkAge(prompt("ррр", ""))









??????????????????????????????????????????????????????????7
let a = +prompt('введіть а', '');
let b = +prompt('введіть б', '');


  function min(a, b) {
    

  if (a < b) {
    return a;
  } else {
    return b;
  }
}


if (min() == a) {alert('a менше b');} else {alert('b менше a');}
??????????????????????????????????????????????????????????????????





function pow(x, n) {
  alert(x**n)
}

pow(prompt('enter x',''), prompt('enter n',''))







function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}





let x = prompt('Введите число, возводимое в степень', '');
let n = prompt(`Введите степень, в которую будет возводиться ${x}`, '');

function pow(x, n) {
return (x ** n);
}
if (n < 1 || n % 1 != 0) {
alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
alert(pow(x, n));
}







function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}
function showCancel() {
  alert( "Вы отменили выполнение." );
}
// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);




function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);





let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке









function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);




let masuv = ['1', '2', '3']

for(let i = 0; i < masuv.length; i++ )
  {let mas = masuv[i]
    console.log(mas)}
========================================
let masuv = ['1', '2', '3']

for(let mas of masuv) {
	console.log(mas)
}


