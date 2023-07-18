const dinamicas = [
    { id:0, nome: "RPG", jogos: ["perdido na ilha", "salvando a quebrada", "problema na empresa"] },
    { id:1, nome: "Card", jogos: ["perdido na ilha", "salvando a quebrada", "problema na empresa"] }
]

const jogos =[
    {id:0, dinamicaId:0, nome:"perdido na ilha"},
    {id:1, dinamicaId:0, nome:"salvando a quebrada"},
    {id:2, dinamicaId:0, nome:"problema na empresa"},
]
const desafios =[
    {id:0, jogoId:0, titulo:"desafios 1", descicao:"descricao"},
    {id:1, jogoId:0, titulo:"desafios 2", descicao:"descricao"},
    {id:2, jogoId:0, titulo:"desafios 3", descicao:"descricao"},
    {id:3, jogoId:0, titulo:"desafios 4", descicao:"descricao"},
    {id:4, jogoId:0, titulo:"desafios 5", descicao:"descricao"},
    {id:5, jogoId:0, titulo:"desafios 6", descicao:"descricao"},
    {id:6, jogoId:0, titulo:"desafios 7", descicao:"descricao"},
    {id:7, jogoId:0, titulo:"desafios 8", descicao:"descricao"},
    {id:8, jogoId:0, titulo:"desafios 9", descicao:"descricao"},
    {id:9, jogoId:0, titulo:"desafios 10", descicao:"descricao"},
]
const opcoes =[
    {id:0, desafioId:0, valor:"A", texto:"opção A"},
    {id:1, desafioId:0, valor:"B", texto:"opção A"},
    {id:2, desafioId:0, valor:"C", texto:"opção A"},
    {id:3, desafioId:0, valor:"D", texto:"opção A"},
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

const analiseDisc = [
    {
        id: "A",
        sigla: "D",
        titulo: "dominancia",
        texto: [
            [
                "Demonstração mínima de traços de dominância. Tendência a ser mais colaborativo e flexível.",
                "Habilidades de trabalho em equipe, adaptabilidade.",
                "Dificuldade em assumir papéis de liderança, falta de assertividade.",
                "Colaboração em equipe, apoio a líderes, trabalho em ambientes colaborativos.",
                "Funções de liderança direta, ambientes altamente competitivos.",
                "Trabalho em equipe, apoio a decisões, contribuições baseadas em consenso.",
                "Papéis de liderança autoritária, tomada de decisões rápidas sem consulta."
            ],
            [
                "Demonstração moderada de traços de dominância. Abordagem equilibrada entre colaboração e assertividade.",
                "Habilidades de liderança, tomada de decisões assertivas.",
                "Tendência a ser dominador em algumas situações, falta de flexibilidade extrema.",
                "Liderança de equipes, gestão de projetos, empreendedorismo.",
                "Funções que exigem diplomacia extrema, trabalho em equipe excessivo.",
                "Lidar com desafios, tomar decisões, liderar equipes de forma equilibrada.",
                "Papéis puramente administrativos, funções que exigem flexibilidade extrema."
            ],
            [
                "Demonstração significativa de traços de dominância. Orientação assertiva e focada em resultados.",
                "Liderança forte, habilidades de resolução de problemas.",
                "Possível autoritarismo, impaciência em algumas situações.",
                "Liderança, empreendedorismo, gestão de projetos.",
                "Funções que exigem diplomacia extrema, trabalho em equipe excessivo.",
                "Lidar com desafios, tomar decisões, liderar equipes.",
                "Papéis puramente administrativos, funções que exigem flexibilidade extrema."
            ],
            [
                "Demonstração intensa de traços de dominância. Abordagem assertiva e orientada a resultados.",
                "Liderança poderosa, tomada de decisões rápidas.",
                "Possível autoritarismo excessivo, impaciência em algumas situações.",
                "Liderança estratégica, empreendedorismo de alto impacto, gestão de projetos complexos.",
                "Funções que exigem diplomacia extrema, trabalho em equipe excessivo.",
                "Lidar com desafios, tomar decisões ousadas, liderar equipes de alto desempenho.",
                "Papéis puramente administrativos, funções que exigem flexibilidade extrema."
            ]
        ]
    },
    {
        id: "D",
        sigla: "I",
        titulo: "Influencia",
        texto: [
            [
                "Demonstração mínima de traços de influência. Tendência a ser mais reservado e focado em tarefas.",
                "Foco em tarefas detalhadas, atenção aos procedimentos.",
                "Possível dificuldade em trabalhar com pessoas, tendência a ser introvertido.",
                "Análise de dados, pesquisa, funções técnicas.",
                "Funções que exigem interação social intensa, vendas ou marketing.",
                "Análise de dados, garantir a precisão dos processos, manter a qualidade.",
                "Funções que exigem alto grau de interação social, trabalho em equipe extenso."
            ],
            [
                "Demonstração moderada de traços de influência. Abordagem equilibrada entre tarefas e interação social.",
                "Habilidades de comunicação, colaboração.",
                "Possível tendência a ser distraído, dificuldade em manter o foco em tarefas detalhadas.",
                "Comunicação, trabalho em equipe, atendimento ao cliente.",
                "Funções que exigem trabalho solitário, análise de dados sem interação social.",
                "Interagir com pessoas, colaborar em projetos, contribuir para um ambiente positivo.",
                "Trabalho isolado e repetitivo, funções altamente técnicas sem interação social."
            ],
            [
                "Demonstração significativa de traços de influência. Sociabilidade e persuasão são características marcantes.",
                "Habilidades de comunicação, carisma, influência.",
                "Possível tendência a ser impulsivo, busca de atenção excessiva.",
                "Vendas, marketing, relações públicas.",
                "Funções que exigem trabalho solitário, análise de dados sem interação social.",
                "Interagir com pessoas, persuadir, liderar equipes.",
                "Funções altamente técnicas, trabalho isolado e repetitivo."
            ],
            [
                "Demonstração intensa de traços de influência. Sociabilidade e carisma são marcas fortes de sua personalidade.",
                "Habilidades de comunicação, liderança carismática.",
                "Possível tendência a ser distraído, dificuldade em focar em tarefas detalhadas.",
                "Liderança, comunicação estratégica, gestão de equipes.",
                "Funções que exigem trabalho solitário, análise de dados sem interação social.",
                "Liderar equipes, influenciar, envolver-se em projetos criativos.",
                "Trabalho isolado e repetitivo, funções altamente técnicas sem interação social."
            ],
        ]
    },
    {
        id: "B",
        sigla: "S",
        titulo: "Estabilidade",
        texto: [
            [
                "Demonstração mínima de traços de estabilidade. Tendência a buscar variedade e flexibilidade.",
                "Adaptabilidade, busca por novas experiências.",
                "Possível dificuldade em lidar com ambientes estáveis, tendência a evitar rotinas.",
                "Projetos dinâmicos, inovação, áreas de mudanças constantes.",
                "Funções altamente estruturadas, ambientes com rotinas fixas.",
                "Adaptar-se a mudanças, trazer novas ideias, lidar com situações não estruturadas.",
                "Funções com rotinas rígidas, trabalho em ambientes altamente estáveis."
            ],
            [
                "Demonstração moderada de traços de estabilidade. Equilíbrio entre busca por estabilidade e abertura para mudanças.",
                "Capacidade de construir relacionamentos fortes, paciência.",
                "Resistência a mudanças, dificuldade em assumir riscos.",
                "Trabalho em equipe, atendimento ao cliente, mediação de conflitos.",
                "Funções com alta pressão, ambientes altamente competitivos.",
                "Trabalhar em equipe, cuidar de relacionamentos, fornecer apoio emocional.",
                "Funções que exigem tomada de decisões rápidas e assertivas, papéis de liderança em ambientes turbulentos."
            ],
            [
                "Demonstração significativa de traços de estabilidade. Valorização da estabilidade e harmonia nos relacionamentos.",
                "Habilidades de comunicação, colaboração, busca por ambientes estáveis.",
                "Resistência a mudanças, aversão a conflitos.",
                "Trabalho em equipe, atendimento ao cliente, mediação de conflitos.",
                "Funções com alta pressão, ambientes altamente competitivos.",
                "Trabalhar em equipe, cuidar de relacionamentos, fornecer apoio emocional.",
                "Funções que exigem tomada de decisões rápidas e assertivas, papéis de liderança em ambientes turbulentos."
            ],
            [
                "Demonstração intensa de traços de estabilidade. Busca por estabilidade e harmonia é uma prioridade.",
                "Habilidades de comunicação, construção de relacionamentos fortes.",
                "Resistência a mudanças, dificuldade em assumir riscos.",
                "Trabalho em equipe, atendimento ao cliente, mediação de conflitos.",
                "Funções com alta pressão, ambientes altamente competitivos.",
                "Trabalhar em equipe, cuidar de relacionamentos, fornecer apoio emocional.",
                "Funções que exigem tomada de decisões rápidas e assertivas, papéis de liderança em ambientes turbulentos."
            ],
        ]
    },
    {
        id: "C",
        sigla: "C",
        titulo: "Cautela",
        texto: [
            [
                "Demonstração mínima de traços de conformidade. Tendência a valorizar mais a flexibilidade e adaptabilidade.",
                "Criatividade, adaptabilidade, abertura para novas ideias.",
                "Possível falta de organização, tendência a procrastinar em busca da perfeição.",
                "Criatividade, inovação, áreas que valorizam a flexibilidade.",
                "Funções altamente estruturadas, ambientes com regras e procedimentos rígidos.",
                "Pensar fora da caixa, propor soluções criativas, lidar com situações não estruturadas.",
                "Funções que exigem conformidade estrita, seguimento rigoroso de regras e procedimentos."
            ],
            [
                "Demonstração moderada de traços de conformidade. Equilíbrio entre flexibilidade e aderência a regras.",
                "Habilidades analíticas, organização, busca por precisão.",
                "Possível tendência a ser perfeccionista, dificuldade em lidar com mudanças abruptas.",
                "Análise de dados, planejamento, áreas que valorizam a organização.",
                "Funções altamente não estruturadas, ambientes com mudanças constantes e imprevisíveis.",
                "Analisar dados, garantir a precisão dos processos, manter a qualidade.",
                "Funções que exigem flexibilidade extrema, falta de aderência a regras e procedimentos."
            ],
            [
                "Demonstração significativa de traços de conformidade. Valorização da organização e conformidade com regras.",
                "Habilidades analíticas, atenção aos detalhes, busca por precisão.",
                "Possível tendência a ser inflexível, dificuldade em lidar com mudanças inesperadas.",
                "Planejamento, controle de qualidade, áreas com estrutura e processos bem definidos.",
                "Funções altamente não estruturadas, ambientes com mudanças constantes e imprevisíveis.",
                "Análise de dados, garantir a precisão dos processos, seguir regras e procedimentos.",
                "Funções que exigem flexibilidade extrema, falta de aderência a regras e procedimentos."
            ],
            [
                "Demonstração intensa de traços de conformidade. Adesão rigorosa a regras e procedimentos.",
                "Habilidades analíticas, atenção aos detalhes, busca por precisão.",
                "Possível tendência a ser inflexível, dificuldade em lidar com mudanças inesperadas.",
                "Auditoria, controle de qualidade, áreas com alto grau de conformidade.",
                "Funções altamente não estruturadas, ambientes com mudanças constantes e imprevisíveis.",
                "Análise minuciosa, garantir a conformidade, seguir regras e procedimentos.",
                "Funções que exigem flexibilidade extrema, falta de aderência a regras e procedimentos."
            ]
        ]
    }
]

module.exports = { grupos, participantes, respostas, dinamicas, analiseDisc,jogos,desafios,opcoes }