function InfoHeader() {
   
      return (
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <div style={{}}>
            <p>Hey, Terry</p>
            <h3 style={{fontSize: '23px', }}>Start Your Free <i style={{color: 'yellow'}}> 30 days </i> Trial</h3>
            <p>Select your Prefered package below</p>
        </div>
        <div style={{ marginLeft: '0px', lineHeight: '8px'}}>
            <span style={{color: 'blue'}} >
            <p>NGN</p>
            <h3>1,999,999</h3>
            </span>
            <p>Total<sm>(excluding vat)</sm></p>
        </div>
      </div>
      );
    }
    
    export default InfoHeader;