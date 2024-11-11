import './myInput.css'

interface IMyInputProps {
  name: string
  placeholder?: string
  label?: string
  type: "email" | "number" | "password" | "date" | "search" | "text"
  isRequired?: boolean
}

export default function MyInput({ name, type, placeholder="", label="", isRequired=false }:IMyInputProps) {

  return (
    <div className="hw3-div">
      <label className="hw3-label">{label}: </label>
      <input className="hw3-input" type={type} name={name} placeholder={placeholder} required={isRequired} />
    </div>
  ) ;
}

