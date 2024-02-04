import { FC } from 'react'
import bgCover from '../assets/tirelire.jpg'

const Home:FC = () => {
  return (
    <div className='HomePage' style={{backgroundImage:`url('${bgCover}')`}}>
      <div className='bgCover'>
        <div className='HomePageContent'>
          <h1 className='HomePageTitle'>Учет финансового положения</h1>
          <p className='text-center text-lg'>Облегченный сервис за учетом финансокого положения в семье.</p>
          <p className='text-slate-950 italic'>Контролируйте и ведите учет доходов, расходов, займов. Описывайте желания и планы. И вы всегда сможете свормировать свой бюджет в угоду своей финансовой независимости!</p>
        </div>
      </div>
    </div>
  )
}

export default Home