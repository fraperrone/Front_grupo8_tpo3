// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BitacoraPage from "../../pages/BitacoraPage";
import JsonDataPage from "../../pages/JsonDataPage";
import ApiDataPage from "../../pages/ApiDataPage";
import CarlosPage from "../../pages/CarlosPage";
import FrancoPage from "../../pages/FrancoPage";
import GuillePage from "../../pages/GuillePage";
import PaulaPage from "../../pages/PaulaPage";
import { Layout } from "../Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/bitacora"
        element={
          <Layout>
            <BitacoraPage />
          </Layout>
        }
      />
      <Route
        path="/perfil/carlos"
        element={
          <Layout>
            <CarlosPage />
          </Layout>
        }
      />
      <Route
        path="/perfil/franco"
        element={
          <Layout>
            <FrancoPage />
          </Layout>
        }
      />
      <Route
        path="/perfil/paula"
        element={
          <Layout>
            <PaulaPage />
          </Layout>
        }
      />
      <Route
        path="/perfil/guillermo"
        element={
          <Layout>
            <GuillePage />
          </Layout>
        }
      />
      <Route
        path="/json-data"
        element={
          <Layout>
            <JsonDataPage />
          </Layout>
        }
      />
      <Route
        path="/api-data"
        element={
          <Layout>
            <ApiDataPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
