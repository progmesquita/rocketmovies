import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > img {
        width: 19px;
        height: 19px;
    
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
        border-radius: 50%;
    }

    > svg {
        width: 19px;
        height: 19px;

        margin-left: 15px;

        color: ${({ theme }) => theme.COLORS.PINK_400};
    }
`
