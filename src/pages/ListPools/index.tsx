import { FC } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { css } from "@emotion/react";
import { useBackgroundBody } from "../../hooks/useBackgroundBody";

const listPoolStyle = css`
   body {
    background-image: url("https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ");
  }
`

const ListPools: FC = () => {
  useBackgroundBody("colored-bg")
  return (
    <>
      <Header size="small" css={listPoolStyle}></Header>
      <Button value="Filters"></Button>
    </>
  );
};

export default ListPools;
