import { UserType } from "../../Interfaces/Users";
import { Table, TableHeader, TableItem } from "./styles";

interface UserTableProps {
  users: UserType[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
        </tr>
      </TableHeader>
      <tbody>
        {users?.map((user) => {
          return (
            <TableItem>
              <td>
                <img src={user.img_url} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.dateHireFormatted}</td>
              <td>{user.phone}</td>
            </TableItem>
          );
        })}
      </tbody>
    </Table>
  );
};
