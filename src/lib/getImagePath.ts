export const getImagePath = (imagePath: string, fullSize?: boolean) => {
    try {
        return `${process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL}/${fullSize ? "original" : "w500"}/${imagePath}`;
    } catch (error) {
        return "Couldn't load image. Error: " + error;
    }
}