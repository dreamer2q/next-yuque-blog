import { getDocBySlug } from "../../lib/api";

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const res = await getDocBySlug(slug);

  return {
    props: {
      doc: res.data,
    },
  };
}

export default function DocPage({ doc: { data: doc } }) {
  console.log(doc);

  const { content } = doc;

  return (
    <div>
      <div>Document Page</div>

      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
