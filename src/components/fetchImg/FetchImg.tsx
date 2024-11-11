import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";


interface IImgData {
  image: string;
  link: string;
}

export default function FetchImg(): JSX.Element {

  const [randomImg, setImg] = useState<string>('');

  // функция обновляющая state
  const fetchImg = (): void => {
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then((data: IImgData): void => {
        setImg(data.image);
      });
  };

  // * вызов внутри useEffect случится только при начале жизненного цикла (один раз за цикл)
  useEffect(() => {
    fetchImg();
  }, []);


  return (
    <div className="lesson-container">
      {randomImg && (
        <>
          <h3>Fetch IMG</h3>
          <img height={200} src={randomImg} alt="" />
          <MyButton func={fetchImg} text={'update IMG'} />
        </>
      )}
    </div>
  );
}

