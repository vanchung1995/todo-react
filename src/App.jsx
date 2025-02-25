
import './components/todo/todo.css';

import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
