/* @author Charles Liu */

import Banner from '../components/shared/Banner'
import Using from '../components/About/Using'

function about() {
  return (
    <div>
      <Banner
        url="/images/iphone_background_landscape.png"
        title="ABOUT MSMR"
      />
      <Using />
    </div>
  )
}

export default about
