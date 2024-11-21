import { Link } from 'react-router-dom'
import styles from "./homePage.module.css"

interface NumberLessons {
  number: number;
}

const NumberItem: React.FC<NumberLessons> = ({ number }) => {
  return <div key={number}>{number}</div>;
};

export default function HomePage() {
  return (
    <>
    <div className={styles.gridLessonContainer}>
      
        {Array.from({ length: 16 }, (_, index) => index + 1).map((lessonNumber) => (
        <Link to={`lesson${lessonNumber}`}><div>Lesson {lessonNumber}</div></Link>
      ))}
    

        {/* <Link to='lesson14'><div>Lesson 14</div></Link> */}
    </div>

    <div className={styles.gridHWContainer}>
        <Link to='homework02'><div>HW 02</div></Link>
        <Link to='homework03'><div>HW 03</div></Link>
        <Link to='homework04'><div>HW 04</div></Link>
        <Link to='homework05'><div>HW 05</div></Link>
        <Link to='homework06'><div>HW 06</div></Link>
        <Link to='homework08'><div>HW 08</div></Link>
        <Link to='homework12'><div>HW 12</div></Link>
        <Link to='homework13'><div>HW 13</div></Link>
    </div>



    </>
  )
}
