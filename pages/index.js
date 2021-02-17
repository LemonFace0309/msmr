import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <h1> Hello World </h1>
      <Title
        title="There once was a bear and he ate a lot of fis"
        position="middle"
      />
    </>
  )
}
