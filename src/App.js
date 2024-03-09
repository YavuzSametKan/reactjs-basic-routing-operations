import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {AuthRouter, DashboardRouter,} from './router/CustomRouter'
import DashboardLayout from "./layouts/Dashboard/index";
import AuthLayout from "./layouts/Auth/index";
import NotFound from "./layouts/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<DashboardLayout/>}>
          {
              DashboardRouter.map(
                  (routeProps, i) => <Route key={i} {...routeProps} />
              )
          }
          </Route>

          <Route path='/' element={<AuthLayout/>}>
              {
                  AuthRouter.map(
                      (routeProps, i) => <Route key={i} {...routeProps} />
                  )
              }
          </Route>

          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
