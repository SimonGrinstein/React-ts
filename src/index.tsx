import ReactDOM from 'react-dom/client';
import './index.css';
//  import Homework04 from './homeworks/homework04/Homework04';
//  import Homework05 from './homeworks/homework05/Homework05';
// import Lesson06 from './lessons/lesson06/Lesson06';
// import Homework06 from './homeworks/homework06/Homework';
import Lesson07 from './lessons/lesson07/Lesson07';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <Homework04 /> */}
    {/* <Homework05 /> */}
    {/* '<Lesson06 />' */}
    {/* <Homework06 /> */}
    <Lesson07 />
  </>
);
