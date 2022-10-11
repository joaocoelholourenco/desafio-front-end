import styles from "styled-components";

export const Table = styles.table`
border-collapse:separate; 
border-spacing: 0 1px;
th {
  padding:  0.75rem 2rem;
}
td {
  padding:  0.5rem 2rem;
}
`;

export const TableHeader = styles.thead`
background: var(--primary);
color: var(--white);


box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

th{
  font-weight: 500;
  text-align: left;

  :first-of-type{
    border-radius: 4px 0 0 0;
  }

  : last-of-type{
    border-radius: 0 4px 0 0;
  }
}
`;
export const TableItem = styles.tr`

background: var(--white);
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

img{
  height: 34px;
  width: 34px;
  border-radius: 50%;
}
`;

export const Empty = styles.div`
  width:100%;
  justify-content: center;
  margin: 3rem;
`;
