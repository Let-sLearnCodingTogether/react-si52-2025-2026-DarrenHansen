import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        lazy: async () => {
          const component = await import("../pages/movies/auth/signup/SignUp.tsx");
          return { Component: component.default };
        }
      },
      {
        path: "signIn",
        lazy: async () => {
          const component = await import("../pages/movies/auth/signin/SignIn.tsx");
          return { Component: component.default };
        }
      }
    ]
  },
  {
    path: "/movies",
    children: [
      {
        index: true,
        lazy: async () => {
          const component = await import("../pages/movies/Movies.tsx");
          return { Component: component.default };
        }
      },
      {
        path: "add-movie",
        lazy: async () => {
          const component = await import("../pages/movies/AddMovie.tsx");
          return { Component: component.default };
        }
      }
    ]
  }
]);

export default router;
