import { Routes, Route } from 'react-router-dom';
import { Articles } from '../../components/Top/Header/Articles/Articles';
import { Videos } from '../../components/Top/Header/Videos/Videos';
import { Locations } from '../../components/Top/Header/Locations/Location';
import { HomePage } from '../../components/Top/HomePage/HomePage';

const RoutesContent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/videos' element={<Videos />} />
    </Routes>
  )
}

export {RoutesContent}