import { FiArrowLeft } from 'react-icons/fi'
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Container, Form, Avatar, Content } from "./styles"

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar" />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/progmesquita.png" alt="Foto de Usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Content>
                    <Input type="text" icon={FiUser} placeholder="Nome" required />
                    <Input type="email" icon={FiMail} placeholder="Email" required />
                    <Input type="password" icon={FiLock} placeholder="Senha atual" required />
                    <Input type="password" icon={FiLock} placeholder="Nova senha" required />
                </Content>

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}