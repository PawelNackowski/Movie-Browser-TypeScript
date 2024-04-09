import styled from "styled-components";
import { ReactComponent as StarIco } from "./star.svg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 324px;
  width: 100%;
  height: 650px;
  max-height: 100%;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin: 8px 0 8px 0;
  gap: 8px;
`;

export const Image = styled.img`
  max-width: 292px;
  width: 100%;
  max-height: 434px;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.light};
  color: ${({ theme }) => theme.colors.darkerGray};
  margin: 0;
  padding: 0;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: fit-content;
  padding: 8px 16px 8px 16px;
  gap: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontsWeight.light};
`;

export const VoteContainer = styled.div`
  display: flex;
  gap: 12px;
  line-height: 24px;
`;

export const Star = styled(StarIco)`
  width: 24px;
  height: 22px;
  transform: translateY(-1px);
`;

export const Rate = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
`;

export const Vote = styled.div`
  color: ${({ theme }) => theme.colors.darkerGray};
`;
