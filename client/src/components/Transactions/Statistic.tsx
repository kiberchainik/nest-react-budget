import { formatToEuro } from '../../helpers/currency.helper'
import styles from './transaction.module.scss'

const Statistic = ({totalIncome, totalExpense}:{totalIncome:number, totalExpense:number}) => {
  return (
    <div className={styles.transactionStatistic}>
        <div className='text-md'>
            <p className={styles.numTitle}>Общий доход:</p>
            <p className={styles.numIncome}>{formatToEuro.format(totalIncome)}</p>
        </div>
        <div className='text-md'>
            <p className={styles.numTitle}>Общий расход:</p>
            <p className={styles.numExpense}>{formatToEuro.format(totalExpense)}</p>
        </div>
    </div>
  )
}

export default Statistic