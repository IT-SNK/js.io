"use strict"

// let answer = prompt("Зимой и летом одним цветом");

// if (answer.toLowerCase() == "елка"){
//     alert("правильно");
// }else {
//     alert("xuilo")
// }

// 3primer
// let name = prompt("ymya");
// let surname = prompt("famil");
//                                                              // alert('privet,' + name + '.fami your' + surname);
// if (name.length > 2 && surname.length > 2){
// alert(`privet ${name}  ${surname}`);
// } else{
//    alert ("xuilo");
// }

//4 primer
// let age = Number(prompt("Введите ваш возраст"));

// if(age < 18) {
//     alert("вам скидка 10%");
// } else if (age >= 18 && age < 60) {
//     alert("Вам скидка 20%");
// } else if (age >= 60) {
// alert ("вам скидка 30%");
// }else {
//     alert ("xuilo");
// }



//5primer
// let day = prompt("Ведите день недели");
// switch(day) {
//     case "Понедельник":
//         alert("будем пахать");//console.log тоже канает
//         break;

//     case "вторник":
//         alert("будем жариить баб");
//         break;

//     default:
//         alert("xuilo");

// }

//6 primer shablon
// let name = prompt("Введите имя");
// let surname = prompt("Введите фамилию");

// if (name.length > 2 && surname.length > 2) {
//     alert(`privet ${name}  ${surname}`);
// }



//7 primer
// let i = 0;
// while (i < 5) {
//     console.log("какой то " + i);
//     i++
// }


//8 primer
// for (let i = 0; i < 5; i++) {
//     alert("xuilo " + i)
// }


//9 primer(бесконечный цикл)
// while (true) {
//     let number = +prompt("веди число мразь");
//     if (number > 0) {
//         break;
//     }
// }

//10 primer
// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//         continue;
//     } console.log(i);
// }

//11 primer //massiv
// const array = [5, 7, 9];
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//12primer
// let users = ['Жанат', 'Батыр', 'Акака'];
// alert('Мой сын :' + users[1]);                           //console.log(users);
// alert('Жена: ' + users[0]);


// 13 primer
// const myCar = {
//     model: 'BMW',
//     color: 'black',
//     number: 123654,
//     arr: [],
//     deep: function () {
//         console.log('машина подает сигнал');
//     }
// };
// myCar.deep();

//14 primer
// const obj1 = {
//     author: 'nauryz ',
//     text: ' lorem',
//     show: function () {
//         alert(this.author + 'say' + this.text);
//     }
// }

//15primer(конструктор)

// function car(color, name, price) {
//     this.color = color;
//     this.name = name;
//     this.price = price;
// }
// let car1 = new car('red', 'nexia', '1250000');
// let car2 = new car('черный', 'mers', '200');

// console.log(car1, car2);//можно добавить (car1.name //car1.price)














//8urok
// function showName() {
//     console.log(this);
//     alert(this.userName);
// }
// const user1 = {
//     userName: 'Alex'

// }
// const user2 = {
//     userName: 'John'

// }
// showName.call(user1);

// let header = document.querySelector(.header__menu)

// по книгам 1
// let комбоA = 6.75;
// let комбоB = 7.5;
// let комбоC = 5.75;
// let комбоD = 8;

// let суммаВсехКомбо = комбоA + комбоB + комбоC + комбоD;
// let количествоКомбо = 4;

// let средняяЦена = суммаВсехКомбо / количествоКомбо;
// alert (средняяЦена);

// по книгам 2
// let возрастБрата = 11;
// let возрастСестры = 13;
// let количествоБратьевИлиСестёр = 2;
// let среднийВозраст = (возрастБрата + возрастСестры) / количествоБратьевИлиСестёр;
// alert(среднийВозраст);


// function путешествиеВоВремени(питомец) {
//     let максГод = 2500; // дальше этого года мы посылать наших зверей
//     // не будем
//     let год = Math.random() * максГод;
//     return 'Ваш ' + питомец + ' отправляется во времени в год ' + Math.floor(год) + '!';
//     }
//     console.log(путешествиеВоВремени('wolf'));
//     alert(путешествиеВоВремени("старый футбольный мяч"));

