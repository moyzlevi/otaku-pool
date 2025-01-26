import { css } from "@emotion/react";
import { FC } from "react";
import { IHeaderItem } from "./IHeaderItem";
import { Link } from "react-router-dom";

const headerItems: IHeaderItem[] = [
  { text: "Home", path: "/" },
  { text: "Create Bracket", path: "/create-bracket" },
  { text: "Current", path: "/brackets?filter=current" },
  { text: "Completed", path: "/completed?filter=completed" },
  { text: "Login", path: "/login" },
];

const headerStyle = css`
  background-color: grey;
  font-size: 2.4rem;
  display: flex;
  align-items: baseline;
`;

const linkStyle = css`
    &:first-of-type {
        font-family: 'Palanquin Dark';
    }

    &:nth-last-of-type(2) {
        margin-right: auto;
    }
    text-decoration: none;
    color: var(--color-primary-text);
`

const logoStyle = css`
    font-family: 'Oxanium';
    font-weight: bold;
    color: var(--color-primary-text);
    text-decoration: none;
`

const Header: FC = () => {
  const items = headerItems.map((item) => (
    <Link css={linkStyle} to={item.path}>{item.text}</Link>
  ));
  return <header css={headerStyle}>{items} <Link to={"/"}css={logoStyle}>Otaku Pool</Link></header>;
};

export default Header;
