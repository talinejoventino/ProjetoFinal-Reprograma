import '../Styles/Components/mainrecipe.css'
import receitas from '../Services/Data'
import list from '../Services/List'
import {useState, useEffect} from 'react'
import Modal from '../Components/Modal'
import '../Styles/Modal/modal.css'


const MainRecipe = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [informations, setInformations] = useState(null)
    const [selectValue, setSelectValue] = useState('Busque por sintoma'); 
    const [data, setData] = useState([receitas])
       
         
    useEffect(()=>{
        if (selectValue === 'Busque por sintoma'){
            return setData(receitas)
        }
        setData(
            receitas.filter(item =>{
                    return item.title.includes(selectValue)
            })
        )
        console.log(selectValue)

    },[selectValue])


    let m = document.querySelector("body");
    let c = m.style
    
    return(
        <div className='main-recipe'>
        <div className='Container_recipe'>
            <h2>Remédios Naturais</h2>
        <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        {list.map((item) => (
            <option  key={item.id}>
              {item.name}
            </option>
        ))}        
        </select>
        </div>


         <div id= "container">                
                {data.map(item=>{
                    return  <button onClick={() => {setIsModalVisible(true)
                    setInformations(item)}} 
                            className='container_button' key={item.id}>
                        <div className="card" >
                        <h3>{item.title}</h3>
                        <img src={item.imagem} alt='filme'/>
                        <div className='card_button'>
                            <p>Ver receita</p>
                        </div>
                        </div>
                        </button>
                })} 
                {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                <h2>Receitas</h2>
                <h3>{informations.title1}</h3>
                <p>{informations.receita1}</p>
                <h3>{informations.title2}</h3>
                <p>{informations.receita2}</p>
                <h3>{informations.title3}</h3>
                <p>{informations.receita3}</p>
                <h3>{informations.title4}</h3>
                <p>{informations.receita4}</p>
                <a href={informations.link}>{informations.link}</a>
                <a href={informations.link2}>{informations.link2}</a>
                <p className='alert'>{informations.alerta}</p>
                </Modal>
                ) : null}
                
                {isModalVisible ? c.overflow = "hidden" : c.overflow= 'auto'}
        </div>
        </div>
    )
}
export default MainRecipe;