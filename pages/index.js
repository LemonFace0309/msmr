import Head from 'next/head'
import Landing from '../components/Landing'
import Jumbotron from '../components/Jumbotron'
import Title from '../components/Title'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <h1> Hello World </h1>


      <section className="container py-5 d-flex flex-column justify-content-center align-items-center">
        <Title
          title="Maximizing Resilience"
          position="middle"
        />
        <p className="text-center "> There are multiple areas from which we draw our resilience. These include external resilience, coping pursuits, and external resilience. MSMR offers the tool and knowledge to improve in each of these areas. </p>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <img width="50%" src="images/maxres.jpeg" />

          <div className="d-flex flex-column ml-5 py-2">
            <h2 className="text-warning font-weight-bold"> Internal Resilience </h2>
            <p> The ability to take care of yourself. This means identifying and prioritizing mental health and physical health. </p>

            <h2 className="text-primary font-weight-bold"> Coping Pursuits </h2>
            <p> The ability to address everyday challenges and goals. This means identifying strengths, exploring and learning from new opportunities. </p>

            <h2 className="text-success font-weight-bold"> External Resilience </h2>
            <p> The ability to define your role within your community. Being active in your community can help create your own identity. </p>

            <Button type="purpleWhite" link="/">
              <p>LEARN MORE</p>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
