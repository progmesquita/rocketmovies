import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 6px;

    color: ${({ theme }) => theme.COLORS.PINK_400};

    > svg {
        width: 11px;
        height: 11px;
    }
`