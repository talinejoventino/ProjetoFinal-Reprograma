import '../Styles/Components/about.css'
import Sidebar from './Sidebar'
import {Link} from  'react-router-dom'

const About = () => {

    return(
        <div className='about' >
            <Sidebar/>
            <h2>Sobre o NaturalMed</h2>
            <article className='article'>
                <p>
                Está procurando uma receitinha natural para aliviar aquela dor que está te incomodando há dias, e não consegue achar uma que se encaixe para a sua situação? Aqui no NaturalMed selecionamos e reunimos as melhores receitas de chás e ervas naturais para cada sintoma específico. De forma que não tenha a necessidade de procurar vários sites e vídeos que estão espalhados pela internet, e muitas vezes não passam credibilidade. A importância se deve ao fato de ser um método que não traz nenhum malefício para a sua saúde, e contribui para evitar o uso excessivo de medicamentos industriais e o automedicamento, além de ser uma alternativa para quem não tem acessibilidade aos médicos e remédios.
                </p>
                <br/>
                <p className='link'> 
                Sabia que as receitas e os remédios expostos na internet que afirmam ser de fontes naturais nem sempre são eficazes?  Veja mais dicas e sites que tratam sobre o tema:
                </p>
            </article>
            <div >
                    <Link  to='/pagelinks'> 
                    <button className='about_button'> 
                    Veja mais
                    </button>
                    </Link>
                
                
            </div>
        
        </div>
    )
}

export default About;