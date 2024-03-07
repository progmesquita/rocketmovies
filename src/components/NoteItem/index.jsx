import { MdOutlineClose } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";

import { Container } from "./styles"

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return(
        <Container $isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button type="button" onClick={onClick}>
                { isNew ? <HiOutlinePlus /> : <MdOutlineClose /> }
            </button>
        </Container>
    )
}