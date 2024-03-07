import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    max-width: ${({$isNew }) => $isNew ? "190px" : "120px"};
    
    padding: 16px;
    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    
    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.BACKGROUND_600}` : "none"};
    border-radius: 10px;
    
    > input {
        width: 100%;
        
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: ${({ $isNew }) => $isNew ? "text" : "default"};
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }
    }
    
    > button {        
        svg {
            width: 22px;
            height: 22px;
            
            color: ${({ theme }) => theme.COLORS.PINK_400};
        }
    }
    `