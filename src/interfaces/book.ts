import type { BlocksContent } from "@strapi/blocks-react-renderer";
/** Bloques de texto o contenido enriquecido (Rich Text de Strapi) */

export interface Book {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  price: string;
  stock: number;
  description: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageFile;
}

/** Archivo de imagen proveniente de Strapi */
export interface ImageFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/** Formatos generados por Cloudinary / Strapi */
export interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}

/** Estructura de cada formato de imagen */
export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

/** Datos adicionales proporcionados por el proveedor (Cloudinary) */
export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
