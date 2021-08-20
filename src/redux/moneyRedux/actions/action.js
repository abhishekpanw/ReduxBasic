import * as type from './type'

export function withDrawMoney (){
        
        return  {
            type: type.WITHDRAW_MONEY
        }
}      

export function DepositMoney (){
    return {
        type: type.DEPOSIT_MONEY
    }
    
}