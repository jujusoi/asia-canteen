export default function Home() {
  return (
    <>
      <section style={{ width: '100%', backgroundColor: '#FDF8F5' }}>
        <section style={{ height: 500, backgroundColor: '#c43c3c' }} id="introbg-h">
          <section style={{ height: '100%', width: '65%', margin: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ backgroundColor: '#ea332f', width: '50%', height: '65%', marginTop: 140 }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", padding: '3rem', boxSizing: 'border-box' }}>
                <h2 style={{ margin: 0, lineHeight: 1.1, fontSize: 27 }}>ADD A COMPELLING TITLE FOR YOUR SECTION TO ENGAGE YOUR AUDIENCE</h2>
                <p>Use this paragraph section to get your website visitors to know you. Consider writing about you or your organization, the products or services you offer, or why you exist. Keep a consistent communication style.</p>
              </div>
            </div>
          </section>
        </section>
        <section style={{ height: 300, backgroundColor: '#ea332f' }} id="introblnk-h">
          <section style={{ height: '100%', width: '65%', margin: 'auto', display: 'flex' }}>
            <div style={{ margin: 'auto', width: '65%', height: '70%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
              <h2 style={{ margin: 0, lineHeight: 1.1, fontSize: 27 }}>Type a short headline</h2>
              <p>Use this paragraph section to get your website visitors to know you. Write about you or your organization, the products or services you offer, or why you exist. Keep a consistent communication style. Consider using this if you need to provide more context on why you do what you do. Be engaging. Focus on delivering value to your visitors.</p>
            </div>
            <div style={{ margin: 'auto', width: '30%', height: '70%' }}>
              <img style={{ width: '100%', height: '100%' }} src="https://clcn.com.au/images/Example-Background-Image-1024x672-1.jpg" alt="template" />
            </div>
          </section>
        </section>
        <section style={{ backgroundColor: '#c43c3c' }} id="menulocgal-h">
          <section style={{ height: '250px', width: '65%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '6rem' }}>
            <div style={{ height: 1, width: 80, borderTop: '3px solid white' }}>
            </div>
            <div style={{ width: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
              <h2 style={{ margin: 0, lineHeight: 1.1, fontSize: 'xxx-large', marginTop: 30 }}>Our menu</h2>
              <p style={{ textAlign: 'center' }}>Savor the flavors of contemporary American cuisine with our diverse menu, featuring a delightful fusion of classic favorites and inventive dishes crafted to satisfy a wide range of dietary preferences.</p>
            </div>
          </section>
          <section style={{ width: '60%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ea332f', padding: '5rem 2rem', marginBottom: 75 }}>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', width: '90%', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 35 }}>
                <h2 style={{ lineHeight: 1.1, fontSize: 25, marginTop: 30 }}>Salads</h2>
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 'medium' }}>RUSTIC HARVEST SALAD</h3>
                  <p style={{ fontSize: 'small' }}>A colorful medley of mixed greens, roasted beets, goat cheese, candied pecans, and a tangy citrus vinaigrette.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid white', paddingTop: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 'medium' }}>GARDEN VEGETABLE QUINOLA BOWL</h3>
                  <p style={{ fontSize: 'small' }}>A healthy and hearty bowl filled with quinoa, roasted sweet potatoes, kale, cherry tomatoes, avocado, and a zesty lemon-tahini dressing.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 35, borderTop: '2px solid white' }}>
                <h2 style={{ lineHeight: 1.1, fontSize: 25, marginTop: 30 }}>Sandwiches</h2>
                <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 'medium' }}>GRILLED PORTOBELLO MUSHROOM BURGER</h3>
                  <p style={{ fontSize: 'small' }}>A mouthwatering, marinated portobello mushroom cap grilled to perfection, served with lettuce, tomato, and a zesty aioli on a brioche bun.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid white', paddingTop: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 'medium' }}>BBQ PULLED PORK SANDWICH</h3>
                  <p style={{ fontSize: 'small' }}>Slow-cooked, tender pulled pork smothered in a tangy BBQ sauce, served with pickles and coleslaw on a toasted brioche bun.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid white' }}>
                <h2 style={{ lineHeight: 1.1, fontSize: 25, marginTop: 30 }}>Main Dishes</h2>
                <div style={{ paddingTop: 20 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <h3 style={{ margin: 0, fontSize: 'medium' }}>CRISPY BUTTERMILK FRIED CHICKEN</h3>
                    <p style={{ fontSize: 'small' }} >Succulent, juicy chicken with a perfectly seasoned, crispy crust, served with house-made coleslaw and a side of tangy barbecue sauce.</p>
                  </div>
                </div>
                <div style={{ paddingTop: 20, borderTop: '1px solid white' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <h3 style={{ margin: 0, fontSize: 'medium' }}>CRISPY BUTTERMILK FRIED CHICKEN</h3>
                    <p style={{ fontSize: 'small' }} >Succulent, juicy chicken with a perfectly seasoned, crispy crust, served with house-made coleslaw and a side of tangy barbecue sauce.</p>
                  </div>
                </div>
                <div style={{ paddingTop: 20, borderTop: '1px solid white' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <h3 style={{ margin: 0, fontSize: 'medium' }}>CRISPY BUTTERMILK FRIED CHICKEN</h3>
                    <p style={{ fontSize: 'small' }} >Succulent, juicy chicken with a perfectly seasoned, crispy crust, served with house-made coleslaw and a side of tangy barbecue sauce.</p>
                  </div>
                </div>
                <div style={{ paddingTop: 20, borderTop: '1px solid white' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <h3 style={{ margin: 0, fontSize: 'medium' }}>CRISPY BUTTERMILK FRIED CHICKEN</h3>
                    <p style={{ fontSize: 'small' }} >Succulent, juicy chicken with a perfectly seasoned, crispy crust, served with house-made coleslaw and a side of tangy barbecue sauce.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{ width: '57%', margin: 'auto', display: 'flex' }}>
            <div style={{ margin: 'auto', width: '100%', height: '60%', backgroundColor: '#4d40ff', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '1.5rem' }}>
              <h2 style={{ margin: 0, marginBottom: 25, lineHeight: 1.1, fontSize: 35, height: '30%', textAlign: 'center' }}>Find us</h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '60%', textAlign: 'center' }}>
                <div style={{ width: '25%', padding: '0 1rem' }}>
                  <h3 style={{ margin: 0, fontSize: 'medium', fontWeight: 400 }}>Email</h3>
                  <p>hello@businessname.com</p>
                </div>
                <div style={{ width: '25%', padding: '0 1rem' }}>
                  <h3 style={{ margin: 0, fontSize: 'medium', fontWeight: 400 }}>Phone</h3>
                  <p>+1 912-44-9717</p>
                </div>
                <div style={{ width: '25%', padding: '0 1rem' }}>
                  <h3 style={{ margin: 0, fontSize: 'medium', fontWeight: 400 }}>Address</h3>
                  <p>1234 N Street City, State, Country</p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section style={{ backgroundColor: '#ea332f' }} id="gall-h">
          <section style={{ height: '400px', width: '53%', margin: 'auto', display: 'flex' }}>
          </section>
        </section>
        <section style={{ backgroundColor: '#4d40ff' }} id="abus-h">
          <section style={{ width: '65%', margin: 'auto', display: 'flex', padding: '4rem 0 3rem 0' }}>
            <div style={{ margin: 'auto', width: '100%', height: '60%', backgroundColor: '#4d40ff', display: 'flex', justifyContent: 'space-between', borderTop: '2px solid rgba(255,255,255,0.4)', paddingTop: '2rem' }}>
              <div style={{ width: '48%', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ margin: 0, lineHeight: 1.1, fontSize: 37, marginTop: 30 }}>Type a short headline</h2>
                <p>Consider using this if you need to provide more context on why you do what you do.</p>
              </div>
              <div style={{ width: '48%' }}>
                <p>Use this paragraph section to get your website visitors to know you. Write about you or your organization, the products or services you offer, or why you exist. Keep a consistent communication style. Consider using this if you need to provide more context on why you do what you do. Be engaging. Focus on delivering value to your visitors.</p>
              </div>
            </div>
          </section>
        </section>
        <section style={{ backgroundColor: '#c43c3c' }} id="abus-h">
          <section style={{ height: '125px', width: '65%', margin: 'auto', display: 'flex' }}>
          </section>
        </section>
      </section>
    </>
  )
};