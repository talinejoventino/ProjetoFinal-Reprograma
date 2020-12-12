
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";

import About from "../Components/About";
import PageLinks from "../Components/PageLinks";

function Routes (){
    return(
        <BrowserRouter>
                <Switch>
                    <Route path ='/' exact component={About}/>
                    <Route path ='/pagelinks' component={PageLinks}/>
                </Switch>
        </BrowserRouter>
    )
}

export default Routes