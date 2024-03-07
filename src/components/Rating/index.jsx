import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Container } from "./styles";

export function Rating() {
    return(
        <Container>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
        </Container>
    )
}