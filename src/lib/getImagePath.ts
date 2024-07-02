export const getImagePath = (imagePath: string, fullSize?: boolean) => {
    try {
        return `${process.env.TMDB_BASE_IMAGE_URL}/${fullSize ? "original" : "w500"}/${imagePath}`;
    } catch (error) {
        return "Couldn't load image. Error: " + error;
    }
}