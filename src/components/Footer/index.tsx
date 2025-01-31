import { css } from "@emotion/react";
import { FC } from "react";

const headerStyle = css`
  background-color: var(--color-primary);
  font-size: 2.4rem;
  display: flex;
  align-items: baseline;
  height: 12rem;
  /* padding-top: 3.7rem; */
`;

const Footer: FC = () => {
  return (
    <footer css={headerStyle}>
    </footer>
  );
};

export default Footer;
