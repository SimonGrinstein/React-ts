import * as Yup from 'yup';
import MyButton from '../../components/myButton/MyButton';

export default function Lesson13() {
  return (
    <div className='lesson-container'>
        <h2>Lesson13</h2>
        <p>YUP validation library</p>
        <form action=''>
            <unput type = "text" />
            <unput type = "text" />
            <unput type = "text" />
            <MyButton myType='submit' text='send' />

        </form>


    </div>
  )
}
