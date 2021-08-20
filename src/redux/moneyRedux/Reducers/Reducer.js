import * as type from '../actions/type'

const initialState = {
    withDrawMoney : 1000,
    depositMoney : 20000,
}


const reducer = (state = initialState , action)=>{
    switch(action.type){
        case type.WITHDRAW_MONEY: 
        return{
            ...state,
            withDrawMoney : state.withDrawMoney - 100
        }
        case type.DEPOSIT_MONEY: 
        return{
            ...state,
            depositMoney : state.depositMoney  + 100
        }
        default : return state
    }

}

export default reducer;