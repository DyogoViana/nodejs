const questoes = [
	"O que aprendi hoje?",
	"O que me deixoou aborrecido? E o que poderia fazer para melhorar?",
	"O que me deixou feliz hoje?",
	"Quantas pessoas ajudei hoje?",
]

const perguntar = (index = 0) => {
	process.stdout.write("\n\n" + questoes[index] + " > ");
}

perguntar();

const respostas = [];

process.stdin.on("data", data => {
	respostas.push(data.toString().trim())
	if (respostas.length < questoes.length) {
		perguntar(respostas.length);
	} else {
		console.log(respostas);
		process.exit();
	}
});

process.on("exit", () => {
	console.log(`
		Massa!!!

		- O que vc aprendeu hoje foi:
		${respostas[0]}


		- O que te aborreceu e o que vc poderia melhorar foi:
		${respostas[1]}


		- Oq ue te deixou feliz hoje:
		${respostas[2]}


		- Você ajudou ${respostas[3]} pessoas hoje!



		Volte amanhã para novas reflexões
	`);
})
