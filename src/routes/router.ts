import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movies/Movies.tsx")
                        return component.default
                    }
                }
            },
        ]
    }
]);

export default router;

