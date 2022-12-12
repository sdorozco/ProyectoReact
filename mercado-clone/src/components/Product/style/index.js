import styled from "styled-components";

export const ContainerProduct = styled.div`
display: flex;
flex-direction: column;
margin-top: 12px;
`

export const ColumnProduct = styled.div`

`

export const PanelProduct = styled.div`
background-color: var(--white);
box-shadow: var(--panel);
display: grid;
grid-template-column: 67fr 33fr;
`

export const GaleryProduct = styled.div`
display: flex;
align-item: center;
justify-content: center;
height: 530px;

>img{
    height: 75%;
}
`
