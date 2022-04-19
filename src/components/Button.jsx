import React from "react";
import styledComponents from "styled-components";

export default function Button({ title, func }) {
  return <ButtonComponent onClick={func}>{title}</ButtonComponent>;
}

const ButtonComponent = styledComponents.button`
  background:  #719ece;
  border: 0;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  flex-grow: 1;
  font-weight: 600;
  font-size: 1rem;
  outline: 0;
  padding: 0.9rem 1.5rem;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
