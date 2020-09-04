import React from 'react'
import BrowseContainer from '../containers/browse'
import useContent from '../hooks/use-content'
import selectionMap from '../utils/selection-map'

export default function Browse() {
  const {films} = useContent('films')
  const {series} = useContent('series')
  const slides = selectionMap({ series, films })
  return <BrowseContainer slides={slides}/>
}