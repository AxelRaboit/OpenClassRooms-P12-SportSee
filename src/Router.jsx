import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Error, Login } from './pages';

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

