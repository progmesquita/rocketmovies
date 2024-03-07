import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`    
    display: flex;
    align-items: center;
    text-align: right;

    cursor: pointer;
    
    > div {
        margin-right: 9px;
        
        button {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            font-size: 1.4rem;
            
            cursor: pointer;
        }
    }
`

export const Name = styled(Link)`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    
    h2 {
        font-size: 1.4rem;
        font-weight: bold;
    }
`

export const Image = styled(Link)`
    > img {
        width: 64px;
        height: 64px;

        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
        border-radius: 50%;
    }
`