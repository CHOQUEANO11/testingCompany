/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'

const Container = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 30px;
cursor: pointer;
margin-top: 50;

position: static;
width: 186px;
height: 61px;
left: calc(50% - 186px/2);
top: calc(50% - 61px/2 + 12.5px);

background: #3D3ADA;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 24px 0px;
`

const Title = styled.span`
color: #fff;
font-size: 16px
`
export {Container, Title}