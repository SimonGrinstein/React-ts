import ReactDOM from 'react-dom/client';
import './index.css';

import Lesson01 from './lessons/lesson01/Lesson01';
import Lesson02 from './lessons/lesson02/Lesson02';
import Lesson03 from './lessons/lesson03/Lesson03';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson05 from './lessons/lesson05/Lesson05';

import Lesson07 from './lessons/lesson07/Lesson07';
import Homework02 from './homeworks/homework02/Homework02';
import Homework03 from './homeworks/homework03/Homework03';
import Homework04 from './homeworks/homework04/Homework04';
import Homework05 from './homeworks/homework05/Homework05';
// import Homework06 from './homeworks/homework06/Homework';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Lesson01 />
    <Lesson02 />
    <Lesson03 />
    <Lesson04 />
    <Lesson05 />
    {/* '<Lesson06 />' */}
    {/* <Lesson07 /> */}
    <Homework02 />
    <Homework03 />
    <Homework04 />
    <Homework05 />
  </>
);
