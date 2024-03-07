import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Content = styled.section`
    width: 100%;
    padding: 48px 106px 0 123px;
`

export const FilmInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 38px;

    h1 {
        font-size: 3.2rem;
        font-weight: normal;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
        text-decoration: none;
    }

    button {
        max-width: 207px;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    height: 66vh;
    
    padding-right: 8px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK_400};
        border-radius: 8px;
    }
`