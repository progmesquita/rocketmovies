import styled from 'styled-components'

export const Container = styled.div`
    a {
        text-decoration: none;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    padding-top: 40px;
    padding-inline: 123px 106px;

    color: ${({ theme }) => theme.COLORS.WHITE}
`

export const Title = styled.div`
    display: flex;
    align-items: center;

    margin-block: 24px;

    > h1 {
        font-size: 3.6rem;
    }

    > div {
        width: fit-content;
        margin-left: 20px;

        svg {
            width: 23px;
            height: 23px;

            margin-right: 8px;
        }
    }
`

export const Desc = styled.div`
    text-align: justify;
`

export const TagsContainer = styled.div`
    display: flex;
    gap: 8px;
`