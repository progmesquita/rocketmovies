import { LuClock3 } from "react-icons/lu";
import { Container } from "./styles"

export function Publicated() {
    return(
        <Container>
            <img src="https://github.com/progmesquita.png" alt="Foto de Usuário" />
            <span>Por Gabriel Mesquita</span>
            <LuClock3 />
            <span>06/03/2024 às 14:08</span>
        </Container>
    )
}