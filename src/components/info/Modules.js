function Modules() {
    const modules =['Governance Portal', 'Corporate Universe', 'Contract Domain', 'Investor Relation', 'Dispute Portfolio', 'Minute Book', 'Reporting Tool', 'Attendance REgister']
   
    return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridGap: '1rem', margin: '0px 20px', width: '100%',  }}>
     {modules.map(module => (
        <article styles={{width: '20px'}}>{module}</article>
        )
    )
}
    </div>
    );
  }
  
  export default Modules;