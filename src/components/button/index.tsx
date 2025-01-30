import { css } from "@emotion/react";
import { FC } from "react";

interface IButtonProps {
  value: string;
}

const buttonStyle = css`
    width: 14.2rem;
    height: 4.5rem;
    border: none;
    border-radius: 17px;
    background-color: var(--color-secondary);
    color: var(--color-primary-text);
    font-family: var(--font-primary-bold);
    font-size: 18px;

    &:hover {
        background-color: var(--color-primary);
        cursor: pointer;
    }
`

const Button: FC<IButtonProps> = ({ value }: IButtonProps) => {
  return <button css={buttonStyle}>{value}</button>;
};

export default Button;
