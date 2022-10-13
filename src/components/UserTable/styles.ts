import styles from "styled-components";

export const Table = styles.table`


.col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 10%;
  flex: 0 0 10%;
  max-width: 10%;
  @media screen and (max-width: 860px) {
    flex: 1;
    max-width: 100%;
  }
}
.col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
  @media screen and (max-width: 860px) {
    flex: 1;
    max-width: 100%;
  }
}
.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
  @media screen and (max-width: 860px) {
    flex: 1;
    max-width: 100%;
  }
}


  width: 100%;
  border-collapse: separeted;
  
  border-spacing: 0 1px;
  
  white-space: nowrap;

  th {
    padding:  0.75rem 2rem;
  }
  td {
    padding:  0.5rem 2rem;
    @media screen and (max-width: 860px){
      padding:  0.5rem 1rem;
    }
  }

  .hide-in-mobile{
    @media screen and (max-width: 860px){
      display: none;
    }
  }

  .show-in-mobile{
    @media screen and (min-width: 860px){
      display: none;
    }
  }

  `;

export const TableHeader = styles.thead`
color: var(--white);

box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);


th{
  background: var(--primary);
  font-weight: 500;
  text-align: left;
  
  @media screen and (max-width: 860px){
    text-align: center;
  }
  :first-of-type{
    border-top-left-radius: 4px;
  }

  :last-of-type{
    border-top-right-radius: 4px;

  }
}
tr{
  display: flex;
  flex-wrap: wrap;
}

`;
