import * as Yup from "yup";

export const formValue = {
  model: "",
  size: "",
  brand: "",

  description: "",
  price: "",
  available: "",
  shipping: false,
  images: [],
};

export const getValuesToEdit = (product) => {
  return {
    model: product.model,
    size: product.size,
    brand: product.brand._id,

    description: product.description,
    price: product.price,
    available: product.available,
    shipping: product.shipping,
    images: product.images,
  };
};

export const validate = () =>
  Yup.object({
    model: Yup.string().required("Sorry, model is required"),
    size: Yup.string().oneOf(["S", "L", "M", "XL"], "Only S L M XL is allowed"),
    brand: Yup.string().required("Sorry, brand is required"),

    description: Yup.string().required("Sorry, description is required"),
    price: Yup.number()
      .required("Must Be a Price")
      .min(1, "Sorry the min is 1")
      .max(100000000, "sorry its 10000000 max"),
    available: Yup.number().required("Do you have stock"),
    shipping: Yup.boolean().required("Do we offered shipping"),
  });
