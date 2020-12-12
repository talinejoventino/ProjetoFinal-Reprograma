import '../Styles/Components/author.css'
import imgProfile from '../images/profile/taline.jpg'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Author = () => {
    return (
        <div className='main' id='author'>
            <div className='profile'><img src={imgProfile} alt='Perfil Taline' /></div>
            <div className='text'>
                    <p>
                    Me chamo Taline Joventino, tenho 18 anos e vivo na Zona da Mata em Pernambuco. Completamente
                    apaixonada por matématica e tecnologia, por isso, estou cursando front-end no Reprograma e faço o 1º período de Ciencia da Computação. Na mesma proporção de paixão, sou bookstan raiz e sempre estou escrevendo minhas poesias por aí. Cresci tomando chás, sucos e remédios naturais como alternativa para o alívio de sintomas de doenças, assim, amo a forma que a natureza ajuda a contruibuir para uma vida mais saudável, sendo essa uma das maiores inspirações para criar o site.
                    </p>
                <div className='text_redes'>
                    <a href="https://github.com/talinejoventino" className="enter-app" target='_blanck'>
                    < AiFillGithub size={28} color=" #ffffff" />
                    </a>
                    <a href="https://www.instagram.com/talinejoventino/" className="enter-app" target='_blanck'>
                        < AiFillInstagram size={28} color=" #ffffff" />
                    </a>
                    <a href="https://br.linkedin.com/in/taline-joventino-aa18251b2" className="enter-app" target='_blanck'>
                        < AiFillLinkedin size={28} color=" #ffffff" />
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Author