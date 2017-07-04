import React from 'react';
import PropTypes from 'prop-types';

export default class Pagina2 extends React.Component {
	render() {
		return (
		<div>
			<h1>Soy la pagina 2</h1>
			<p>Esta pagina tiene datos extra. Dos numeros {this.props.a} y {this.props.b}</p>
		</div>
		)
	}
}

Pagina2.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired
}