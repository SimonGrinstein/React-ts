// импорт хука useState()
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./feedback.css";

function Feedback() {
 
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  

  const likePlus = () => {
    setLike(prev => prev + 1);
  };

  const dislikePlus = () => {
    setDislike(prev => prev + 1);
  };

  const resetResults = () => {
    // setLike(prev => prev - like);
    // setDislike(prev => prev - dislike);
    setLike(0);
    setDislike(0);

  };


  return (
    <div className="lesson-container">
      <h2>HW 04</h2>
      <div className="counter">
        <span>{like}</span>
        <MyButton func={likePlus} text={"Like"} isDanger={false} />
      </div>
      <div className="counter">
        <span>{dislike}</span>
        <MyButton func={dislikePlus} text={"Dislike"} isDanger={false} />
      </div>
      <div className="counter">
        <MyButton func={resetResults} text={"Reset Results"}/>
      </div>
      
    </div>
  );
}

export default Feedback;
