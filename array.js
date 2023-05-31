// Primitive değişkenler tek bir değer tutarken Arrayler birden fazla değer tutabilir.

//? Tutulan her bir değerin bir index numarası vardır. => 0 dan başlar

/*1. yöntem */
const empty = [];
const names = ["su", "deniz", "irmak", "nehir"];
console.log(names);
/* 2.yöntem*/
const numbers = new Array(10, 58, 8, 7, 9);
const numbers2 = new Array(10);
console.log(numbers);
console.log(numbers2);

/*3. yöntem (array.of)*/
const numbers1 = Array.of(5, 4);
console.log(numbers1);

/*arraylerden veri okuma*/

//Index numarasiyla ulasilir .0 dan baslar

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

for (let i = 0; i <= names.length - 1; i++) {
  console.log(names[i]);
}

for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

for (let i = 0; i <= names.length - 1; i++) {
  console.log(names[i].toUpperCase());
}
console.clear();
//! dizi const ile tanımlansada içindeki veriler değiştirelbilir.
//! diziler primitive dğil non-primitive değişkenlerdir. Bu nedenle bir dizi ismine birde referans numarlarına sahiptir.Bu referanslar ile o değerlere ulaşılır.
//! bigisayarda dizinin adı  dizi bir stack alanında tutarken içindeki veriler heap denilen bir alanda tutulur.
//! Bu nedenle const sadece stack alanında tutulan ismin değişmesini engeller
const cities = ["Berlin", "Ankara", "istanbul", "london"];
cities[4] = "izmir";
console.log(cities);
//? arrayler farkli veri türlerini barindirirlar

const ages = [30, 45, 48];
const people = ["Henry", "dewy", 3, 56.67, new Date().getFullYear, true, ages];
console.log(people);

console.log(people[6]);
console.log(people[6][0]);

//

console.log(++people[6][0]);
console.log(ages);
console.log(people);
people[6][0] = 60;
console.log(ages);

//Array degistiren metodlar*/

/* -------------------------------------------------------------------------- */
/*                       Pop() dizide son elemani siler                       */
/* -------------------------------------------------------------------------- */

console.log(names);
names.pop();
console.log(names);
/* -------------------------------------------------------------------------- */
/*                   Push() dizinin sonuna yeni eleman ekler                  */
/* -------------------------------------------------------------------------- */
//dizinin eleman sayisini o noktaya sabitler

const cars = ["BMW", "mersedes", "toyota", "Fiat"];
console.log(cars);
cars.push("togg");
console.log(cars);

cars.push("tofas");
console.log(cars);
cars.push("opel");
console.log(cars);

const KullaniciAdi = [];
KullaniciAdi.push("kasim");
console.log(KullaniciAdi);

// const KullaniciAdi1 = [];
// for (i = 0; i <= 5; i++) {
//   let isim = prompt("kullanici adi girin");
//   KullaniciAdi1.push(isim);
// }
// console.log(KullaniciAdi1);

//! shift ve unschift metodlariyla silme ve cikartma yapilir

//! shift dizinin basina elleman silinir
cars.shift();
console.log(cars);

//! Unshift dizinin basina elleman eklenir
cars.unshift("Renualt");
console.log(cars);

/* -------------------------------------------------------------------------- */
/*                                    splice                                   */
/* -------------------------------------------------------------------------- */
//? splice 3 paremetri alir
//? 1. paremetrede: ekleme yapilacak adres belirtilir
//? 2. paremetre: 0 yada 1 degeri AudioListener.0 ise araya ekleme yapar  o indexteki dederi silmez. eger 1 ise o indexteki degeri silip üzerine yazar

cars.splice(2, 0, "volkswagen");
console.log(cars);

cars.splice(2, 1, "volvo");
console.log(cars);

/* -------------------------------------------------------------------------- */
/*                                  Reverse()                                 */
/* -------------------------------------------------------------------------- */
// bir arrayin elemanlarini dizi icindeki elemanlarini tersten yazdir.
cars.reverse();
console.log(cars);

numbers.reverse();
console.log(numbers);
/* -------------------------------------------------------------------------- */
/*                          sort(): alfabetik siralar,siralar                         */
/* -------------------------------------------------------------------------- */
//sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonu dizinin her bir eleamanına uygular. Bu sayede küçük sayılar ile büyük sayılar yer değiştirerek sıralama işlemi gerçekeşir.

const numberList = [23, 45, 12, 1, 46, 78, 21];
numberList.sort();
console.log(numberList);
let numbers3 = [2, 3, 22, 1, 5, 7, 6];
console.log(numbers3);

numbers3.sort((a, b) => a - b);
console.log(numbers3);
//ortanca degeri bulmak icin
let leng = numbers3.length / 2;
console.log(leng);
let med = numbers3[Math.trunc(numbers3.length / 2)];
console.log(med);

// cift sayilarda ortanca bulma

let list = [2, 3, 22, 1, 5, 7, 6, 12];
list.sort((a, b) => a - b);
console.log(list);
let x = list.length / 2;
console.log(x);
let sonuc = list[x - 1] + list[x];
console.log(sonuc / 2);

// bir araydaki acikligi bulunuz
let max = list[list.length - 1];
console.log(max);
let min = list[0];
console.log(min);
let aciklik = max - min;
console.log(aciklik);

// vrilen listenin ortalamasini bulan program
let liste2 = [2, 3, 22, 1, 5, 7, 6, 12];
liste2.sort((a, b) => a - b);
toplam = 0;
for (let i = 0; i < liste2.length; i++) {
  toplam += liste2[i];
}
console.log(toplam / liste2.length);

/* -------------------------------------------------------------------------- */
/*                    Diziye Erişim Metodları                                  */
/* -------------------------------------------------------------------------- */

// .concat
// .includes
// .join
// .slice
// .toString
// .indexOf
// .lastIndexOf

/* -------------------------------------------------------------------------- */
/*                                   concat                                   */
/* -------------------------------------------------------------------------- */
let ozNumbers = [1, 2, "3", "dört"];
let hasNumbers = [5, 6, 7];
console.log(ozNumbers.concat(hasNumbers));

let newArr = ozNumbers.concat(hasNumbers);
console.log(newArr);

/* -------------------------------------------------------------------------- */
/*                                  includes()  :iceriyor mu                                */
/* -------------------------------------------------------------------------- */
console.log(ozNumbers.includes("dört"));
console.log(ozNumbers.includes("rt"));
console.log(ozNumbers[3].includes("rt"));
ozNumbers.includes(
  2
    ? console.log("bu dizi icinde 2 degeri var")
    : console.log("2 degerini icermez")
);
/* -------------------------------------------------------------------------- */
/*                             indexOf,LastIndexOf                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*          join() dizi elelmanlarını birleştirip stringe dönüştürür          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  toString                                  */
/* -------------------------------------------------------------------------- */
// dizi elemanları arasına virgül koyarak birleştirip string haline dönüştürür
