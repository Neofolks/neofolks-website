import React from 'react'
import TinkerthonBigboi from '../assets/TinkerthonBig.webp'
import TinkerthonSmol from '../assets/TinkerthonSmall.webp'
import NeofolksSmol from '../assets/NeofolksSmall.webp'
import RegisterModal from '../components/RegisterModal'

function TinkerBottom() {
  return (
    <div className="relative h-fit w-full text-white flex flex-col items-center gap-10 px-2 md:mt-10" id="about">

        {/* Tinkerthon bigboi image */}
        <img src={TinkerthonBigboi} className='w-[95%] max-w-[800px]' alt="" />

        {/* Register text */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center'>
            <h1 className="text-center text-4xl md:text-6xl font-['familjen_grotesk'] font-semibold">Register Now for Tinkerthon</h1>
            <p className='text-center md:text-xl text-[#959499]'>Add collaborative experiences you know and love like text editors, forms, creative tools and whiteboards with Liveblocks APIs and tools.</p>
        </div>

        {/* Register button */}
        <RegisterModal/>

        {/* Map location stuff */}
          <div style={{display: 'flex', flexDirection: 'column', height: '100vh',left:'0'}}className="earth3dmap-com">
      <iframe
        id="iframemap"
        src="https://maps.google.com/maps?q=Navrachna+University%2CVasna-Bhayli+Main+road%2Cvadodara%2CGujarat%2CIndia&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        style={{
          color: '#333',
          fontSize: '14px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          textAlign: 'left',
          padding: '10px',
          marginLeft:'-350px',
          marginRight:'400px',
          marginTop:'200px'
         
                  
          
        }}
      />
      <div style={{
          color: '#333',
          fontSize: '14px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          textAlign: 'right',
          padding: '10px'
        }}>
     <a
          style={{
            color: '#333',
            textDecoration: 'underline',
            fontSize: '14px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            textAlign: 'right'
          }}
          href="http://earth3dmap.com/?from=embed"
          target="_blank"
        >
        </a>
      </div>
    </div>
 



        {/* Footer images neofolks & tinkerthon */}
        <div className='w-[95%] flex justify-between'>
            <div className='max-w-[100px] lg:max-w-[150px]'>
                <img src={NeofolksSmol} alt="" />
            </div>
            <div className='max-w-[100px] lg:max-w-[150px] flex justify-center items-center'>
                <img src={TinkerthonSmol}  alt="" />
            </div>
        </div>

    </div>

  )
}

export default TinkerBottom