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

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 50px;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const StyledLi = styled.ul`
    font-size: 26px;
    margin: 0;

    span {
        font-size: 22px;
        font-weight: 600;
    }
    @media (max-width: 800px) {
        margin-left: 0;
    }
`

export const StyledLiItem = styled.li`
    display: flex;
    flex-direction: row;
    min-height: 35px;
    align-items: center;
    margin-bottom: 5px;
`

export const Dot = styled.div`
    display: table;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: white;
    margin: auto 10px auto 0;
`