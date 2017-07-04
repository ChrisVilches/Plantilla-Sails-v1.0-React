import React from 'react';

export default class Pagina3 extends React.Component {

	render() {
		return (
		<div>
			<h1>Soy la pagina 3</h1>
			<p>Tengo un parametro pasado por URL (esta en <code>&lt;Link to="/spa/pagina3/:parameter"&gt;</code>).</p>
			<p>El valor de este parametro esta en <code>this.props.match.params.nombre_parametro</code>.</p>
			<p>En este caso el valor es {this.props.match.params.parameter}.</p>
			
		</div>
		)
	}
}
