import './css/CostList.css'
import CostItem from './CostItem';

const CostList = (props) =>{
    

    if(props.costs.length ===0){
        return <h2 className='cost-list__fallback'>В Этом Году Расходов Нет</h2>
    }

    return<u className='cost-list'>
            {props.costs.map((cost) => (
            <CostItem key = {cost.id}
                      date = {cost.date}
                      description = {cost.description}
                      costAmount = {cost.amount}/>))}
    </u>
}

export default CostList;