import React, {useState} from 'react'
import Form from '../components/form'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'

export default function Signin() {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const isEmpty = email === '' || password === ''

  const handleSubmit = ev => {
    ev.preventDefault()
  }

  return (
    <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error &&<Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSubmit} method="POST">
          <Form.Input 
            placeholder="Email address"
            value={email}
            name="email"
            onChange={({target}) => setEmail(target.value)}
          />

          <Form.Input
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)} 
          />

          <Form.SubmitButton disabled={isEmpty} type="submit">
              Sign In
          </Form.SubmitButton>
          
          <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>    
          <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
    <FooterContainer />
    </>
  )
}