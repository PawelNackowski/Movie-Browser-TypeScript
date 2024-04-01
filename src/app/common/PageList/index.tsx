import { ReactNode } from "react";
import { Container } from "../styled";
import { Header } from "./styled";

interface PageListProps {
  title: string;
  content: ReactNode;
}

export const PageList = ({ title, content }: PageListProps) => {
  return (
    <Container>
      <Header>{title}</Header>
      <div>{content}</div>
    </Container>
  );
};
