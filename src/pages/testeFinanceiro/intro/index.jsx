import React from 'react';
import {
  Container,
  Card,
  Typography,
  Button,
  Box,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Navbar from 'src/components/Navbar/navbar.jsx';

function IntroQuiz() {
  const navigate = useNavigate();

  const irParaQuiz = () => {
    navigate('/quiz');
  };

  const voltar = () => {
    navigate(-1); // Melhor que window.history.back() em apps React
  };

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#e8f5e9', minHeight: '100vh', py: 6 }}>
        <Container maxWidth="sm">
          <Card sx={{ p: 4, borderRadius: 6, boxShadow: 6 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton onClick={voltar}>
                <ArrowBackIcon />
              </IconButton>
            </Box>

            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Teste de personalidade financeira
            </Typography>

            <Box
              component="img"
              src="src/assets/imagemIntro.png"
              alt="Imagem de introdução"
              sx={{
                width: '100%',
                borderRadius: 4,
                mb: 2,
                objectFit: 'cover'
              }}
            />

            <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify' }}>
              Este teste ajuda você a compreender melhor seus comportamentos e hábitos financeiros.
              Ao responder com sinceridade, você obterá insights sobre sua relação com o dinheiro e
              poderá tomar decisões mais conscientes para seu futuro financeiro.
            </Typography>

            <Button
              variant="contained"
              onClick={irParaQuiz}
              sx={{
                backgroundColor: 'rgb(60, 136, 32)',
                '&:hover': { backgroundColor: 'rgb(31, 68, 18)' },
                py: 1.5,
                borderRadius: 3
              }}
              fullWidth
            >
              Iniciar o teste
            </Button>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default IntroQuiz;
