import { useCallback, useEffect, useState } from "react"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"

interface Movie {
    _id : string,
    judul : string,
    taunRilis : string,
    sutradara : string,
    createdAt : string,
    updatedAt : string
}


function Movies() {
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchMovies = useCallback(async () => {
        const response = await ApiClient.get("/movie")

        if(response.status == 200) {
            setMovies(response.data.data)
        }
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h2>Movie Page</h2>
                <NavLink to="/add-movie" className="btn btn-primary">Add Movies</NavLink>
            </div>

            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Tahun Rilis</th>
                            <th>Sutradara</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {movies.length > 0 && movies.map((movie, index) => (
                            <tr key={movie._id}>
                                <td>{index + 1}</td>
                                <td>{movie.judul}</td>
                                <td>{movie.taunRilis}</td>
                                <td>{movie.sutradara}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Movies