import { FiUser } from 'react-icons/fi'

import { Container } from "./styles"

import { Input } from '../Input'
import { Profile } from '../Profile'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título" />

            <Profile name="Gabriel Mesquita" />
        </Container>
    )
}