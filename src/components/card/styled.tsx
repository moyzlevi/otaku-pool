import styled from "@emotion/styled/macro";
import { Card } from ".";

export const StyledCard = styled(Card) `
    background-image: ${props => props.image};
`