import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { UserType } from "../../../../Interfaces/Users";
import { ShowMoreInformation } from "../ShowMoreInformation";
import { Container } from "./styles";

interface TableItemProps {
  user: UserType;
}

export const TableItem: React.FC<TableItemProps> = ({ user }) => {
  const [show, setShow] = useState(false);

  const IconShow = show ? BiChevronUp : BiChevronDown;

  return (
    <Container key={user.id}>
      <div>
        <td className="col-1">
          <img src={user.img_url} alt={user.name} />
        </td>
        <td className="col-2">{user.name}</td>
        <td className="hide-in-mobile col-2">{user.role}</td>
        <td className="hide-in-mobile col-3">{user.dateHireFormatted}</td>
        <td className="hide-in-mobile col-2">{user.phoneFormatted}</td>
        <td className="show-in-mobile col-2">
          <button onClick={() => setShow((old) => !old)}>
            <IconShow color={"var(--primary)"} size="32px" />
          </button>
        </td>
      </div>
      {show && <ShowMoreInformation user={user} />}
    </Container>
  );
};
