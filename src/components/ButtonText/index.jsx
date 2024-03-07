import { Container } from "./styles"

export function ButtonText({ icon: Icon, title }) {
    return(
        <Container>
            { Icon && <Icon size={30} /> }
            {title}
        </Container>
    )
}