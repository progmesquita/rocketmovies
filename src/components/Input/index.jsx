import { Container } from "./styles"

export function Input({ icon: Icon, roboto = false, ...rest }) {
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} style={roboto ? {fontFamily: "Roboto"} : null} />
        </Container>
    )
}