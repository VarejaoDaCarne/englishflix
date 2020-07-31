import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 10px 14px;
font-style: normal;
font-weight: bold;
font-size: 14px;
outline: none;
border-radius: 5px;
text-decoration: none;
transition: opacity .3s;
&:hover,
&:focus {
    opacity: .5;
}
`
export const StyledForm = styled.form`
width: 50%;
`
export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
`
