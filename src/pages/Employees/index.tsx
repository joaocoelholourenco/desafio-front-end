import { InputSearch } from "../../components/InputSearch";
import { UserTable } from "../../components/UserTable";
import { useUsersContext } from "../../contexts/UsersContext";
import { Container, Content, Title } from "./styles";

export const Employees = () => {
  const { users } = useUsersContext();
  return (
    <Container>
      <Content>
        <Title>
          <p>Funcionários</p>
          <InputSearch />
        </Title>
        {users.length !== 0 ? (
          <UserTable users={users} />
        ) : (
          <span>Nenhum funcionários encontrado.</span>
        )}
      </Content>
    </Container>
  );
};
