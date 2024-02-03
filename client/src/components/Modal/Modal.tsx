import { FC } from 'react'
import { Form } from 'react-router-dom'

interface IModal {
    type: 'post' | 'patch'
    id?:number
    setIsOpen: (visible:boolean) => void
}

const Modal:FC<IModal> = ({type, id, setIsOpen}) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 flex justify-center items-center'>
        <Form method={type} onSubmit={() => setIsOpen(false)} action='/categories' className='grid w-96 gap-2 rounded-3xl bg-slate-800 p-5'>
            <label htmlFor="title">
                <small>Название категории</small>
                <input type="text" name="title" placeholder="Title ..." className='input w-full' />
                <input type="hidden" name="id" value={id} />
            </label>

            <div className="flex items-center gap-2">
                <button type="submit" className='btn btn-green'>
                    {type === 'patch'?'Сохранить' : 'Создать'}
                </button>
                <button className='btn btn-red' onClick={() => setIsOpen(false)}>Закрыть</button>
            </div>
        </Form>
    </div>
  )
}

export default Modal