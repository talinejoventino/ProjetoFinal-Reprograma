import '../Styles/Modal/modal.css'

const Modal = ({id='modal', onClose = () => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id){
            onClose()
        }
    }
    return (
        <div id={id} className='modal' onClick={handleOutsideClick}>
            <div id='' className='container'>
                <button className='close' onClick={onClose}>X</button>
                <div className='history'>{children}</div>
            </div>
        </div>
    )
}

export default Modal
