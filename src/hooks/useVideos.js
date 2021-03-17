import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  //fetching a list of videos
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // get and update our video piece of state
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
