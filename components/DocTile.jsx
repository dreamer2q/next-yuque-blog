import styled from "@emotion/styled";
import Link from "next/link";

const Tile = styled.div`
  border: 1px solid black;

  margin: 1rem;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Desc = styled.div`
  font-size: 14px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #8a8f8d;
`;

export default function DocTile({ hits, slug, title, custom_description }) {
  return (
    <Tile>
      <Title>
        <Link href={`/docs/${slug}`}>{title}</Link>
      </Title>
      <Desc>{custom_description}</Desc>
    </Tile>
  );
}
