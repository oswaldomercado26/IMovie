import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";
//crear controlador de añadir a favorito
const addFavorite = async (req, res) => {
  try {
    //buscammos si existe la pelicula si es asi la añadimos a nuestro perfil
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isFavorite) return responseHandler.ok(res, isFavorite);

    const favorite = new favoriteModel({
      ...req.body,
      user: req.user.id
    });
//sincronizamos y guardamos el cambio
    await favorite.save();

    responseHandler.created(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};
//eliminar favorito
const removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;
//buscammos si existe la pelicula si es asi la añadimos a nuestro perfil
    const favorite = await favoriteModel.findOne({
      user: req.user.id,
      _id: favoriteId
    });
//evaluamos para mandar error
    if (!favorite) return responseHandler.notfound(res);
//removemos de nuestro perfil
    await favorite.remove();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};
//actualizamos nuestro perfil
const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };