import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
const RootLayout = () => {
  return (
    <div>
      <h1>Root Layout</h1>
      <Link to="/page-a">  Page A </Link><br/ >
       <Link to="/page-b">Page B</Link>
      <Outlet />
    </div>
  );
};
const PageA = () => {
  return <div>Page A</div>;
};

const PageB = () => {
  return <div>Page B</div>;
};
const router = createBrowserRouter([
  {
      path: "/",
      element: <RootLayout />,
      children: [
          {
              path: "page-a",
              element: <PageA />,
          },
          {
              path: "page-b",
              element: <PageB />,
          }, 
      ]
  }

])
export default () => {
 
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
};
