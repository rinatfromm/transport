import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import ErrorPage from '../src/pages/ErrorPage'
import Impressum from '../src/pages/Impressum'
import ScrollToTop from './components/ScrollToTop'
import MainPage from '../src/pages/MainPage'
import './App.css'




function App() {


  return (
    <div className='App'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='impressum' element={<Impressum />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
