import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message' 
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userAction'

function LoginScreen({ location, history }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	
	const redirect = location.search ? location.search.split('=')[1] : '/' 
	// if user have a search then split array on index 1 else /

	const userLogin = useSelector(state => state.userLogin) 
	//state.userLogin from store.js
	
	const { error, loading, userInfo } = userLogin
	//error, loading, userInfo from userReducers.js
	
	useEffect(() =>{
		// if user has been login they have a object userInfo
		if (userInfo){
			history.push(redirect)
		}
	},[history, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}
	
	return (
		<FormContainer>
			<h1>Sign In</h1>
			
			{/* if login error */}
			{error && <Message variant={'danger'}>{error}</Message>}
			{loading && <Loader />}
			{/* else */}
			<Form onSubmit={ submitHandler }>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
					type='email'
					placeholder='Enter Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password Address</Form.Label>
					<Form.Control
					type='password'
					placeholder='Enter Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Sign In
				</Button>

			</Form>

			<Row className='py-3'>
				<Col>
					New Customer ? <Link to={redirect ? `/register?redirect=${redirect}`: `/register`}>Register</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default LoginScreen