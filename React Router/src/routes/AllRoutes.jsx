import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  Home,
  Admin,
  ProductList,
  ProductDetail,
  Contact,
  ContactIn,
  ContactPk,
  ContactAll,
  ErrorPage,
} from "../pages/index";

export const AllRoutes = () => {
  let user = false;

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="pk" element={<ContactPk />} />
            <Route path="*" element={<ContactAll />} />
          </Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/admin" element={user ? <Admin /> : <ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
};
