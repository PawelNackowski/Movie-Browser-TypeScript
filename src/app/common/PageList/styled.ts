import styled from "styled-components";

export const Header = styled.div`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontsWeight.bold};
  margin: 56px 0 24px 0;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;
