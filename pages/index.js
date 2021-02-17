import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'

export default function Home() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <h1> Hello World </h1>
    </>
  )
}
