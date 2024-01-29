import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function Menu({ data }) {
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
}

export default Menu;

export async function getStaticProps(context) {
  const res = await fetch("https://api-botofood-dusky.vercel.app/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10,
  };
}
