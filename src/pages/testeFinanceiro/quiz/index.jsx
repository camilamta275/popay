
import React, { useState } from 'react';
import 'src/pages/testeFinanceiro/style.css';
import { Container, Card, Button, Typography, LinearProgress, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const questions = [
  {
    question: "Quando seu salário cai na conta, sua prioridade é:",
    answers: [
      { text: "Comprar algo que estava querendo faz tempo.", type: "Q" },
      { text: "Quitar boletos e guardar o resto na conta corrente.", type: "W" },
      { text: "Guardar uma parte imediatamente.", type: "E" },
      { text: "Separar o que será investido e o que será usado.", type: "R" },
    ],
  },
  {
    question: "Você vê uma viagem dos sonhos em promoção. Sua reação:",
    answers: [
      { text: "Parcelo logo antes que acabe!", type: "Q" },
      { text: "Vejo se cabe no orçamento do ano que vem.", type: "W" },
      { text: "Nem penso nisso, viagens são supérfluas.", type: "E" },
      { text: "Analiso se a experiência vale o custo e decido com base nas finanças.", type: "R" },
    ],
  },
  {
    question: "Ao olhar seu extrato bancário:",
    answers: [
      { text: "Levo um susto, nunca sei quanto tenho.", type: "Q" },
      { text: "Olho uma vez por mês, só pra ver se está tudo ok.", type: "W" },
      { text: "Acompanho semanalmente.", type: "E" },
      { text: "Monitoro quase diariamente com planilha ou app.", type: "R" },
    ],
  },
  {
    question: "O que você pensa sobre dívidas?",
    answers: [
      { text: "Um mal necessário, dá pra viver com elas.", type: "Q" },
      { text: "São perigosas, melhor não ter nenhuma.", type: "W" },
      { text: "Algo a se evitar a todo custo.", type: "E" },
      { text: "Ferramentas que podem ser usadas estrategicamente.", type: "R" },
    ],
  },
  {
    question: "Quando sobra dinheiro no fim do mês:",
    answers: [
      { text: "Compro algo para mim.", type: "Q" },
      { text: "Deixo na conta, caso precise.", type: "W" },
      { text: "Coloco imediatamente na poupança ou CDB.", type: "E" },
      { text: "Direciono para meus investimentos.", type: "R" },
    ],
  },
  {
    question: "Investimento pra você é:",
    answers: [
      { text: "Algo chato e complicado.", type: "Q" },
      { text: "Algo arriscado, só confio na poupança.", type: "W" },
      { text: "Um mal necessário, mas faço só o básico.", type: "E" },
      { text: "Uma ferramenta poderosa para o futuro.", type: "R" },
    ],
  },
  {
    question: "Quando você quer comprar algo caro:",
    answers: [
      { text: "Compra parcelado no impulso.", type: "Q" },
      { text: "Pensa bastante e evita se possível.", type: "W" },
      { text: "Junta o dinheiro antes e só compra à vista.", type: "E" },
      { text: "Planeja, compara preços e busca retorno no uso.", type: "R" },
    ],
  },
  {
    question: "Seu maior medo financeiro é:",
    answers: [
      { text: "Ficar sem dinheiro antes do fim do mês.", type: "Q" },
      { text: "Perder o controle e não conseguir se manter.", type: "W" },
      { text: "Ter que gastar minhas economias.", type: "E" },
      { text: "Não atingir minha liberdade financeira.", type: "R" },
    ],
  },
  {
    question: "Como você organiza seu orçamento?",
    answers: [
      { text: "Não organizo.", type: "Q" },
      { text: "Faço um controle mental, mais ou menos.", type: "W" },
      { text: "Tenho controle simples, mas eficaz.", type: "E" },
      { text: "Uso ferramentas digitais, faço projeções.", type: "R" },
    ],
  },
  {
    question: "Quando surge uma nova fonte de renda:",
    answers: [
      { text: "Gasto como recompensa.", type: "Q" },
      { text: "Guardo para emergências.", type: "W" },
      { text: "Poupo tudo.", type: "E" },
      { text: "Diversifico meus investimentos.", type: "R" },
    ],
  },
  {
    question: "Você recebe um convite para um jantar caro com amigos:",
    answers: [
      { text: "Aceito sem pensar, depois vejo como pagar.", type: "Q" },
      { text: "Penso duas vezes, mas talvez vá.", type: "W" },
      { text: "Provavelmente recuso, acho desperdício.", type: "E" },
      { text: "Avalio se cabe no meu orçamento de lazer.", type: "R" },
    ],
  },
  {
    question: "Você vê uma matéria dizendo que um ativo subiu 300% em 1 ano:",
    answers: [
      { text: "Penso 'devia ter investido', mas sigo minha vida.", type: "Q" },
      { text: "Desconfio e fujo dessas coisas.", type: "W" },
      { text: "Acho arriscado demais, prefiro não mexer.", type: "E" },
      { text: "Estudo o caso e vejo se é oportunidade ou bolha.", type: "R" },
    ],
  },
  {
    question: "Quando pensa no futuro:",
    answers: [
      { text: "Vai dar certo de alguma forma.", type: "Q" },
      { text: "Quero estabilidade e segurança.", type: "W" },
      { text: "Quero viver tranquilo e sem depender de ninguém.", type: "E" },
      { text: "Quero liberdade financeira e qualidade de vida.", type: "R" },
    ],
  },
  {
    question: "Como lida com compras do dia a dia?",
    answers: [
      { text: "Compra sem pensar muito.", type: "Q" },
      { text: "Compara preços e só compra o necessário.", type: "W" },
      { text: "Planeja a lista com antecedência.", type: "E" },
      { text: "Usa cashback, cupons e busca otimizar gastos.", type: "R" },
    ],
  },
  {
    question: "Você tem alguma reserva de emergência?",
    answers: [
      { text: "Nenhuma.", type: "Q" },
      { text: "Um pouco guardado na conta.", type: "W" },
      { text: "Sim, equivalente a vários meses de despesas.", type: "E" },
      { text: "Sim, e está investida de forma inteligente.", type: "R" },
    ],
  },
  {
    question: "Como costuma aprender sobre dinheiro?",
    answers: [
      { text: "Não me interesso por isso.", type: "Q" },
      { text: "Acompanho dicas simples e básicas.", type: "W" },
      { text: "Já li alguns livros e sigo perfis sobre o tema.", type: "E" },
      { text: "Faço cursos, sigo notícias do mercado e estudo sempre.", type: "R" },
    ],
  },
  {
    question: "Você começa a gastar mais quando:",
    answers: [
      { text: "Recebe um aumento.", type: "Q" },
      { text: "Está sob pressão emocional.", type: "W" },
      { text: "Quase nunca muda meus hábitos.", type: "E" },
      { text: "Não deixo que isso afete minhas decisões.", type: "R" },
    ],
  },
  {
    question: "O que você acha de aposentadoria?",
    answers: [
      { text: "Isso está tão longe... nem penso.", type: "Q" },
      { text: "Espero contar com o INSS.", type: "W" },
      { text: "Já guardo dinheiro pensando nisso.", type: "E" },
      { text: "Tenho um plano bem definido para isso.", type: "R" },
    ],
  },
  {
    question: "Você se sente mais confortável com:",
    answers: [
      { text: "Dinheiro na mão e curtindo a vida.", type: "Q" },
      { text: "Dinheiro na conta rendendo pouco, mas seguro.", type: "W" },
      { text: "Dinheiro guardado, mesmo sem render muito.", type: "E" },
      { text: "Dinheiro trabalhando para mim com inteligência.", type: "R" },
    ],
  },
  {
    question: "Para você, o que é ser bem-sucedido financeiramente?",
    answers: [
      { text: "Poder comprar o que quiser, quando quiser.", type: "Q" },
      { text: "Viver com estabilidade e sem dívidas.", type: "W" },
      { text: "Ter uma boa reserva para imprevistos.", type: "E" },
      { text: "Ter liberdade para escolher como viver sem depender de ninguém.", type: "R" },
    ],
  },
];

const results = {
  Q: {
    title: "Descontrolado",
    description: "Você vive o presente com intensidade, aproveita oportunidades e não gosta de perder momentos. No entanto, essa impulsividade pode te levar a gastar mais do que ganha, ignorar orçamentos e entrar em dívidas frequentes. Para melhorar sua relação com o dinheiro, é importante adotar hábitos de controle financeiro, como registrar gastos, definir metas e criar uma reserva de emergência. Com um pouco de disciplina, você pode manter seu estilo de vida sem comprometer o futuro."
  },
  W: {
    title: "Conservador",
    description: "Você preza pela segurança e prefere manter o dinheiro guardado a correr riscos. Gosta de estabilidade, evita dívidas e geralmente opta por investimentos tradicionais e de baixo risco. Apesar da cautela ser uma qualidade, ela pode impedir seu dinheiro de crescer com mais eficiência. Para avançar, vale considerar um planejamento financeiro que combine segurança com rentabilidade a longo prazo, explorando novas possibilidades de forma gradual e consciente."
  },
  E: {
    title: "Poupador",
    description: "Você tem disciplina, organiza bem seus gastos e se protege contra imprevistos. Acumular e economizar é parte natural do seu comportamento, o que traz tranquilidade em momentos difíceis. No entanto, pode haver um certo receio de arriscar e fazer o dinheiro render mais. Para evoluir financeiramente, vale estudar opções de investimentos mais estratégicos, que estejam alinhados ao seu perfil e objetivos de longo prazo."
  },
  R: {
    title: "Investidor",
    description: "Você enxerga o dinheiro como uma ferramenta de crescimento e liberdade. Costuma fazer escolhas conscientes, estuda o mercado e busca oportunidades de aumentar seu patrimônio. Tem um perfil estratégico, define metas claras e sabe equilibrar riscos com retorno. Esse comportamento demonstra maturidade financeira e um bom domínio sobre suas decisões. O desafio pode estar em manter o foco no propósito e não perder de vista o equilíbrio entre viver o presente e planejar o futuro."
  }

};

const QuizFinanceiro = () => {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ Q: 0, W: 0, E: 0, R: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (type) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const max = Math.max(...Object.values(scores));
    const personality = Object.keys(scores).find(key => scores[key] === max);
    return results[personality];
  };

  return (
    <>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card sx={{ padding: 4, backgroundColor: 'rgb(250, 250, 250)', borderRadius: 10, boxShadow: 6 }}>
          {!finished ? (
            <Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {questions[current].question}
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                {questions[current].answers.map((ans, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    onClick={() => handleAnswer(ans.type)}
                    sx={{ padding: 2,borderRadius: 4, backgroundColor: 'rgb(60, 136, 32)', color: '#fff', '&:hover': { backgroundColor: 'rgb(31, 68, 18)' } }}
                  >
                    {ans.text}
                  </Button>
                ))}
              </Box>
              <Typography variant="body2" align="right" mt={2}>
                Pergunta {current + 1} de {questions.length}
              </Typography>
              {current > 0 && !finished && (
            <IconButton edge="end" color="inherit" onClick={() => setCurrent(current - 1)}>
              <ArrowBackIcon />
            </IconButton>
          )}
              <LinearProgress variant="determinate" value={((current + 1) / questions.length) * 100} sx={{ mt: 1, height: 10, backgroundColor: 'rgb(224, 224, 224)' }} />
            </Box>
          ) : (
            <Box textAlign="center">
              <Typography variant="h4" color="rgb(51, 102, 0)" fontWeight="bold" gutterBottom>
                Sua Personalidade Financeira:
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
      <img
        src="src/assets/profilePic.jpg"
        alt="Imagem circular"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
    </Box>
              <Typography variant="h5" fontWeight="bold" color="rgb(0, 153, 204)" gutterBottom>
                {getResult().title}
              </Typography>
              <Typography variant="body1" color="rgb(0, 0, 0)">
                {getResult().description}
              </Typography>
            </Box>
          )}
        </Card>
      </Container>
    </>
  );
};

export default QuizFinanceiro;
