let {EventEmitter} = require('events');
let acao = new EventEmitter();

acao.on("DigaAlgo", (mensagem) => {
	console.log("Eu ouvi você: ", mensagem);
});

acao.emit('DigaAlgo', "Duda");
