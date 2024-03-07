import { Container, Image, Name } from "./styles"

export function Profile({ name }) {
    return(
        <Container>
            <div>
                <Name to="/profile">
                    <h2>{name}</h2>
                </Name>
                <button>sair</button>
            </div>

            <Image to="/profile">
                <img src="https://github.com/progmesquita.png" alt="Foto de Usuário" />
            </Image>
        </Container>
    )
}