// setTimeout; Roda uma função depois de X milissegundos

let timeOut = 2000;
let finished = () => console.log("Cheguei!");

setTimeout(finished, timeOut); // Callback depois de 3".
console.log("Esperando por 2...");