//по книгам  3
// let имяПисателя = 'Гюго';
// let фамилияПисателя = 'Первый'; // — нужно только для того, чтобы потом
// // создать "полноеИмяПисателя"
// // let отчествоПисателя = 'В.' // просто комментим для количества
// // комментариев (его отчество нам не понадобится).
// let полноеИмяПисателя = имяПисателя + ' ' + фамилияПисателя; // понимаете?
// let названиеКниги = "Буду вторым";
// let возраст = 25; // помните? когда число присоединяется к строке,
// // оно также становится строкой
// let хобби = 'нырять со скал';
// let цитата = 'If at first you don\'t succeed, maybe cliff diving isn\'';
// let bio = полноеИмяПисателя + ' — '
    //  + возраст + 'летний писатель, автор нашумевшего романа'
//     + названиеКниги + '". В свободное время ' + имяПисателя
//     + ' любит ' + хобби + ' и проводить время в кругу родных и близких. '
//     + "Вот любимая цитата " + имяПисателя + ' из "'
//     + названиеКниги + '": "' + цитата + '"';
// alert(bio);

// по книгам 4
// function искреннийКомплимент(имя, черта) {
//     let комплимент = 'Ух ты, ' + имя + '! Твоя ' + черта + ' выглядит просто восхитительно!';
//     return комплимент;
//     }
//     alert (искреннийКомплимент('Джереми', 'причёска'));


//по книгам 5
// function аКакУзнатьЧтоМашина(цвет) {
//     return "Ну, если её двери — " + цвет + ", капот — " + цвет + ", багажник — " + цвет + ", и весь кузов тоже " + цвет + ", то, пожалуй, можно с уверенностью заключить, что эта машина — " + цвет + ".";
//     }
//     alert(аКакУзнатьЧтоМашина('серого цвета'));


//по книгам 6
// function logСлучайноеЧисло() {
//     let случайноеЧислоМежду0и1 = Math.random();
//     let большоеСлучайноеЧисло = случайноеЧислоМежду0и1 * 100;
//     let большоеСлучайноеЦел = Math.floor(большоеСлучайноеЧисло);
//     let выбериЧисло = 'Выбери число от 0 до 100: ';
//     console.log(выбериЧисло + большоеСлучайноеЦел);
//     }
//     logСлучайноеЧисло();
//     logСлучайноеЧисло();
//     logСлучайноеЧисло();








//JSLEARNEN
// В JavaScript есть 8 основных типов.

// number-- для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint-- для целых чисел произвольной длины.
// string-- для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean-- для true/false.
// null-- для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined --для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// object-- для более сложных структур данных.
// symbol-- для уникальных идентификаторов.

// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

////////////////////////////////////////////////////////////////////////////////

                     // prompt

// let age = prompt('Сколько тебе лет?');

// alert(`Тебе ${age} лет!`);

                     // confirm

// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss );

// let nameUser = prompt('what is your name?');
// alert(`your name is ${nameUser}`);

//////////////////////////////////////////////////////////////////////////////////////

                        //    Преобразование типов

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number

/////////////////////////////////////////////////////////////////////////////////////////
                               //математика

// Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».

// Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:
//Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

// Инкремент ++ увеличивает переменную на 1:

// let counter = 2;
// counter++;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

// Декремент -- уменьшает переменную на 1:

// let counter = 2;
// counter--;        // работает как counter = counter - 1, просто запись короче
// alert( counter ); // 1

/*Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке.*/

///////////////////////////////////////////////////////////////////////////////////////////

// let a = +prompt("Первое число?");
// let b = +prompt("Второе число?");

// alert(a + b);

                                          //Условное ветвление if '?'
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//     alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//     alert( 'Это поздновато' );
// } else {
//     alert( 'Верно!' );
// }        


// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );




// let nameff = prompt('название java script?');
// if (nameff == 'ECMAscript'){
//     alert('базару нет правильно');
// } else if (nameff.toLowerCase == 'ECMAscript'){
//     alert('тоже правильно');
// } else{
//     alert('хуйло ты');
// }



// let pressN = prompt('Введи число чувак');
// if (pressN > 0){
//     alert(1);
// } else if(pressN < 0){
//     alert(-1);
// } else {
//     alert(0);
// }

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// } 

//В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).////////////////////////////////////////////////////////

// if (age >= 14 && age <= 90);


// let userLogin = prompt('Введи логин сука');
// if(userLogin =='Админ'){
//     alert('Введите пароль мразь');
// } else if (userLogin == null){
//     alert('отменнен гандоном');
// }else('ну ты хуйло');










// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {
//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }


// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }


/////////////////////////////////////////циклы while ///for  ///break ///
 




// for (let i = 0; i < 3; i++) alert(i)
// // Выполнить начало
// let i = 0;
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // ...конец, потому что теперь i == 3


// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }
////////////////////////////
// let i = 3;
// while(i){
//   alert(i--);
// }

// let i = 0;
// while(i++ < 5)
// alert(i);

// for(let i = 2; i <= 10; ++i){
//   if(i % 2 == 0)
//   alert(i);
// }
// let firstMan;
// do {
// firstMan= prompt('веди число');
// } while(firstMan <= 100 && firstMan);

//////////////////////////////switch//

// let a = 2 + 2;

// switch (a) {
//   case 3:  //if(a == 3)
//     alert( 'Маловато' );
//     break;
//   case 4://if(a == 4)
//     alert( 'В точку!' );
//     break;
//   case 5://if(a  5)
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// if(browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }



// if (dfg == 'salam'){
//   alert('aleikum');
// }else if (dfg == 'privet' || dfg == 'xuilo'){
//   alert('gandon');
// }else{
//   ('nu ty shakal');
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){ 
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//     case 2:
//       case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//         default :
// alert("Введено число вне диапазона!");
// }

///////////////////////////////////function//////////////////////////////////

// let userName = 'Вася';

// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// showMessage();

////////
// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert( userName ); // Петя, значение внешней переменной было изменено функцией
//////////////////////////////

// function showMessage(from, text) { // аргументы: from, text
//   alert(from + ': ' + text);
// }

// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// alert( result ); // 3
//////////////////////////////////////////////

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// checkAge(15)

////////////////////////////////////////////////////

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// min(2, 5) 
// min(3, -1) 
// min(1, 1)
//////////////////////////////////////стрелочные функции////////////////////

// let func = function(arg1, arg2, argN){///////////обычный
//   return expression;
// }

// let func = (arg1, arg2, ...argN) => expression//////////////стрелочный

// /////////////////////////////////////
// let sum = (a, b) => a + b;

// /* Более короткая форма для:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3
//////////////////////////////////////////

// let double = function(n){      //обычная функция 
//   return n*2;
// }
// alert(double(6));

// let double = n => n* 2;  //соокращенная функция
// alert(double(3));

/////////////////////////////////////////////////////

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?//вместо if 
//   () => alert('Привет') :
//   () => alert("Здравствуйте!");

// welcome(); // теперь всё в порядке

//////////////////////////////////////////////////////////////////
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function()
//    { alert("Вы согласились."); },

//   function() 
//   { alert("Вы отменили выполнение."); }
// );
/////////////////////////////////////////////////

////////////////////////massiv////////////
// let arr = [2, 5, 3, 9];
// let resut = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// alert (resut);
////////////////////////////////////////////////////////////////////////
/*const lotteryParticipants = [
  'Alex',
  'Almaz',
  'Ruslan',
  'Bekzod',
  'Mairambek',
  'Bektur',
  'Kanykey',
  'Altyn',
  'Nurai',
  'Aidai'
]

const lottery = (array) => {
  const getRandomInt = function (max = 9) {
return Math.floor(Math.random() * max);
  } 
  const iter = getRandomInt(lotteryParticipants.length);
  return [lotteryParticipants[iter]]
}

alert(lottery(lotteryParticipants));*/
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////обьекты////////////////////////////

// const nauryz = {
//   lastName: 'saktagan',
//   age: 30,
// };
// nauryz.lastName = 'Batyrbek';

// alert(nauryz.lastName);
// alert(nauryz.age);

////////////////////////////////////////
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John
///////////////////////////////////////////////

////для проверки

// let user = { 
//   name: "John",
//   age: 30 };

// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует

/////////////////////////////////////////

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: 'XUILO',
// };

// for(let key in user){
//   alert ( key );
//   alert (user[key]);
// }
///////////////////////////////////////////////
///////////////////////////////целочисленные//////////////

// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }
//////////////////////////////////////////////

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// alert(user);
// /////////////////////////////////////////////////

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// /////////////////////////////////////////

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390
// ////////////////////////////////////////////////////////
const firstName = function (){
  return firstName;
}
firstName()