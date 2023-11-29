import { useParams } from 'react-router-dom';
import { useGetMovieById } from '../hooks/useMovies';
import Layout from '../components/Layout';

const MovieDetailPage = () => {
  const params = useParams();
  const {data, isLoading} = useGetMovieById(params.id as string)

  return (
    <Layout>
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl ">{data.title}</h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{data.status}</p>
            </div>
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img src={`https://image.tmdb.org/t/p/w400${data.backdrop_path}`} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
              <img src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
              <img src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
            </div>
            <dl className="mt-4 text-xs font-medium items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dd className="">
                Budget: {data.budget}
              </dd>
              <dd className="">
                Revenue: {data.revenue}
              </dd>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg" onClick={() => window.open(data.homepage)}>homepage</button>
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              {data.overview}
            </p>
          </div>
        )}
      </main>
    </Layout>
  )
}

export default MovieDetailPage