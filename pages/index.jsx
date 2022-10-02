import DocTile from "../components/DocTile";
import { getDocList } from "../lib/api";

export async function getServerSideProps({ query }) {
  const { limit, offset } = query;
  const res = await getDocList({ limit, offset });

  return {
    props: {
      docs: res.data,
    },
  };
}

function DocList({ docs }) {
  return (
    <div>
      {docs.map((v) => (
        <DocTile key={v} {...v} />
      ))}
    </div>
  );
}

export default function Index({ docs: { data: docs } }) {
  console.log(docs);

  return (
    <>
      <div>Hello, world</div>

      <DocList docs={docs} />
    </>
  );
}
