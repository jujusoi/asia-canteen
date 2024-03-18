export default function Home() {
  return (
    <>
    <section style={{ width: '100%', backgroundColor: '#FDF8F5' }}>
      <section style={{  height: 500, backgroundColor: '#c43c3c' }} id="introbg-h">
        <section style={{ height: '100%', width: '65%', margin: 'auto', display: 'flex', justifyContent: 'flex-end'}}>
          <div style={{ backgroundColor: '#ea332f',  width: '50%', height: '65%', marginTop: 140}}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", padding: '3rem', boxSizing: 'border-box'}}>
            <h2 style={{ margin: 0, lineHeight: 1.1, fontSize: 27 }}>ADD A COMPELLING TITLE FOR YOUR SECTION TO ENGAGE YOUR AUDIENCE</h2>
            <p style={{ overflowWrap: 'anywhere'}}>Use this paragraph section to get your website visitors to know you. Consider writing about you or your organization, the products or services you offer, or why you exist. Keep a consistent communication style.</p>
            </div>
          </div>
        </section>
      </section>
      <section style={{  height: 225, backgroundColor: '#ea332f' }} id="introblnk-h">
        <section style={{ height: '100%', width: '65%', margin: 'auto', display: 'flex'}}>
          <div style={{ margin: 'auto', width: '65%', height: '70%',  border: '1px solid black'}}></div>
          <div style={{ margin: 'auto', width: '30%', height: '70%',  border: '1px solid black'}}></div>
        </section>
      </section>
      <section style={{  backgroundColor: '#c43c3c' }} id="menulocgal-h">
        <section style={{ height: '250px', width: '65%', margin: 'auto', display: 'flex'}}>
            <div style={{ margin: 'auto auto 50px auto', width: '100%', height: '50%',  border: '1px solid black'}}></div>
        </section>
        <section style={{ height: '300px', width: '53%', margin: 'auto', display: 'flex'}}>
          <div style={{ margin: 'auto', width: '100%', height: '60%',  border: '1px solid black', backgroundColor: '#4d40ff'}}></div>
        </section>
      </section>
      <section style={{backgroundColor: '#ea332f'}} id="gall-h">
        <section style={{ height: '400px', width: '53%', margin: 'auto', display: 'flex'}}>
        </section>
      </section>
      <section style={{backgroundColor: '#4d40ff'}} id="abus-h">
        <section style={{ height: '275px', width: '65%', margin: 'auto', display: 'flex'}}>
          <div style={{ margin: 'auto', width: '100%', height: '60%',  border: '1px solid black', backgroundColor: '#4d40ff'}}></div>
        </section>
      </section>
      <section style={{backgroundColor: '#c43c3c'}} id="abus-h">
        <section style={{ height: '125px', width: '65%', margin: 'auto', display: 'flex'}}>
        </section>
      </section>
    </section>
    </>
  )
};