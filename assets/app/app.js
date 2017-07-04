import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Componente1 from './componente1';
import Componente2 from './componente2';
import Chat from './chat';

import Pagina1 from './paginas/pagina1';
import Pagina2 from './paginas/pagina2';
import Pagina3 from './paginas/pagina3';


class Layout extends React.Component {

	constructor(props){
		super(props);
	}
    
    render() {
        return(
        	<div>
        		<h2>Componente principal (app.js)</h2>
				<div>

					<div className="btn-group btn-group-justified" role="group">

						<div className="btn-group" role="group">
							<Link to="/spa">
								<button type="button" className="btn btn-default">Pagina 1</button>
							</Link>
						</div>
						<div className="btn-group" role="group">
							<Link to="/spa/pagina2">
								<button type="button" className="btn btn-default">Pagina 2</button>
							</Link>
						</div>
						<div className="btn-group" role="group">
							<Link to="/spa/pagina3/123456">
								<button type="button" className="btn btn-default">Pagina 3</button>
							</Link>
						</div>
					</div>


					<hr />

					<div className="row">

						<div className="col-md-6">

							<Switch>
								<Route exact path="/spa" component={Pagina1} />
								<Route path="/spa/pagina2" render={() => (<Pagina2 a={4} b={6}/>)} />
								<Route path="/spa/pagina3/:parameter" component={Pagina3} />
							</Switch>
						</div>

						<div className="col-md-6">
							<Componente1/>
			            	<Componente2 var1="valor var 1 (dado por mi)"/>
			            </div>
	            	</div>

				</div>

				<hr />

				<Chat/>    	

            </div>            
        );
    }    
}




const app = document.getElementById("app");

ReactDOM.render(<BrowserRouter><Layout/></BrowserRouter>, app);
