import { getStrapiURL } from "@/helpers/api-helper";

const getData = async () => {
  const url = getStrapiURL("/api/posts");

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

const Blog = async () => {
  const { data } = await getData();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Blog;
