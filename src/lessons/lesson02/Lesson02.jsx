import reactImg from '../../assets/react.jpg'
import MyButton from '../../components/myButton/MyButton'
import './lesson02.css'
// функция-компонент должна называться с большой буквы
// имя файла тоже называется с большой буквы и совпадает с именем функции
function Lesson02() {
  const element = <p>Element in variable</p>
  const text = "Text for JSX tag"
  const company = "Facebook"
  const user = {
    firstName: 'Brendan',
    lastname: 'Eich'
  }
  const isLoggedIn = false;

  function formatUser(name){
    return name.firstName + ' ' + name.lastname
  }

  return (
    <div className="lesson-container">
      <h1>Lesson 02</h1>
      <p>React JSX components</p>

      <img className='react-img' src={reactImg} alt="reactImg" />

      <ul>
        <li>Simple text</li>
        {element}
        <li>{text}</li>
        <li>React was created by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        <li>User {isLoggedIn ? 'is' : 'is NOT'} in the system</li>
      </ul>
      <MyButton/>
    </div>
  );
}

// не забываем сделать export для связи с другими компонентами
export default Lesson02;