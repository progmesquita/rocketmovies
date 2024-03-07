import styled from 'styled-components'

export const Container = styled.li`
    display: inline;

    list-style: none;
    padding: 5px 16px;
    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_2};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`