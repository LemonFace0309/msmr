import Title from './Title'
import Carousel from './shared/Carousel'

const Sponsors = ({ sponsors }) => {
  return (
    <div className="mx-5">
      <div className="row d-flex justify-content-center">
        <Title title="Sponsors" position="middle" />
      </div>
      <div
        className="fluid row justify-content-center mx-5 px-5 py-0 my-0"
        style={{ height: '300px' }}
      >
        <Carousel
          slides={sponsors}
          className="px-5 justify-content-center align-items-center"
        />
      </div>
    </div>
  )
}

export default Sponsors
