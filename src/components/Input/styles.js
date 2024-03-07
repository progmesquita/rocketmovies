import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    
    margin: 8px 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    border-radius: 10px;
    
    > svg {
        width: 20px;
        height: 18px;
        
        position: relative;
        left: 15px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
    
    > input {
        width: 100%;
        height: 56px;
        padding: 19px 24px;
        
        font-size: 1.6rem;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
    }
    
    > input::placeholder {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`