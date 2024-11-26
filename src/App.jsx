import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import RootLayout from './Layout/RootLayout';

import Home from './Page/Home';
import Shop from './Page/Shop';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
    </Route>
  )
);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App