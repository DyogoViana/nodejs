const questoes = [
	"O que aprendi hoje?",
	"O que me deixoou aborrecido? E o que poderia fazer para melhorar?",
	"O que me deixou feliz hoje?",
	"Quantas pessoas ajudei hoje?",
]

const perguntar = (index = 0) => {
	process.stdout.write("\n\n" + questoes[index] + " > " );
}

perguntar();

const respostas =[];

process.stdin.on("data", data => {
	respostas.push(data.toString().trim())
	if (respostas.length < questoes.length) {
		perguntar(respostas.length);
	} else {
		console.log(respostas);
		process.exit();
	}
})
