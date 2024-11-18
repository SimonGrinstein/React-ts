import { useFormik } from "formik";
import { useState } from "react";
import styles from './formGender.module.css';
import * as Yup from "yup";

interface IFormData {
  name: string;
}

interface IGenderData {
  count: number,
  name: string,
  gender: string,
  probability: number;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('name is required')
    .min(2, 'name is more than 2')
    .max(20, 'less than 20 symbols!')
});



export default function GenderForm() {

  const [genderData, setGenderData] = useState<IGenderData>({
    count: 0,
    name: '',
    gender: '',
    probability: 0
  });

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGenderData(data);
  };


  const formik = useFormik({
    initialValues: {
      name: ""
    } as IFormData,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values: IFormData, { resetForm }) => {
      resetForm();
      fetchGender(values.name);
    }
  });



  return (
    <div className="lesson-container">
      <h5>Know your gender ✨</h5>
      
      <form className={styles.genderForm} onSubmit={formik.handleSubmit}>
        <input placeholder="type your name" onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
        <span className={styles.error}>{formik.errors.name}</span>
        <button type="submit">send request</button>
      </form>

      {genderData.name && (
        <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
      )}
      
    </div>
  );
}


