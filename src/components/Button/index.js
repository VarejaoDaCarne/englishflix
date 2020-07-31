import styled from "styled-components"

const Button = styled.a `
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
    display: inline-block;
    transition: opacity .3s;
    justify-items: center;
    &:hover,
    &:focus {
        opacity: .5;
    }
`

export default Button