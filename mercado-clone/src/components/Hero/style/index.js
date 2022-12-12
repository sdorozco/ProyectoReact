import styled from "styled-components";

export const ContainerHero = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
`;

export const RowHero = styled.div`
  >a {
    font-size: 14px;
    text-decoration: none;
    color: var(--blue3);
    padding: 3.5px 0;
    transition: all 300ms ease--in-out;

    & + a{
        padding-left: 10px;
        margin-left: 10px;
        border-left: 1px solid var(--border);
    }
  }
  a.back{
    color: var(--text1)
  }
  a:hover{
    color: var(--blue2)
  }
`;
