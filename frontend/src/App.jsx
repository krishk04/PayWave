import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Signup} from "./pages/Signup.jsx"
import {Signin} from "./pages/Signin.jsx"
import {Dashboard} from "./pages/Dashboard.jsx"
import { SendMoney } from "./pages/SendMoney.jsx";
import {TransferSuccessful} from "./pages/TransferSuccessful.jsx"
function App() {
  

  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
      <Route path="/success" element={<TransferSuccessful />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
