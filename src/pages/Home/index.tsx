import { FC } from "react";
import { Card } from "../../components/card";
import { mockCards } from "../../components/card/cards-mock";
import { css } from "@emotion/react";

const cardListStyle = css`
    margin: auto;
    width: 65vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
`

const Home: FC = () => {
  const cardList = mockCards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      tag={card.tag}
      key={card.title}
    ></Card>
  ));

  return <div css={cardListStyle}>{cardList}</div>;
};

export default Home;
