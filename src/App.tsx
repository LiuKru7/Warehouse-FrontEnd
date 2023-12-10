import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar.tsx";
import RepairOrders from "./pages/RepairOrders.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import WareHousePage from "./pages/WareHousePage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import SinglePart from "./pages/SinglePart.tsx";
import './App.css';



function App() {
  return (
      <div
          className="bg-dark vh-100 container"
      >
          <div
              className="d-flex flex-column"
          >
              <Toolbar />
              <Routes>
                  <Route path="/repair" element={<RepairOrders />}/>
                  <Route path="/aboutUs" element={<AboutUsPage />}/>
                  <Route path="/warehouse" element={<WareHousePage/>}/>
                  <Route path="/orders" element={<OrdersPage/>}/>
                  <Route path="/SinglePart/:id" element={<SinglePart/>}/>
              </Routes>
          </div>
      </div>

  )
}

export default App
