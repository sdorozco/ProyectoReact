import styled from "styled-components";

export const SectionWarranty = styled.div`
  padding: 32px 16px;
  margin: 0 16px;
  border: 1px solid var(--border);
  border-bottom: none;

  >h5 {
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5px;
  }

  >div {
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    >span{
        margin-bottom:24px;
    }
    .title{
        font-size: 16px;
        color: var(--text1);
        line-height: 21.6px;
    }
    .description{
        font-size: 14px;
        color: var(--text2);
    }
    >a{
        font-size: 14px;
        color: var(--blue3);
        text-decoration: none;

    }
`