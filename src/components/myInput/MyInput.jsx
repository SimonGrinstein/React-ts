import './myInput.css'

function MyInput({ name, type, placeholder="", label="", isRequired=false }) {

  return (
    <div className="hw3-div">
      <label className="hw3-label" for={name}>{label}: </label>
      <input className="hw3-input" type={type} name={name} placeholder={placeholder} required={isRequired} />
    </div>
  ) ;
}

export default MyInput;
