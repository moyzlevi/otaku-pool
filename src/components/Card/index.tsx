import { css } from "@emotion/react";
import { FC } from "react";

export interface ICardProps {
  title: string;
  description: string;
  tag: string;
  image: string;
}

const cardStyle = css`
  height: 23.1rem;
  width: 26.6rem;
  background-color: var(--color-primary-grey);
  border-radius: 20px;
  box-shadow: var(--shadow-light);
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
  
`;

const cardInfo = css`
  color: var(--color-primary-text);
  padding-bottom: 1rem;
  padding-left: 1rem;
  background-color: #00000094;
  border-radius: 20px 0 20px 20px;

  h1 {
    width: 100%;
  }

  h2 {
    font-size: 1.2rem;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Card: FC<ICardProps> = ({title, description, tag, image}: ICardProps) => {
  console.log(image);
  return (
    <div
      css={[
        cardStyle,
        css({
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }),
      ]}
    >
      <div css={cardInfo}>
        <h2>{description}</h2>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
