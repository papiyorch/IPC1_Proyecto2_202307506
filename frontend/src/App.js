import './App.css';
import Login from './componentes/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './componentes/registro';
import Administrador from './componentes/admin';
import CreatePosts from './componentes/createpost';
import PostList from './componentes/posts';
import Reportes from './componentes/reportes';
import Home  from './componentes/Home';
import Root from './routes/root';
import Contact from './componentes/Contact';
import About from './componentes/About';
import Actualizar from './componentes/actualizar';

function App() {
  return (
    
        <Router>
          <Routes>
            <Route path="/" element={<Root />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/create" element={<CreatePosts />} />
            <Route path="/list" element={<PostList />} />
            <Route path="/reporte" element={<Reportes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/actualizar" element={<Actualizar />} />
           </Route>
          </Routes>
          
        </Router>
    
  );
}

export default App;
