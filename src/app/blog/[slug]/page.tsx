import PageHeading from "@/components/PageHeading";
import { fetchApi } from "@/helpers/fetch-api";
import { formatDate } from "@/helpers/format-date-helper";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const getData = async (slug = "") => {
  const path = `/posts`;
  const urlParamsObject = {
    populate: "image",
    filters: {
      slug: slug,
    },
  };

  const { data } = await fetchApi(path, urlParamsObject);
  return data[0];
};

interface Props {
  params: Promise<{ slug: string }>;
}

const Slug = async ({ params }: Props) => {
  const { slug } = await params;

  const post: Post = await getData(slug);

  if (!post) {
    notFound();
  }

  const { title, description, body, createdAt, image } = post;
  const { url, width, height } = image.formats.medium;

  return (
    <div className="space-y-4 mb-20">
      <PageHeading text={title} />
      <time className="text-gray-500 text-right block" dateTime={createdAt}>
        {formatDate(createdAt)}
      </time>
      <Image
        className="h-auto rounded-lg"
        src={url}
        alt={title}
        width={width}
        height={height}
        loading="eager"
      />
      <p className="mb-3 mt-8 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="prose">
        <BlocksRenderer content={body} />
      </div>
    </div>
  );
};

export default Slug;
