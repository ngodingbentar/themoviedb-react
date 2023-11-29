import { useQuery } from 'react-query'
import { getAllMoviePopular } from '../api/movie'

export const useGetMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const res = await getAllMoviePopular()
      const result = res.data.results
      return result
    },
    // onSuccess(data) {
    //   console.log(data)
    // },
    // onError(error) {
    //   console.log(error)
    // }
  })
}