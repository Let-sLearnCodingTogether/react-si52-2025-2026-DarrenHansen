import axios from "axios";

const ApiClient = axios.create({
    baseURL : "http://localhost:3000/api",
        headers : {
            "Accept" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjkyNmI1YTNhMmY5ZmFiYWVmNTE0MDE0IiwidXNlcm5hbWUiOiJEYXJyZW4iLCJpYXQiOjE3NjQ3NjU3NjUsImV4cCI6MTc2NDc2NjY2NX0.4Gwbe9uGYxJyVXaixOwFgRaZIHPFGRIiGWoe-K8NxuI"
        }
})

export default ApiClient