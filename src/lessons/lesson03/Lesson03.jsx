import MyButton from "../../components/myButton/MyButton";

function Lesson03() {
    const handlClick = () => {
        console.log('Click!')
    }
    const handlSubmit = () => {
        console.log('Submit!')
    }
    const handlReset = () => {
        console.log('Reset!')
    }


    return (
        <div className="lesson-container">
            <h2>Lesson 03</h2>
            <p>React props</p>
            <div>
                <MyButton text={'Нажми меня'} func={handlClick} isDanger={true} />
                <MyButton myType={'submit'} text={'Submit'} func={handlSubmit} isDanger={false} />
                <MyButton text={'Reset'} func={handlReset}  isDanger={false} />
                <MyButton />
            </div>
        </div>
    )

}

export default Lesson03;

