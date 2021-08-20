import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import  {withDrawMoney,DepositMoney}  from '../redux/moneyRedux/actions/action'


function Money() {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    return (
        <div>
           <h1>Deposit Money = {counter.depositMoney} </h1>
           <h1>Withdraw Money = {counter.withDrawMoney} </h1>
           <button onClick={()=>dispatch(withDrawMoney())}>Withdrawl</button> 
           <button onClick={()=>dispatch(DepositMoney())}>Deposit</button> 
       </div>
    )
}

export default Money
