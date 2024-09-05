const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você define a depressão e ansiedade?",
        alternativas: [
            {
                texto: "A depressão é uma doença psiquiátrica que afeta o emocional da pessoa, que passa a apresentar tristeza profunda, falta de apetite, desânimo, pessimismo, baixa auto-estima, que aparecem com frequência e podem combinar-se entre si.",
                afirmacao: "Manter a saúde mental implica em desenvolver estratégias para enfrentar o estresse, superar adversidades e manter o equilíbrio emocional. Isso é essencial para o bem-estar geral. "
            },
            {
                texto: " A ansiedade é caracterizada por preocupação intensa, excessiva e persistente e medo de situações cotidianas. Podem ocorrer frequência cardíaca elevada, respiração rápida, sudorese e sensação de cansaço.",
                afirmacao: "A saúde mental e emocional também está relacionada à qualidade das relações interpessoais e à forma como se lida com as emoções. Entender e expressar sentimentos de maneira saudável é crucial para o bem-estar."
            }
        ]
    },
    {
        enunciado: "Quais são os principais fatores que impactam negativamente para a depressão e a ansiedade?",
        alternativas: [
            {
                texto: "Para a depressão impactam o histórico familiar, transtornos psiquiátricos correlatos, estresse crônico, ansiedade crônica, disfunções hormonais, excesso de peso, sedentarismo e dieta desregradaa, vícios (cigarro, álcool e drogas ilícitas)",
                afirmacao: "O estresse crônico, causado por problemas no trabalho, nas relações ou na vida pessoal, pode levar a problemas de saúde mental, como ansiedade e depressão. Sem suporte social, esses desafios se tornam ainda mais difíceis de enfrentar."
            },
            {
                texto: "Para a ansiedade impactam o ambiente (evento estressante no trabalho, rotina agitada) Personalidade ou modelo de pensamento (como a pessoa encara os desafios do dia a dia) Histórico de trauma (evento de alto impacto emocional como abusos) Doenças físicas (hormonais, cardiopatias, diabetes, dores crônicas, depressão e abuso de drogas)",
                afirmacao: "A pressão para atender expectativas, seja no trabalho ou na vida pessoal, pode gerar sentimentos de insuficiência, aumentando o risco de esgotamento emocional."
            }
        ]
    },
    {
        enunciado: "Quais estratégias você utiliza para manter-se livre da depressão e ansiedade?",
        alternativas: [
            {
                texto: "Hábitos comuns na prevenção da depressão são consumo moderado de álcool, dieta saudável, atividade física regular, sono adequado, nunca fumar, comportamento sedentário baixo a moderado, conexões sociais frequentes.",
                afirmacao: "Atividades como meditação e exercício físico liberam hormônios que promovem bem-estar e reduzem o estresse, ajudando a manter a mente equilibrada."
            },
            {
                texto: "Para tratar a ansiedade, é preciso adotar uma rotina de exercícios físicos, buscar medidas de relaxamento, como a meditação, realizar exercícios de respiração, inserir atividades prazerosas na rotina, reduzir o consumo de substâncias estimulantes, como cafeína, organizar-se e planejar o dia com antecedência, não se cobrar tanto.",
                afirmacao: "O apoio emocional de amigos e familiares pode fornecer uma rede de suporte, aliviando a carga emocional e permitindo um espaço seguro para expressar sentimentos."
            }
        ]
    },
    {
        enunciado: "Como a depressão e a ansiedade pode impactar o desempenho pessoal?",
        alternativas: [
            {
                texto: "A depressão pode levar a mais estresse e disfunção e piorar a situação de vida da pessoa afetada e o transtorno em si.",
                afirmacao: "Quando a mente está saudável, é mais fácil se concentrar, resolver problemas e ter uma atitude positiva no trabalho ou nos estudos, o que pode aumentar a eficiência e a criatividade."
            },
            {
                texto: "A ansiedade persistente causa uma avalanche emocional, sensação de angústia e pode levar-nos a nos tornarmos indispostos e, na pior das hipóteses, resulta em transtornos de ansiedade como ataques de pânico, fobias e comportamentos obsessivos.",
                afirmacao: "Por outro lado, problemas de saúde mental, como ansiedade ou depressão, podem afetar a capacidade de focar e se engajar nas tarefas, resultando em um desempenho abaixo do esperado."
            }
        ]
    },
    {
        enunciado: "Quais medidas a sociedade pode tomar para promover o tratamento da depressão e ansiedade?",
        alternativas: [
            {
                texto: "O acolhimento das pessoas com sofrimento ou transtorno mental, incluindo depressão e as necessidades decorrentes do uso de álcool e outras drogas, e seus familiares é uma estratégia de atenção fundamental para a identificação das necessidades assistenciais, alívio do sofrimento e planejamento de intervenções.",
                afirmacao: "A conscientização sobre a importância da saúde mental e a redução do estigma associado a transtornos mentais pode encorajar mais pessoas a buscar ajuda e falar abertamente sobre suas dificuldades."
            },
            {
                texto: "Além de mostrar que você está disponível, tente distrair a pessoa com coisas que você sabe que ela gosta: um passeio agradável, uma música, um chá reconfortante ou apenas sente-se ao seu lado em silêncio e segure a sua mão. Atitudes como essas já podem ajudar muito.",
                afirmacao: "A disponibilidade de serviços de saúde mental acessíveis e de qualidade é crucial para garantir que todos tenham a oportunidade de cuidar de sua saúde emocional e mental."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como está sua saúde emocional hoje..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "A saúde mental e emocional é fundamental para o bem-estar geral, impactando todas as áreas da vida, desde o trabalho e os estudos até as relações interpessoais. Entender o que influencia a saúde mental e as formas de mantê-la em equilíbrio é essencial para promover uma vida mais plena e saudável. A sociedade também desempenha um papel importante ao criar um ambiente de apoio e compreensão, incentivando o cuidado com a saúde mental e emocional como uma prioridade. Ao refletir sobre essas questões, é possível reconhecer a importância de cuidar da mente tanto quanto do corpo, buscando equilíbrio e bem-estar em todas as esferas da vida.";
}

mostraPergunta();
