import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import MaxResilience from '../components/MaxResilience'
import AboutMSMR from '../components/AboutMSMR'
import Articles from '../components/Articles'

export default function Home() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <AboutMSMR />
      <MaxResilience />
      <Articles />
    </>
  )
}
