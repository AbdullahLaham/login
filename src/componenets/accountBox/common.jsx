import react from 'react'
import styled from 'styled-components'
export const BoxContainer = styled.div`
width: 100%;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, .8);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`
export const BoldLink = styled(MutedLink) `
    color: rgb(241, 196, 15);
    font-weight: 900;

`
export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px dotted rgba(200,200,200,.4);
    padding: 1px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all .2s ease;
    font-size: 12px;
    margin-bottom: 1rem;
    &: focus {
        outline: none;
        border-bottom: 3px solid orange;
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid yello
    }
    &::placeholder {
        outline: none;
    }
`
export const SubmitButton = styled.button`
    width: 100%;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    margin: 1.1rem 0;
    background: rgb(115,121,9);
    background: linear-gradient(90deg,  rgba(115,121,9,0.5326505602240896) 35%,rgba(241,255,0,0.9108018207282913) 100%);
   &:hover {
    filter: brightness(1.03);
   }
`
export const Fieldcontainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`
export const FieldError = styled.div`
   color: #b32e2e;
   font-size: 11px;
   min-height: 18px;
`