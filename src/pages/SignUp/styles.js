import styled from 'styled-components'

import background from '../../assets/background.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: left;
    justify-content: center;

    padding-inline: 134px 163px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK_400};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;

        margin-block: 48px;
    }

    > section {
        margin-bottom: 42px;

        button {
            margin-top: 16px;
        }
    }

    > footer {
        display: flex;
        justify-content: center;

        a {
            justify-self: center;
            text-decoration: none;
        }
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;

    opacity: 0.3;
`