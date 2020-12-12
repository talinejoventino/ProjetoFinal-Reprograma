import '../Styles/Components/footer.css'
import logo from '../images/header/logo.png'

function Footer(){
    return(
        <div className='footer'>
            <div className="footer_principal">
            <ul className="rodape_navegacao">
                <p>
                    Tem alguma dica ou algo que precisa ser melhorado no site?
                    Envie um email para: taline_peres29@hotmail.com
                </p>
            </ul>
            <div className="logo_footer">
                <img src={logo} alt="logo naturalmed"/>    
            </div>

            </div>
            <div className="div_footer">
            <p>Desenvolvido em React 2020 </p>
            </div>
        </div>
    )

}

export default Footer;
