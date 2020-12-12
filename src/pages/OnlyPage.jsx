// import Nav from '../Components/Nav'
import Header from '../Components/Header'
import MainRecipe from '../Components/MainRecipe' 
import Author from '../Components/Author'
import Footer from '../Components/Footer'
import Routes from '../Router/router'


function OnlyPage (){
    return(
        <>
        <Header/>
        <Routes/>
        <MainRecipe/>
        <Author/>
        <Footer/>
        </>
    )
}

export default OnlyPage;