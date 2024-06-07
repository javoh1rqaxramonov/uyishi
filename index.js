// 1-masala
// let n=50;
// for(let i=1; i<=50;i++){
//     console.log(i);
// }

// 2-masala
// let n=50;
// for(let i = n; i >= 1; i--){
//     console.log(i);
// }

// 3-masala
// let n=10;
// let sum=0;
// for(let i=1; i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// 4-masala
// let n=10;
// let sum=0;
// for(let i = 2;  i <= n; i=i+2){
//     console.log(i);
//     sum=sum+i;
// }
// console.log(sum);
// 5-masala
// let n=10;
// let sum=0;
// for(let i = 1;  i <= n; i=i+2){
//     console.log(i);
//     sum=sum+i;
// }
// console.log(sum);

// 6-masala
// let n=30;
// let sum=0;
// for(let i=1; i<=n; i++){
//     if (n%i==0) {
//         console.log(i);
//     }
// }

// 7-masala
// let n =15;
// let counter=0;
// let sum=0;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         sum=sum+i;
//         counter=counter+1
//         console.log(i);
//     }
    
// }
// console.log(sum);
// console.log(counter);

// 8-masala
// let n=10;
// let counter=0;
// for(let i=1;i<=n; i++ ){
//     if (n%i==0) {
//         counter=counter+1;
//     }
// }
// if (counter>2) {
//     console.log("murrakab");
// } 

// 9-masala

// const k =+('k sonini kiriting');
// const n =+('n sonini kiriting');
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// 10-masala

// const a =+prompt('a sonini kiriting');
// const b =+prompt('b sonini kriting');
// let sonlar = [];
// let sonlarSoni = 0;
// for (let i = a; i <= b; i++) {
//   sonlar.push(i);
//   sonlarSoni++;
// }
// console.log(`${a} va ${b}${sonlar.join(', ')}`);
// console.log(`${sonlarSoni}`);

// 11-masala

// const a =+prompt('a sonini kiriting');
// const b =+prompt('b sonini kiriting');
// let sonlar = [];
// let sonlarSoni = 0;
// for (let i = b - 1; i > a; i--) {
//   sonlar.push(i);
//   sonlarSoni++;
// }
// console.log(`${a} va ${b} ${sonlar.join(', ')}`);
// console.log(`${sonlarSoni}`);

// 12-masala

// const konfetNarxi = 15.5;
// for (let kg = 1.2; kg <= 10; kg += 0.2) {
//   const narxi = konfetNarxi * kg;
//   console.log(`${kg} ${narxi.toFixed(2)} so'm`);
// }

// 13-masala

// const konfetNarxi = 15.5;
// for (let i = 2; i <= 9; i++) {
//   const narxi = konfetNarxi * i;
//   console.log(`0${i} ${narxi.toFixed(2)} so'm`);
// }
// console.log(` ${konfetNarxi.toFixed(2)} so'm`);

// 14-masala

// var kg = parseFloat(
//   prompt("Sotilayotgan konfetning og'irligini kiriting (kg):")
// );
// var kg_price = parseFloat(prompt("Bir kilogram konfet narxini kiriting:"));
// var prices = [];
// for (var i = 1.2; i <= 2; i += 0.2) {
//   prices.push(i * kg * kg_price);
// }
// for (var j = 0; j < prices.length; j++) {
//   console.log(
//     j + 1 + " kg konfetning narxi: " + prices[j].toFixed(2) + " so'm"
//   );
// }

// 15-masala

// let a =+prompt('a sonini kiriting');
// let b =+prompt('b sonini kiriting');
// let sum = 0;
// for (let i = a; i <= b; i++) {
//     sum += i;
// }
// console.log(sum);

// 16-masala

// function kopaytmaToplash(a, b) {
//   let kopaytma = 1;
//   for (let i = a; i <= b; i++) {
//     kopaytma *= i;
//   }
//   return kopaytma;
// }
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// a = parseInt(a);
// b = parseInt(b);
// if (isNaN(a) || isNaN(b) || a >= b) {
//   console.log("Noto'g'ri kiritish!");
// } else {
//   let natija = kopaytmaToplash(a, b);
//   console.log("Ko'paytma:", natija);
// }

// 17-masala
// function kvadratYigindisi(a, b) {
//   let yigindi = 0;
//   for (let i = a; i <= b; i++) {
//       yigindi += i * i;
//   }
//   return yigindi;
// }
// let a = 3;
// let b = 7;
// let natija = kvadratYigindisi(a, b);
// console.log("Yig'indisi:", natija);

// 18-masala

// function yigindiHIsobla(n) {
//   let yigindi = 0;
//   for (let i = 1; i <= n; i++) {
//       yigindi += 1 / i;
//   }
//   return yigindi;
// }
// let n = 5;
// let natija = yigindiHIsobla(n);
// console.log("Yig'indisi:", natija);

// 19-masala

// function calculateS(n) {
//   let S = 0;
//   for (let i = n; i <= 2 * n; i++) {
//       S += i * i;
//   }
//   return S;
// }
// let n = 5;
// let result = calculateS(n);
// console.log("S =", result);

// 20-masala

// function calculateS(n) {
//   let S = 1;
//   for (let i = 1.1; i <= 1.1 + (n - 1) * 0.1; i += 0.1) {
//       S *= i;
//   }
//   return S;
// }
// let n = 5;
// let result = calculateS(n);
// console.log("S =", result);