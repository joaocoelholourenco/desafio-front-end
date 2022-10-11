import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";
import { UserTable } from "./components/UserTable";

import { UserType } from "./Interfaces/Users";

import { Container, Title, Content } from "./styles";

import "./global.css";
import { api } from "./services/Api";
import { AxiosResponse } from "axios";
import { formatPhone } from "./utils/FormatPhone";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>
            <p>Funcionários</p>
            <InputSearch />
          </Title>
        </Content>
      </Container>
    </>
  );
}

export default App;
