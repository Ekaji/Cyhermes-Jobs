import InfoHeader from './info/InfoHeader'
import Package from './info/Package'
import Addsers from './info/AddUsers'
import Modules from './info/Modules'
import Actions from './info/Action'

function Info() {
  return (
  <div style={{width: '65vw'}}>
      <div style={{margin: '2rem 8rem 0rem'}}>
        <InfoHeader />
        <Package />
        <Addsers />
        <Modules />
        <Actions />
      </div>
  </div>
  );
}

export default Info;