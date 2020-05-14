import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
        <a href="create">Criar conta</a>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
