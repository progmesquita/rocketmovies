import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    height: 223px;

    list-style: none;

    text-align: left;
    text-decoration: none;

    padding: 32px;
    
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 16px;
`

export const Title = styled.div`
    margin-bottom: 16px;

    > h2 {
        font-size: 2.4rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: 9px;
    }
`

export const Desc = styled.p`
    height: 53px;
    overflow-y: hidden;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`

export const Tags = styled.ul`
    display: flex;
    gap: 8px;

    margin-top: 18px;
`