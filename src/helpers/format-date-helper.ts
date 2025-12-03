export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  // Intl.DateTimeFormatOptions is a javaScript interface that allows to format dates
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
};
