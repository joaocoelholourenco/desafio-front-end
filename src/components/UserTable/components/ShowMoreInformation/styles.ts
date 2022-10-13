import styles from "styled-components";

export const Container = styles.div`
padding: 1rem 1rem;
@media screen and (max-width: 815px){
  padding: 0 0.5rem 2rem;
}
`;

export const MoreInformation = styles.div`
width: 100%;
flex-direction: row;
justify-content: end;
gap: 0.5rem;

>div{
  display: flex;
  justify-content: end;
  flex-direction: row;
  
  padding: 2rem;
  
  gap: 0.5rem;

  padding: 0 2rem;
  >span{
    font-weight: 500;
  }

  @media screen and (max-width: 815px){
    width: 100%;
    padding: 0 2rem;
    justify-content: space-between;
  }

}  
`;
