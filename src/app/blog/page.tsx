import { fetchApi } from "@/helpers/fetch-api";

const getData = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  // "urlParamsObject" contains configuration query parameters for an API request to Strapi
  const urlParamsObject = {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);
  return { data, pagination: meta.pagination };
};

const Blog = async () => {
  const { data, pagination } = await getData();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Blog;
