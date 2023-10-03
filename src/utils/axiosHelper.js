import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=12585e41&t=";

// const fetchMovie

export const fetchMovie = async (str) => {
  try {
    const response = await axios.get(apiUrl + str);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
