import styles from "styled-components";

export const Container = styles.tr`

background: var(--white);
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

@media screen and (max-width: 860px){
  text-align: center;
}

div{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

img{
  height: 34px;
  width: 34px;
  border-radius: 50%;
}

button{
    
  background: transparent;
  border: none;

  justify-content: center;

  height: 34px;
  widht: 34px;
  border-radius: 50%;
  
  
  :hover{
    cursor: pointer;
    background: var(--gray-10);
  }
}

`;
