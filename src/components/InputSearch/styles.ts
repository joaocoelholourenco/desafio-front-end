import styles from "styled-components";

export const Input = styles.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 3rem;
    width: 18rem;
    
    background: var(--white);
    
    border-radius: 4px;
    border: solid 1px var(--gray-10);
    
    input{
      border: none;

      :focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
      ::placeholder{
        color: var(--gray-20);
      }
    }
`;

export const SearcButton = styles.button`
  display: flex;
  align-items:center;    
  justify-content:center;    
  color: var(--gray-10);

  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem;
  background: transparent;
  
  
  :hover{
    cursor: pointer;
    background: var(--gray-10);
    color: var(--gray-20);
  }
`;
