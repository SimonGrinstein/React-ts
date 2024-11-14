import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import FetchDog from './components/fetchDog/FetchDog';
import HeroGallery from './homeworks/homework05/HeroGallery';
import HomePage from './components/homePage/HomePage';
import Lesson01 from './lessons/lesson01/Lesson01';
import Lesson02 from './lessons/lesson02/Lesson02';
import Lesson03 from './lessons/lesson03/Lesson03';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson05 from './lessons/lesson05/Lesson05';
import Lesson06 from './lessons/lesson06/Lesson06';
import Lesson07 from './lessons/lesson07/Lesson07';
import Lesson08 from './lessons/lesson08/Lesson08';
import Lesson09 from './lessons/lesson09/Lesson09';
import Lesson10 from './lessons/lesson10/Lesson10';
import Lesson11 from './lessons/lesson11/Lesson11';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="fetch-dog" element={<FetchDog />} />
        <Route path="hero-gallery" element={<HeroGallery />} />
        <Route path="lesson01" element={<Lesson01 />} />
        <Route path="lesson02" element={<Lesson02 />} />
        <Route path="lesson03" element={<Lesson03 />} />
        <Route path="lesson04" element={<Lesson04 />} />
        <Route path="lesson05" element={<Lesson05 />} />
        <Route path="lesson06" element={<Lesson06 />} />
        <Route path="lesson07" element={<Lesson07 />} />
        <Route path="lesson08" element={<Lesson08 />} />
        <Route path="lesson09" element={<Lesson09 />} />
        <Route path="lesson10" element={<Lesson10 />} />
        <Route path="lesson11" element={<Lesson11 />} />

      </Route>
    </Routes>
  </HashRouter>
);
