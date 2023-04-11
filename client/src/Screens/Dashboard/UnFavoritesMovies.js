import React, { useContext, useEffect } from "react";
import Table from "../../Components/Table";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUnFavoriteMoviesAction,
  getUnFavoriteMoviesAction,
} from "../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../Components/Notfications/Loader";
import { Empty } from "../../Components/Notfications/Empty";
import { SidebarContext } from "../../Context/DrawerContext";
import { DownloadVideo } from "../../Context/Functionalities";
import FileSaver from "file-saver";

function BadFavoritesMovies() {
  const dispatch = useDispatch();
  const { progress, setprogress } = useContext(SidebarContext);
  const { isLoading, isError, UnlikedMovies } = useSelector(
    (state) => state.userGetUnFavoriteMovies
  );
  // delete
  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.userDeleteUnFavoriteMovies);

  // delete movies handler
  const deleteMoviesHandler = () => {
    window.confirm("Are you sure you want to delete all movies?") &&
      dispatch(deleteUnFavoriteMoviesAction());
  };

  // download movie Video
  const DownloadMovieVideo = async (videoUrl, name) => {
    await DownloadVideo(videoUrl, setprogress).then((data) => {
      setprogress(0);
      FileSaver.saveAs(data, name);
    });
  };

  // useEffect
  useEffect(() => {
    dispatch(getUnFavoriteMoviesAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError
          ? "GET_UnFAVORITE_MOVIES_RESET"
          : "DELETE_UnFAVORITE_MOVIES_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">No Favorites Movies</h2>
          {UnlikedMovies?.length > 0 && (
            <button
              disabled={deleteLoading}
              onClick={deleteMoviesHandler}
              className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded"
            >
              {deleteLoading ? "Deleting..." : "Delete All"}
            </button>
          )}
        </div>
        {isLoading ? (
          <Loader />
        ) : UnlikedMovies.length > 0 ? (
          <Table
            data={UnlikedMovies}
            admin={false}
            downloadVideo={DownloadMovieVideo}
            progress={progress}
          />
        ) : (
          <Empty message="You have no favorites movies" />
        )}
      </div>
    </SideBar>
  );
}

export default BadFavoritesMovies;
