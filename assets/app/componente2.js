import React from 'react';
import PropTypes from 'prop-types';

export default class Componente2 extends React.Component {

	constructor(props){
		super(props);		
	}


	render() {
		return(
			<div>
				Soy el componente 2, y mis propiedades son:
				<ul>
					<li><b>Variable 1:</b> {this.props.var1}</li>
					<li><b>Variable 2:</b> {this.props.var2}</li>
				</ul>

			</div>
			);
	}
}

Componente2.propTypes = {
	var1: PropTypes.string.isRequired,
	var2: PropTypes.string.isRequired
}

Componente2.defaultProps = {
	var1: "valor por defecto de var 1",
	var2: "valor por defecto de var 2"
}

