import { Container } from "./styles"

export function Button({ icon: Icon, title, dark}) {
    return(
        <Container $dark={dark}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}