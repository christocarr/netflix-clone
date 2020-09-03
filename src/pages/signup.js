import React, {useState} from 'react';
import {HeaderContainer} from '../containers/header';
import Form from '../components/form'
import * as ROUTES from '../constants/routes'
import {FooterContainer} from '../containers/footer'

export default function Signup() {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isEmpty = firstName === '' || email === '' || password === ''
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <>
    <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
                    
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.SubmitButton disabled={isEmpty} type="submit">
              Sign Up
            </Form.SubmitButton>
            
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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