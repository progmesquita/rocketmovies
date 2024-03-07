import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.PINK_400};

    background: transparent;

    > svg {
        width: 16px;
        height: 16px;
        
        margin-right: 8px;
    }
`