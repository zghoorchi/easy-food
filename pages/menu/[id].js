import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function Details({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading Page ....</h2>;
  }

  return (
    <div>
      <DetailsPage {...data} />
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://api-botofood-dusky.vercel.app/data");
  const json = await res.json();

  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api-botofood-dusky.vercel.app/data/${params.id}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
