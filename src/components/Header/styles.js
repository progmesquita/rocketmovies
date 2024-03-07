import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 116px;

    padding: 0 123px;

    display: flex;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK_400};
    }

    > div:nth-child(2) {
        flex: 1;
        margin: 0 64px;
    }
`