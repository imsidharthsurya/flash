import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "./components/Login";
const Browse = lazy(() => import("./components/Browse"));
// import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Browse />
        </Suspense>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
