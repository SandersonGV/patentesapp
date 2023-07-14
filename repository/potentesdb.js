const dinamicas = [
    { nome: "RPG", jogos: ["perdido na ilha", "salvando a quebrada", "problema na empresa"] },
    { nome: "Card", jogos: ["perdido na ilha", "salvando a quebrada", "problema na empresa"] }
]


const grupos = [
    {
        id: 0,
        data: "10/07/2023",
        dinamica: "RPG",
        jogo: "perdido na ilha",
        cliente: "Google",
        monitor: "Jairo",
    },
    {
        id: 1,
        data: "09/07/2023",
        dinamica: "RPG",
        jogo: "salvando a quebrada",
        cliente: "C&A",
        monitor: "Julius",
    },
]

const participantes = [
    {
        id: 0, grupoId: 0, nome: "teste", email: "teste@teste.com"
    },
    {
        id: 1, grupoId: 0, nome: "teste2", email: "teste@teste2.com"
    },
    {
        id: 3, grupoId: 1, nome: "teste1", email: "teste@teste3.com"
    },
    {
        id: 4, grupoId: 1, nome: "teste3", email: "teste@teste32.com"
    },
]

const respostas = [
    { participanteid: 1, respostas: ["A", "B", "C", "D", "A"] },
]

module.exports = {grupos, participantes, respostas, dinamicas}