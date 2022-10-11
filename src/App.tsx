import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";
import { UserTable } from "./components/UserTable";

import { UserType } from "./Interfaces/Users";

import { Container, Title, Content } from "./styles";

import "./global.css";
import { api } from "./services/Api";
import { formatPhone } from "./utils/FormatPhone";

function App() {
  const [users, setUsers] = useState<UserType[]>([] as UserType[]);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get<UserType[]>("users");

      setUsers(
        data.map((user) => {
          const dateFormatted = new Date(user.date_hire).toLocaleDateString();
          const phoneFormatted = formatPhone(user.phone);
          return {
            ...user,
            dateHireFormatted: dateFormatted,
            phone: phoneFormatted,
          };
        })
      );
    }

    getData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>
            <p>Funcionários</p>
            <InputSearch />
          </Title>
          <UserTable users={users} />
        </Content>
      </Container>
    </>
  );
}

export default App;
