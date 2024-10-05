import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00.jsx';
import Ex01 from './views/Ex01.jsx';
import Ex02 from './views/Ex02.jsx';
import Ex03 from './views/Ex03.jsx';
import Ex04 from './views/Ex04.jsx';
import Ex05 from './views/Ex05.jsx';
import Ex06 from './views/Ex06.jsx';
import Ex07 from './views/Ex07.jsx';
import Ex08 from './views/Ex08.jsx';
import Ex09 from './views/Ex09.jsx';
import Ex10 from './views/Ex10.jsx';
import Ex11 from './views/Ex11.jsx';
import Ex12 from './views/Ex12.jsx';
import Ex13 from './views/Ex13.jsx';
import Ex14 from './views/Ex14.jsx';
import Ex15 from './views/Ex15.jsx';
import Ex16 from './views/Ex16.jsx';
import Ex17 from './views/Ex17.jsx';
import Ex18 from './views/Ex18.jsx';
import Ex19 from './views/Ex19.jsx';
import Test from './views/Test01.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
          <Route path='/ex02' element={<Ex02 />} />
          <Route path='/ex03' element={<Ex03 />} />
          <Route path='/ex04' element={<Ex04 />} />
          <Route path='/ex05' element={<Ex05 />} />
          <Route path='/ex06' element={<Ex06 />} />
          <Route path='/ex07' element={<Ex07 />} />
          <Route path='/ex08' element={<Ex08 />} />
          <Route path='/ex09' element={<Ex09 />} />
          <Route path='/ex10' element={<Ex10 />} />
          <Route path='/ex11' element={<Ex11 />} />
          <Route path='/ex12' element={<Ex12 />} />
          <Route path='/ex13' element={<Ex13 />} />
          <Route path='/ex14' element={<Ex14 />} />
          <Route path='/ex15' element={<Ex15 />} />
          <Route path='/ex16' element={<Ex16 />} />
          <Route path='/ex17' element={<Ex17 />} />
          <Route path='/ex18' element={<Ex18 />} />
          <Route path='/ex19' element={<Ex19 />} />
          <Route path='/test' element={<Test />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
