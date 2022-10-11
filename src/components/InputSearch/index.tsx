import { BiSearchAlt2 } from "react-icons/bi";
import { Input, SearcButton } from "./styles";

export const InputSearch = () => {
  return (
    <Input>
      <input type="text" placeholder="Pesquisar" />
      <SearcButton>
        <BiSearchAlt2 size={"24px"} />
      </SearcButton>
    </Input>
  );
};
