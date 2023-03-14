import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Content = lazy(() => import('../content/index'))
const DetailProduct = lazy(() => import('./../view/detalhar/index'))



export default function Rotas() {
  return (

    <Router>

      <Routes>

        <Route path="/"
          element={
            <Suspense fallback='Carregando...'>
              <Content />
            </Suspense>
          } />

        <Route path="/detalhar"
          element={
            <Suspense fallback='Carregando...'>
              <DetailProduct />
            </Suspense>
          } />


      </Routes>

    </Router >

  )
}
