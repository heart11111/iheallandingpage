const INGREDIENT_IMAGE_VERSION = "20260901-nvp-strain-photos";

function withIngredientImageVersion(image: string) {
  return image.startsWith("/images/ingredients/") ? `${image}?v=${INGREDIENT_IMAGE_VERSION}` : image;
}

export function getIngredientDisplayImage(image: string) {
  return withIngredientImageVersion(image);
}

export function getIngredientCardImage(image: string) {
  return withIngredientImageVersion(image);
}
