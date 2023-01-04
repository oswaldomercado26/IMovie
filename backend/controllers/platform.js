//falta adaptar a plataformas
const cloudinary = require("../cloud");
const Platform = require("../models/platform");
const { isValidObjectId } = require("mongoose");
//crud platform
exports.uploadPlatform = async (req, res) => {
  const { file } = req;
  if (!file) return sendError(res, "platform file is missing!");

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: "image",
    }
  );
  res.status(201).json({ url, public_id });
};

exports.createPlatform = async (req, res) => {
  const { file, body } = req;

  const {
    title,
    status,
    poster,
  } = body;

  const newPlatform = new Platform({
    title,
    status,
    poster,
  });

  // uploading poster
  if (file) {
    const {
      secure_url: url,
      public_id,
      responsive_breakpoints,
    } = await cloudinary.uploader.upload(file.path, {
      transformation: {
        width: 1280,
        height: 720,
      },
      responsive_breakpoints: {
        create_derived: true,
        max_width: 640,
        max_images: 3,
      },
    });

    const finalPoster = { url, public_id, responsive: [] };

    const { breakpoints } = responsive_breakpoints[0];
    if (breakpoints.length) {
      for (let imgObj of breakpoints) {
        const { secure_url } = imgObj;
        finalPoster.responsive.push(secure_url);
      }
    }
    newPlatform.poster = finalPoster;
  }

  await newPlatform.save();

  res.status(201).json({
    platform: {
      id: newPlatform._id,
      title,
    },
  });
};

exports.updatePlatformWithoutPoster = async (req, res) => {
  const { platformId } = req.params;

  if (!isValidObjectId(platformId)) return sendError(res, "Invalid platform ID!");

  const platform = await platform.findById(platformId);
  if (!platform) return sendError(res, "platform Not Found!", 404);

  const {
    title,
    status,
    poster,
  } = req.body;

  platform.title = title;
  platform.status = status;
  platform.poster = poster;
  platform.releseDate = releseDate; // Sirve para ver cuando se creo
  
  await platform.save();

  res.json({ message: "Platform is updated", platform });
};

exports.updateplatform = async (req, res) => {
  const { platformId } = req.params;
  const { file } = req;

  if (!isValidObjectId(platformId)) return sendError(res, "Invalid platform ID!");

  // if (!req.file) return sendError(res, "platform poster is missing!");

  const platform = await platform.findById(platformId);
  if (!platform) return sendError(res, "platform Not Found!", 404);

  const {
    title,
    status,
    poster,
  } = req.body;

  platform.title = title;
  platform.status = status;
  platform.poster = poster;
  platform.releseDate = releseDate; // Sirve para ver cuando se creo

  // update poster
  if (file) {
    // removing poster from cloud if there is any.
    const posterID = platform.poster?.public_id;
    console.log(posterID);
    if (posterID) {
      const { result } = await cloudinary.uploader.destroy(posterID);
      if (result !== "ok") {
        return sendError(res, "Could not update poster at the moment!");
      }

      // uploading poster
      const {
        secure_url: url,
        public_id,
        responsive_breakpoints,
      } = await cloudinary.uploader.upload(req.file.path, {
        transformation: {
          width: 1280,
          height: 720,
        },
        responsive_breakpoints: {
          create_derived: true,
          max_width: 640,
          max_images: 3,
        },
      });

      const finalPoster = { url, public_id, responsive: [] };

      const { breakpoints } = responsive_breakpoints[0];
      if (breakpoints.length) {
        for (let imgObj of breakpoints) {
          const { secure_url } = imgObj;
          finalPoster.responsive.push(secure_url);
        }
      }

      platform.poster = finalPoster;
    }
  }

  await platform.save();

  res.json({
    message: "Platform is updated",
    platform: {
      id: platform._id,
      title: platform.title,
      poster: platform.poster?.url,
      status: platform.status,
    },
  });
};

exports.removePlatform = async (req, res) => {
  const { platformId } = req.params;

  if (!isValidObjectId(platformId)) return sendError(res, "Invalid platform ID!");

  const platform = await platform.findById(platformId);
  if (!platform) return sendError(res, "platform Not Found!", 404);

  // check if there is poster or not.
  // if yes then we need to remove that.

  const posterId = platform.poster?.public_id;
  if (posterId) {
    const { result } = await cloudinary.uploader.destroy(posterId);
    if (result !== "ok")
      return sendError(res, "Could not remove poster from cloud!");
  }

  res.json({
    platform: {
      id: platform._id,
      title: platform.title,
      poster: platform.poster?.url,
      releseDate: platform.releseDate,
      status: platform.status,
    },
  });
};

exports.searchPlatform = async (req, res) => {
  const { title } = req.query;

  if (!title.trim()) return sendError(res, "Invalid request!");

  const platform = await Platform.find({ title: { $regex: title, $options: "i" } });
  res.json({
    results: platform.map((m) => {
      return {
        id: m._id,
        title: m.title,
        poster: m.poster?.url,
        status: m.status,
      };
    }),
  });
};


  const {
    _id: id,
    title,
    status,
    releseDate,
    poster,
  } = platform;

  res.json({
    movie: {
      id,
      title,
      status,
      releseDate,
      poster: poster?.url,
    },
  });

//exports.getRelatedMovies = async (req, res) => {
//  const { movieId } = req.params;
//  if (!isValidObjectId(movieId)) return sendError(res, "Invalid movie id!");
//
//  const movie = await Movie.findById(movieId);
//
//  const movies = await Movie.aggregate(
//    relatedMovieAggregation(movie.tags, movie._id)
//  );
//
//  const mapMovies = async (m) => {
//    const reviews = await getAverageRatings(m._id);
//
//    return {
//      id: m._id,
//      title: m.title,
//      poster: m.poster,
//      responsivePosters: m.responsivePosters,
//      reviews: { ...reviews },
//    };
//  };
//  const relatedMovies = await Promise.all(movies.map(mapMovies));
//
//  res.json({ movies: relatedMovies });
//};

