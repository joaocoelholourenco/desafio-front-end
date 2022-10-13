import { BsFillCircleFill } from "react-icons/bs";
import { UserType } from "../../Interfaces/Users";
import { TableItem } from "./components/TableItem";
import { Table, TableHeader } from "./styles";

interface UserTableProps {
  users: UserType[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th className="col-1">FOTO</th>
          <th className="col-2">NOME</th>
          <th className="hide-in-mobile col-2">CARGO</th>
          <th className="hide-in-mobile col-3">DATA DE ADMISSÃO</th>
          <th className="show-in-mobile col-2">
            <BsFillCircleFill size="8px" />
          </th>
          <th className="hide-in-mobile col-2">TELEFONE</th>
        </tr>
      </TableHeader>
      <tbody>
        {users?.map((user) => {
          return <TableItem user={user} />;
        })}
      </tbody>
    </Table>
  );
};
