import PageCardImage from "@/components/PageCardImage";
import PageHeading from "@/components/PageHeading";
import PagePagination from "@/components/PagePagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";

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

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

const Blog = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  let pageNumber = page ? parseInt(page) : 1;

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  const { data, pagination } = await getData(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeading text="Latest Posts" />
      <PagePagination pagination={pagination} />
      <div className="grid gap-4">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
