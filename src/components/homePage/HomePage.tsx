import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./homePage.module.css"

export default function HomePage() {
  return (
    <>
    <div className={styles.gridLessonContainer}>
        {/* <h2 className="lesson-container">HomePage</h2> */}
        <Link to='lesson01'><div>Lesson 01</div></Link>
        <Link to='lesson02'><div>Lesson 02</div></Link>
        <Link to='lesson03'><div>Lesson 03</div></Link>
        <Link to='lesson04'><div>Lesson 04</div></Link>
        <Link to='lesson05'><div>Lesson 05</div></Link>
        <Link to='lesson06'><div>Lesson 06</div></Link>
        <Link to='lesson07'><div>Lesson 07</div></Link>
        <Link to='lesson08'><div>Lesson 08</div></Link>
        <Link to='lesson09'><div>Lesson 09</div></Link>
        <Link to='lesson10'><div>Lesson 10</div></Link>
        <Link to='lesson11'><div>Lesson 11</div></Link>
        <Link to='lesson12'><div>Lesson 12</div></Link>
        <Link to='lesson13'><div>Lesson 13</div></Link>
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
