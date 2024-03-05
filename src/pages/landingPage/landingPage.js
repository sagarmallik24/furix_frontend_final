import React from 'react';
import './landingPage.css';
import Varities from './Varities';
import Medicaldevices from './Medicaldevices';
import WhatsNew from './WhatsNew';
import CbsV2 from '../../components/CustomBannerSlider/CbsV2';
//import HelloWorld from './HelloWorld';
import Slider from './slider';
//import './About.css'


const LandingPage = () => {

	return (
		<div className='marg-top-common'>
			<CbsV2 />
			{/* --------------------------------------------------------------------- */}
            <Slider/>
			<div>
				<p className='d-flex justify-content-center text-center mt-5 mb-3 h2'>
We provide care for a diverse range of animals.</p>
				<Varities />
			</div>

			{/* --------------------------------------------------------------------- */}

			<div style={{ backgroundColor: '#ececec' }}>
				<div className='d-flex justify-content-center text-center mt-5'>
					<h2 className='mt-5 mb-4'>We offer advanced medical devices and <br />	<span className='d-flex justify-content-center text-center'>
					comprehensive solutions.
					</span>
					</h2>
				</div>

				<Medicaldevices />
			</div>

			{/* --------------------------------------------------------------------- */}

			 <div >
				<WhatsNew />
			</div> 

			<div className="mb-5" />
           

		</div >
	);
};

export default LandingPage;
