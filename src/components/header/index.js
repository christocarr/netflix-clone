import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Link, 
  Text, 
  Background, 
  Container, 
  Logo, 
  ButtonLink, 
  Group,
  Feature,
  FeatureCallOut,
  PlayButton} from './styles/header'

export default function Header({bg=true, children, ...restProps}) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Header.Link = function HeaderLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}