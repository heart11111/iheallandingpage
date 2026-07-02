export function getIngredientCardImage(image: string) {
  return image.startsWith("/images/ingredients/")
    ? image.replace("/images/ingredients/", "/images/ingredients/thumbs/")
    : image;
}
