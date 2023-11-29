import Axios from "../plugins/axiosReq"

async function getAllMoviePopular () {
  return await Axios.get('/movie/popular')
}

export { getAllMoviePopular }