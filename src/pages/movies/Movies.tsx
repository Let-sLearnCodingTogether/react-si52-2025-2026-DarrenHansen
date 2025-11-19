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

    return <div className ="d-flex justify-content-between-mb-3">
        <h2>Movie Page</h2>
        <NavLink to="/add-movie" className="btn btn-primary">Add Movies</NavLink>
    </div>
}
export default Movies

//