import Sidebar from './Sidebar'
import '../Styles/Components/pagelinks.css'

const PageLinks = () => {
    return(
        <div className='dicas'>
                <Sidebar/>
                <h2> Conheça mais sobre as receitas naturais</h2>
                <article className='dicas_article'>
                <p> Que tal ver mais sobre as plantas medicinais e suas propriedades? Esse livro gratuito reúne quase 400 espécies que vale a pena conhecer. Veja mais no link abaixo:
                </p>
                <a href="https://drive.google.com/file/d/0Bz_AcmCaAL9eTmxjVS1rNllSekE/view?pref=2&pli=1" target='_blanck'>Baixe aqui o Ebook</a>
                <br/>
                <a href='https://ciclovivo.com.br/vida-sustentavel/bem-estar/livro-gratuito-reune-detalhe-de-quase-400-especies-de-plantas-medicinais/' target='_blanck'>https://ciclovivo.com.br/vida-sustentavel/bem-estar/livro-gratuito-reune-detalhe-de-quase-400-especies-de-plantas-medicinais/</a>
                <br/>
                <br/>
                <p>
                É comum encontrar diversas soluções para perder peso, para cuidar da pele e até para substituir vacinas, curar cancêr e doenças. No entanto é importante alertar que não existe cura milagrosa, as receitas e chás naturais apenas aliviam sintomas leves e iniciais. Veja alguns vídeos e sites que vão ajudar a não cair em mentiras.
                </p>
                <a href="https://g1.globo.com/ciencia-e-saude/noticia/2019/03/05/o-perigo-dos-remedios-falsos-e-curas-milagrosas-que-inundam-a-internet.ghtml" target='_blanck'>https://g1.globo.com/ciencia-e-saude/noticia/2019/03/05/o-perigo-dos-remedios-falsos-e-curas-milagrosas-que-inundam-a-internet.ghtml</a>
                <br/>
                <a href="https://globoplay.globo.com/v/8335349/" target='_blanck'>https://globoplay.globo.com/v/8335349/</a>
                <br/>
                <a href="https://www.youtube.com/watch?v=yrVvrSjHE58&list=PL4zMVqvXQWYSOS6XAluNvWrKS_ZhQNOT9&index=169" target='_blanck'>https://www.youtube.com/watch?v=yrVvrSjHE58&list=PL4zMVqvXQWYSOS6XAluNvWrKS_ZhQNOT9&index=169</a>
                <br/>
                <br/>
                <p>
                    Sabe aquelas receitinhas 'naturais' para cabelo que encontramos pela internet? Na maioria das vezes os materiais além de não cumprir o prometido, acabam danificando o nosso cabelo e entramos em um ciclo vicioso de buscar a que se encaixe. O link abaixo reúne receitas comuns que não fazem efeito algúm no cabelo, vale a pena conferir:
                </p>
                <a href="https://www.allthingshair.com/pt-br/como-cuidar-dos-cabelos/como-ter-cabelos-saudaveis/15-piores-receitas-caseiras-que-voce-deve-passar-longe/" target='_blanck'>https://www.allthingshair.com/pt-br/como-cuidar-dos-cabelos/como-ter-cabelos-saudaveis/15-piores-receitas-caseiras-que-voce-deve-passar-longe/</a>
            </article>    
        </div>
    )
}

export default PageLinks;