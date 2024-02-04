import { FC } from 'react'
import { Form } from 'react-router-dom'
import styles from './modal.module.scss'

interface IModal {
    type: 'post' | 'patch'
    id?:number
    setIsOpen: (visible:boolean) => void
}

const Modal:FC<IModal> = ({type, id, setIsOpen}) => {
  return (
    <div className={styles.modal}>
        <Form method={type} onSubmit={() => setIsOpen(false)} action='/categories' className={styles.modalForm}>
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