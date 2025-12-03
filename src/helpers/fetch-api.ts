import { getStrapiURL } from "@/helpers/api-helper";
import qs from "qs";

export const fetchApi = async (
  path: string,
  urlParamsObject = {},
  options = {}
) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
    });

    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""} `
    )}`;

    const res = await fetch(requestUrl, mergedOptions);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch API");
  }
};
