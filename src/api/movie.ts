import Axios from "../plugins/axiosReq"

async function getAllMoviePopular () {
  return await Axios.get('/movie/popular')
}

async function getMovieById (id: string) {
  return await Axios.get(`/movie/${id}`)
}

export { getAllMoviePopular, getMovieById }