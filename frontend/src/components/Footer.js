import { Container, Col, Row } from 'react-bootstrap'

import React from 'react'

function Footer() {
	return (
		<footer>
			<Container>
				<Row>
					<Col className="text-center py-3" >Copyright &copy; ProShop</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
