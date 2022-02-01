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


//по книгам 2 3
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
//     + возраст + '‑летний писатель, автор нашумевшего романа "'
//     + названиеКниги + '". В свободное время ' + имяПисателя
//     + ' любит ' + хобби + ' и проводить время в кругу родных и близких. '
//     + "Вот любимая цитата " + имяПисателя + ' из "'
//     + названиеКниги + '": "' + цитата + '"';
// alert(bio);