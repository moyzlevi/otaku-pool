import { FC } from "react";
import { Card } from "../../components/Card";
import { mockCards } from "../../components/Card/cards-mock";
import { css } from "@emotion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useBackgroundBody } from "../../hooks/useBackgroundBody";

const cardListStyle = css`
  margin: auto;
  width: 65vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  background-color: transparent;

  & > :nth-child(-n + 3) {
    top: -3rem;
    &:hover {
      transition: all 0.2s ease-out;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      top: -45px;
      border: 1px solid #cccccc;
      background-color: white;
    }
  }

  & > :nth-child(n + 4) {
    &:hover {
      transition: all 0.2s ease-out;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      top: 15px;
      border: 1px solid #cccccc;
      background-color: white;
    }
    top: 3rem;
  }
`;


const Home: FC = () => {
  useBackgroundBody("anime-bg")

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
