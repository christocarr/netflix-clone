import React, {useState} from 'react'
import {HeaderContainer} from './header'
import {FooterContainer} from './footer'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase';
import {SelectProfileContainer} from './profiles';

export default function BrowseContainer() {

  const [profile, setProfile] = useState({})

  const user = {
    displayName: 'Chris',
    photoURL: 3
  }

  return profile.displayName ? (
    <>
    <p>Browse container </p>
    <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  )
}