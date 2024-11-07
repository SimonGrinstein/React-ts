import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

function LoginForm() {
  return (
    <form action="" method="get">
        <MyInput name={'name'} type={'text'} label={'Login'} placeholder={'Nickname'} isRequired={true}/>
        <MyInput name={'email'} type={'email'} label={'Email'} placeholder={'muster@gmail.com'} />
        <MyInput name={'password'} type={'password'} label={'Password'} placeholder={''} />
        <MyButton text={'Submit'} isDanger={false} myType={"submit"} />
    </form>
  );
}

export default LoginForm;
