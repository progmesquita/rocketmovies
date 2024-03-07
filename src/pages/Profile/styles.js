import styled from 'styled-components'

export const Container = styled.div`

    header {
        display: flex;
        align-items: center;
        
        height: 144px;
        padding-left: 146px;
        
        background-color: ${({ theme }) => theme.COLORS.PINK_100};
        
        > a {
            text-decoration: none;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    max-width: 340px;

    margin: -93px auto;
`
export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;

    margin-left: 48px;
    margin-bottom: 56px;

    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%;

        cursor: default;
    }

    > label {
        width: 48px;
        height: 48px;

        padding: 14px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK_400};

        position: relative;
        right: 55px;
        bottom: 6px;

        cursor: pointer;
        transition: .5s filter;

        &:hover {
            filter: brightness(.8);
        }

        svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }

        input {
            display: none;
        }
    }
`

export const Content = styled.div`
    width: 100%;

    margin-bottom: 16px;

    > div:nth-child(3) {
        margin-top: 24px;
    }
`