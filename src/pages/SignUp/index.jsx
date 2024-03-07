import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <section>
                    <Input type="text" icon={FiUser} placeholder="Nome" />
                    <Input type="email" icon={FiMail} placeholder="E-mail" />
                    <Input type="password" icon={FiLock} placeholder="Senha" />
                    <Button title="Cadastrar" />
                </section>

                <footer>
                    <Link to="/">
                        <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
                    </Link>
                </footer>
            </Form>

            <Background />
        </Container>
    )
}