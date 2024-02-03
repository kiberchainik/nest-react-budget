import { FC } from 'react'
import bgCover from '../assets/tirelire.jpg'

const Home:FC = () => {
  return (
    <div className='fixed h-full bg-cover bg-no-repeat w-full left-0 right-0 top-0 bottom-0 z-0 bg-center' style={{backgroundImage:`url('${bgCover}')`}}>
      <div className='fixed h-full w-full left-0 right-0 top-0 bottom-0 bg-slate-950 bg-opacity-70 flex items-center justify-center'>
        <div className='bg-gradient-to-tl from-slate-700 to-slate-800 gap-y-7 flex flex-col rounded-3xl shadow-slate-800 shadow-2xl relative mx-auto p-5 w-1/2 text-justify text-white/75'>
          <h1 className='text-slate-950 text-2xl text-center font-semibold'>Учет финансового положения</h1>
          <p className='text-center text-lg'>Облегченный сервис за учетом финансокого положения в семье.</p>
          <p className='text-slate-950 italic'>Контролируйте и ведите учет доходов, расходов, займов. Описывайте желания и планы. И вы всегда сможете свормировать свой бюджет в угоду своей финансовой независимости!</p>
        </div>
      </div>
    </div>
  )
}

export default Home