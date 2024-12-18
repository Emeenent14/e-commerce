import { Product } from "@utils/storeTypes";

export type ProductItemProps = Pick<
  Product,
  "title" | "price" | "image" | "id"
>;
