function Package() {
   
    return (
    <div style={{color: '#8E8D8D', marginTop: '20px'}}>
     <b style={{fontSize: '14px'}}>Add more users</b>
     <p style={{fontSize: '12px', margin: '6px 0px'}}>NGN99,999 per user</p>
     <span style={{display: 'flex',  justifyContent: 'space-between', width: '100%'}}>
         <p>0</p>
         <p>&gt;1000</p>
     </span>
     <input style={{width: '100%'}} type='range' min='0' max='1000' value='100' />
    </div>
    );
  }
  
  export default Package;