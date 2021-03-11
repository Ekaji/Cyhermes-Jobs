function Pricing() {
// const pricing = ['Trial & Pricing', 'Payment Method']

  return (
  <div style={{width: '35vw', backgroundColor: '#222021', color: '#8E8D8D'}}>
    <div style={{ height: '20vh'}}>
        <div style={{ fontSize: '25px', color: '#ffffff',padding: '1.5rem 3rem 6rem',  }} ><b>[]</b></div>
        <div style={{marginLeft: '0px', fontSize: '18px' }}>
          <div style={{borderLeft: '4px solid Yellow', padding: '1.5rem 3rem 1rem', color: '#ffffff' }}>Trial & Pricing</div>
          <div  style={{padding: '0.5rem 3rem 1rem' }}>Payment Method</div>
          <div style={{width: '100px', borderBottom: '1px dashed yellow', margin: '1rem 3rem 2rem'}}></div>
          <div style={{margin: '1rem 3rem 2rem', fontSize: '14px'}}><p>Get Started...</p></div> 
        </div>
    </div>
    <div style={{ display: 'flex',  height: '80vh', width: '100%' }}>
        <div style={{ alignSelf: 'flex-end',   border: '1px solid #8E8D8D', borderRadius: '9px', width: '270px', margin: '2rem', padding: '0.5rem 0.5rem' }}>
            <div style={{position: 'relative'}} >
                <div style={{position: 'absolute', left: '-60px', top: '20%', backgroundColor: '#222021', fontSize: '150px', margin: '0px', padding: '0px 0px 15px', lineHeight: '90px', height: '20px', border: '23px solid #222021' }}>"</div>
                <div style={{margin: '5px 50px'}}>
                    <i>Success is not final, failure is not fatal: it is the courage to continue that counts</i>
                    <p>-wiston churchil</p>
                    </div>

            </div>
        </div>
    </div> 
  </div>
  );
}

export default Pricing;