import { FiPlus } from "react-icons/fi"

import { Container, Content, FilmInfo, Section } from "./styles"

import { Link } from "react-router-dom"

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {
    return(
        <Container>
            <Header />

            <Content>
                <FilmInfo>
                    <h1>Meus Filmes</h1>

                    <Link to="/newmovie">
                        <Button icon={FiPlus} title="Adicionar filme" />
                    </Link>
                </FilmInfo>

                <Section>
                    <Card />
                    <Card />
                    <Card />
                </Section>
            </Content>
        </Container>
    )
}