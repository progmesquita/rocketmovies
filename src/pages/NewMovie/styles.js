import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;

    margin-top: 40px;
    padding-inline: 123px;

    > a {
        text-decoration: none;
    }
    
    > h1 {
        font-size: 3.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-block: 24px 40px;
    }
`

export const Form = styled.div`
    display: grid;
    grid-template-areas: 
    "title rating"
    "desc desc"
    "tags tags";

    gap: 40px;
`

export const TextArea = styled.textarea`
    grid-area: desc;

    width: 100%;
    height: 200px;

    margin-top: -8px;
    padding: 19px 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    font-size: 1.6rem;
    
    outline: none;
    border: none;
    border-radius: 10px;

    resize: none;

    &::placeholder {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`

export const Tags = styled.div`
    grid-area: tags;

    > h2 {
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    
    width: 100%;

    padding: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    > div:last-child {
        flex: 1;
    }
`