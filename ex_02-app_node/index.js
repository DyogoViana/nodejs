const perguntas = [
	"O que aprendi hoje?",
	"O que me deixoou aborrecido? E o que poderia fazer para melhorar?",
	"O que me deixou feliz hoje?",
	"Quantas pessoas ajudei hoje?",
]

const resposta = (index = 0) => {
	process.stdout.write(perguntas[index] + "\n\n\n" );
}

resposta();

process.stdin.on("data", data => {
	process.stdout.write(data.toString().trim() + "\n") // pega os dados, converte em string e retira os espaços.
	process.exit()
})
