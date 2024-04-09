import { ReactNode } from "react";
import { Container } from "../styled";
import { GridList, Header } from "./styled";

interface PageListProps {
  title: string;
  content: ReactNode;
}

export const PageList = ({ title, content }: PageListProps) => {
  return (
    <Container>
      <Header>{title}</Header>
      <GridList>{content}</GridList>
    </Container>
  );
};
