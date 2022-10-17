import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useUsersContext } from "../../contexts/UsersContext";
import { match } from "../../utils/MatchSearch";
import { Input, IconContainer } from "./styles";

export const InputSearch = () => {
  const [notFound, setNotFound] = useState(false);
  const { setUsers, usersBackup } = useUsersContext();

  function search(search: string) {
    if (search.length === 0) {
      setUsers(usersBackup);
      setNotFound(false);
      return;
    }

    var result = usersBackup.filter((item) => match(search, item));

    if (result.length !== 0) {
      setUsers(result);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }

  const handleSearchWithDebounce = debounce((value) => search(value), 300);

  return (
    <Input>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => handleSearchWithDebounce(e.currentTarget.value)}
      />
      <IconContainer>
        <BiSearchAlt2 size={"24px"} />
      </IconContainer>
      {notFound && <span>Nenhum funcionário encontrado.</span>}
    </Input>
  );
};
