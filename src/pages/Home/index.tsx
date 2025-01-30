import { FC } from "react";
import { Card } from "../../components/card";
import { mockCards } from "../../components/card/cards-mock";
import { css } from "@emotion/react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const cardListStyle = css`
  margin: auto;
  width: 65vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  background-color: transparent;
`;

const Home: FC = () => {
  const cardList = mockCards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      tag={card.tag}
      // key={card.title}
      image={card.image}
    ></Card>
  ));

  return (
    <>
      <Header size="big"></Header>
      <div css={cardListStyle}>{cardList}</div>
      <Footer></Footer>
    </>
  );
};

export default Home;
