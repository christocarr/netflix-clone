import React from 'react'
import Header from '../components/header/index'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo 
          to={ROUTES.HOME} 
          src="/images/misc/logo.svg" 
          alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}