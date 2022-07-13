import './css/CostForm.css'
import React, {useState} from 'react'

const CostForm = (props)=>{

     const [inputName, setInputName] = useState(''),
           [inputDate, setInputDate] = useState(''),
           [inputAmount, setInputAmount] = useState('');
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // });


    const nameChangeHandler =(event) =>{
         setInputName(event.target.value)
        // setUserInput((previousState)=>{
        //     return{...previousState,
        //     name: event.target.value}
        // })
    };
    const amountChangeHandler =(event) =>{
         setInputAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }
    const dateChangeHandler =(event) =>{
         setInputDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date (inputDate)
        }
        props.onSaveCostData(costData)
        setInputName(' ')
        setInputAmount('')
        setInputDate('')
    }

    // const toggleHandler =()=>{
    //     const togg = document.querySelectorAll('.option')
    //     togg.forEach(e => {
    //         e.classList.toggle('hide');
    //     });

    // }

    return <form onSubmit={submitHandler}>
        {/* <div className='new-cost__controls option'>
        <button className='togg' type='button' onClick={toggleHandler}> Добавить новый расход</button>
        </div> */}
        <div className='option'>
        <div className='new-cost__controls'>
            <div className="new-cost__control ">
                <label>Название</label>
                <input value={inputName} type="text" onChange={nameChangeHandler} />
            </div>
        </div>
        <div>
        <div className="new-cost__control">
                <label>Сумма</label>
                <input value={inputAmount} onChange={amountChangeHandler} type="numbet" min='0.01' step='0.01' />
            </div>
        </div>
        <div>
        <div className="new-cost__control">
                <label>Дата</label>
                <input value={inputDate} onChange={dateChangeHandler} type="date" min='2022-01-01' max='2023-01-01' />
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить Расход</button>
                <button  type='button'onClick={props.onCancel} > Отмена</button>                         
            </div>
        </div>
        </div>
    </form>

}

export default CostForm;