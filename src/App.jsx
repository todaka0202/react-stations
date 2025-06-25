// DO NOT DELETE

import { data } from 'browserslist';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <>
    <Header />
    <DogListContainer />
    </>
  )
}
