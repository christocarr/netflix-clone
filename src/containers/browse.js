import React, {useState, useContext, useEffect} from 'react'
import Header from '../components/header'
import Loading from '../components/loading'
import Card from '../components/card'
import {FooterContainer} from './footer'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase';
import {SelectProfileContainer} from './profiles';

export default function BrowseContainer({slides}) {

  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState('series')
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [slideRows, setSlideRows] = useState([]);

  const {firebase} = useContext(FirebaseContext)

  const user = {
    displayName: 'Chris',
    photoURL: 3
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [user])

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
    {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
    <Header src="joker1" dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={process.env.PUBLIC_URL + "/images/misc/logo.svg"} alt="Netflix" />
          <Header.Link 
            active={category === 'series' ? 'true' : 'false'}
            onClick={() => setCategory('series')}>
            Series
          </Header.Link>
          <Header.Link 
            active={category === 'films' ? 'true' : 'false'}
            onClick={() => setCategory('films')}>
            Films
          </Header.Link>
        </Header.Group>

        <Header.Group>
          <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                  Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
          </Header.Profile>

        </Header.Group>
      </Header.Frame>

      <Header.Feature>
        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
        <Header.Text>
        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
        futile attempt to feel like he's part of the world around him.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>

    <Card.Group>
      {slideRows.map((slideItem) => (
        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
          <Card.Title>{slideItem.title}</Card.Title>
          <Card.Entities>
            {slideItem.data.map((item) => (
              <Card.Item key={item.docId} item={item}>
                <Card.Image src={process.env.PUBLIC_URL + `/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                <Card.Meta>
                  <Card.SubTitle>{item.title}</Card.SubTitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Meta>
              </Card.Item>
            ))}
          </Card.Entities>

          <Card.Feature category={category}>
            
          </Card.Feature>

        </Card>
      ))}
    </Card.Group>
    
    <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  )
}