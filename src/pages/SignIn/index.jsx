import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <section>
                    <Input type="email" icon={FiMail} placeholder="E-mail" />
                    <Input type="password" icon={FiLock} placeholder="Senha" />
                    <Button title="Entrar" />
                </section>

                <footer>
                    <Link to="/signup">
                        <ButtonText title="Criar conta" />
                    </Link>
                </footer>
            </Form>

            <Background />
        </Container>
    )
}