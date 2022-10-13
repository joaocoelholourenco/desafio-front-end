import { UserType } from "../../../../Interfaces/Users";
import { Container, MoreInformation } from "./styles";

interface ShowMoreInformationProps {
  user: UserType;
}

export const ShowMoreInformation: React.FC<ShowMoreInformationProps> = ({
  user,
}) => {
  return (
    <Container className="show-in-mobile">
      <MoreInformation>
        <div>
          <span>Cargo</span>
          <p>{user.role}</p>
        </div>
        <div>
          <span>Data de admissão</span>
          <p>{user.dateHireFormatted}</p>
        </div>
        <div>
          <span>Telefone</span>
          <p>{user.phoneFormatted}</p>
        </div>
      </MoreInformation>
    </Container>
  );
};
