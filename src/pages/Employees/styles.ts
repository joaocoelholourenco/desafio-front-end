import styles from "styled-components";

export const Container = styles.div`
display: flex;
justify-content: center;

`;
export const Content = styles.div`
display: flex;
flex: 1;
max-width: 1024px;
padding: 0 2rem;
flex-direction: column;

>span{
  margin: 2rem;
  text-align: center;
  font-weight: 500;
}



`;

export const Title = styles.div`
  display: flex;
  flex: 1;
  
  p{
    font-size: 1.5rem;
    font-weight: 500;
  }

  align-items: center;
  justify-content: space-between;
  margin: 2.75rem 0;

  @media screen and (max-width: 550px){
  flex-direction: column;
  align-items: start;
  gap: 1.75rem;
  margin: 1.5rem 0;
  }

`;
