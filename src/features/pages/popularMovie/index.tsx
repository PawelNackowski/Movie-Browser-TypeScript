import { PageList } from "../../../app/common/pageList";
import { Tile } from "../../../app/common/tile";
import { tileData } from "../testData";
import poster from "../../../app/common/tile/poster.png";

export const PopularMovie = () => {
  return (
    <PageList
      title={"Popular Movies"}
      content={tileData.map((data) => (
        <Tile
          image={poster}
          title={data.title}
          description={data.description}
          tag={data.tag}
          rate={data.rate}
          vote={data.vote}
        />
      ))}
    />
  );
};
