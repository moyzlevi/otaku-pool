import { css } from "@emotion/react";
import { FC } from "react";
import { IHeaderItem } from "./IHeaderItem";
import { Link } from "react-router-dom";

export interface IHeaderPros {
  size: "small" | "big";
}

const headerItems: IHeaderItem[] = [
  { text: "Create Bracket", path: "/create-bracket" },
  { text: "Current", path: "/pools?filter=current" },
  { text: "Completed", path: "/pools?filter=completed" },
  { text: "Login", path: "/login" },
];

const headerStyle = css`
  background-color: var(--color-primary);
  font-size: 2.4rem;
  display: flex;

  height: 18.9rem;

  &.small {
    align-items: center;
    height: 9.6rem;
  }

  &.big {
    align-items: baseline;
    height: 18.9rem;
    padding-top: 3.7rem;
  }
`;

const linkStyle = css`
  &:first-of-type {
    margin-left: 7rem;
    font-family: "Palanquin Dark";
  }

  &:nth-last-of-type(2) {
    margin-right: auto;
  }
  text-decoration: none;
  color: var(--color-primary-text);
  margin-right: 5rem;
`;

const logoStyle = css`
  font-family: "Oxanium";
  font-weight: bold;
  color: var(--color-primary-text);
  text-decoration: none;
  margin-right: 7rem;
`;

const inputStyle = css`
  border-radius: 17px;
  margin-right: 1.8rem;
  height: 4.5rem;
  width: 19rem;
  border: 0;
  color: var(--color-primary-text);
  font-family: "Palanquin";
  font-size: 2rem;
  caret-color: #ffffff39;
  padding-left: 1.6rem;
  background-color: #3b376d;
  &:focus {
    outline: none;
  }
`;

const Header: FC<IHeaderPros> = ({ size }: IHeaderPros) => {
  const items = headerItems.map((item) => (
    <Link css={linkStyle} to={item.path}>
      {item.text}
    </Link>
  ));
  return (
    <header css={headerStyle} className={size}>
      {items}
      <input css={inputStyle}></input>
      <Link to={"/"} css={logoStyle}>
        Otaku Pool
      </Link>
    </header>
  );
};

export default Header;
