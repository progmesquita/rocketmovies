import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 32px;

    font-size: 1.6rem;
    font-weight: normal;
    color: ${({ theme, $dark }) => $dark ? theme.COLORS.PINK_400 : theme.COLORS.BACKGROUND_900};

    background-color: ${({ theme, $dark }) => $dark ? theme.COLORS.GRAY_900 : theme.COLORS.PINK_400};
    border-radius: 8px;

    > svg {
        width: 16px;
        height: 16px;
        
        margin-right: 8px;
    }
`