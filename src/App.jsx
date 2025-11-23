// Function Component
//import Login from "./componentes/props/Login.jsx"
//import Login from "./componentes/state/Login.jsx"
//import Login from "./componentes/CSS/Login.jsx"
//import Login from "./componentes/Tailwind/Login.jsx"
//import Login from "./componentes/antd/Login.jsx"
//import PessoaForm from "./componentes/cadastrapessoa/PessoaForm.jsx"
//import PessoaForm from "./componentes/cadastrapessoa/PessoaFormOO.jsx"


// necessário apenas a partir da utilização de rotas para outras telas
import { BrowserRouter as Router } from "react-router-dom";
//import AppRoutes from "./routes/AppRoutes.jsx";
//import AppRoutes from "./routes/AppRoutesV2.jsx";
import AppRoutes from "./routes/AppRoutesBack.jsx";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App

