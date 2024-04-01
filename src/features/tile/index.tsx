import {
  Container,
  Content,
  Description,
  Image,
  Rate,
  Star,
  Tag,
  TagContainer,
  Title,
  Vote,
  VoteContainer,
} from "./styled";

interface TileProps {
  image: string;
  title: string;
  description?: string | number;
  tag?: string[];
  rate?: number;
  vote?: number;
}

export const Tile = ({
  image,
  title,
  description,
  tag,
  rate,
  vote,
}: TileProps) => {
  return (
    <>
      <Container>
        <div>
          <Image src={image} />
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
          <TagContainer>
            {tag &&
              tag.map((tagItem, index) => <Tag key={index}>{tagItem}</Tag>)}
          </TagContainer>
        </div>
        <VoteContainer>
          {rate && vote && (
            <>
              <Star />
              <Rate>{rate}</Rate>
              {vote === undefined ? (
                <Vote>0 votes</Vote>
              ) : (
                <Vote>{vote} votes</Vote>
              )}
            </>
          )}
        </VoteContainer>
      </Container>
    </>
  );
};
