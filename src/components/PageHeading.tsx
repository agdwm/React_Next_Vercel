interface PageHeadingProps {
  text: string;
}

const PageHeading = ({ text }: PageHeadingProps) => {
  return (
    <h1 className="text-5xl font-bold text-heading text-center">{text}</h1>
  );
};
export default PageHeading;
