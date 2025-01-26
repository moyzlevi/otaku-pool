import { css } from "@emotion/react";
import { FC } from "react";

export interface ICardProps {
  title: string;
  description: string;
  tag: string;
}

const cardStyle = css`
  height: 23.1rem;
  width: 26.6rem;
  background-color: var(--color-primary-grey);
  border-radius: 20px;
  box-shadow: var(--shadow-light);  
  position: relative;
  &:nth-child(-n + 3) {
        top: -3rem; 
  }

  &:nth-child(n + 4) {
        top: 3rem; 
  }
`;

export const Card: FC<ICardProps> = (props: ICardProps) => {
  return (
    <div css={cardStyle}>
      <h1>{props.description}</h1>
      <h1>{props.title}</h1>
    </div>
  );
};
