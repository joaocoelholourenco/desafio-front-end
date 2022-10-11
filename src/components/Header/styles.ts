import style from "styled-components";

export const Container = style.div`
  display:flex;
  background: #1C1C1C;
  height: 60px;
  justify-content: center;
  
  div{
  max-width: 1024px;
  align-items: center;
  display:flex;
  flex: 1;
  padding: 0 2rem;
  }
`;
