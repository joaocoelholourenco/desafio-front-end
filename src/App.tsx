import { Header } from "./components/Header";
import { UsersProvider } from "./contexts/UsersContext";

import "./global.css";
import { Employees } from "./pages/Employees";

function App() {
  return (
    <>
      <Header />
      <UsersProvider>
        <Employees />
      </UsersProvider>
    </>
  );
}

export default App;
