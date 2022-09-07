export const getImagen = async () => {
  try {
    const apiKey = 'YoNFQ4xX2d7nVKS4dfNCFCe3hKfJpy85';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    // console.error(error);
    return 'No se encontro la imagen'
  }
};

getImagen();
