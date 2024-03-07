import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Form, TextArea, Tags, TagsContainer } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'

import { Link } from 'react-router-dom'

export function NewMovie() {
    return(
        <Container>
            <Header />

            <Content>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar" />
                </Link>

                <h1>Novo Filme</h1>

                <Form>
                    <Input type="text" placeholder="Título" roboto />
                    <Input type="number" placeholder="Sua nota (de 0 a 5)" roboto />
                    <TextArea placeholder="Observações" style={{fontFamily: "Roboto"}} />

                    <Tags>
                        <h2>Marcadores</h2>

                        <TagsContainer>
                            <NoteItem value="React" />
                            <NoteItem value="NodeJs" />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </TagsContainer>
                    </Tags>

                    <Button title="Excluir filme" dark />
                    <Button title="Salvar alterações" />
                </Form>
            </Content>
        </Container>
    )
}