import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Teams from './pages/team';
import BaseView from './BaseView';
import About from './pages/AboutUs/About';
import AnnualReport from './pages/annual';
import Footer from './components/footer/Footer';
import Service from './pages/Service/Service';
import Redirect from './pages/PageNotFound/Redirect';
import ContactPage from './pages/ContactUs/ContactPage';
import LandingPage from './pages/landingPage/landingPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import MedicalCenter from './pages/MedicalCenter/MedicalCenter';
import ScrollButton from './components/scrollToTop/ScrollButton';
import ProdAndSolution from './pages/ProdAndSolution/ProdAndSolution';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProdPage from './pages/ProdAndSolution/Products/ProdPage';
import Pmls from './pages/ProdAndSolution/PatientMonitoring-LifeSupport/Pmls';
import MedicalImagingSystem from './pages/ProdAndSolution/MedicalImagingSystem/MedicalImagingSystem';
import InVitroDiagnostics from './pages/ProdAndSolution/In-VitroDiagnostics/InVitroDiagnostics';
//Node.js v20.9.0
import './App.css';
import CompanionAnimal from './pages/Varities/CompanionAnimal';
import Donate from './pages/Donatefrm';
import webfont from 'webfontloader';
import Header from './components/Header/Header';
import AddStudent from './pages/ContactUs/AddStudent';
//import Wel from './wel';


function App() {
	
		  
    {/*useEffect(() => {
		fetch('/?q=proxy')
		  .then(resp => {
			console.log(resp);
			console.log('======success=======');
		  })
		  .catch(err => {
			console.log('======failure=======');
			console.log(err);
		  });
	  }, [])*/}
	
	useEffect(() => {
		webfont.load({
			google: {
				families: ["Roboto", "Droid Sans", "Chilanka"],
			},
		});
	}, []);

	return (
		<Router>
			<Header />
			<Routes >
				{/* <Route path={"/"} element={<BaseView />}> */}
					<Route index element={<LandingPage />} />
					<Route path={'about-us'} element={<About />} />
					<Route path={'service'} element={<Service />} />
					<Route path={'contact-us'} element={<ContactPage />} />
					<Route path={'news'} element={<MedicalCenter />} />
					<Route path={'product/'} element={<ProdAndSolution />} />
					<Route path={'product/MIS'} element={<MedicalImagingSystem />} />
					<Route exact path={'product/MIS/:id'} element={<ProdPage />} />
          <Route path={"/product/IVD/:id"} element={<ProdPage />} />
          <Route path={'product/PMLS/:id'} element={<ProdPage />} />
		  <Route path={'/add'} element={<AddStudent />} />
		  <Route path={'/donate'} element={<Donate />} />

          <Route path={'product/IVD'} element={<InVitroDiagnostics />} />
					
					<Route path={'product/PMLS'} element={<Pmls />} />
					

					<Route path={'Companion_Animals'} element={<CompanionAnimal />} />
					<Route path={'Farm_Animals'} element={<CompanionAnimal />} />
					<Route path={'Exotic_Animals'} element={<CompanionAnimal />} />
                    <Route path={'Equine'} element={<CompanionAnimal />} />
				{/* </Route> */}



				<Route path={"en/"} element={<BaseView />}>
					<Route path={'en/home'} index element={<LandingPage />} />
					<Route path={'en/about-us'} element={<About />} />
					<Route path={'en/contact-us'} component={ContactPage} />
					<Route path={'en/annual'} component={AnnualReport} />
					<Route path={'en/team'} component={Teams} />
					<Route path={'*'} element={<Redirect />} />
				</Route>
				<Route path={'/404'} element={<PageNotFound />} />

				<Route path={'*'} element={<Redirect />} />


			</Routes>

			<ScrollButton />
			<Footer />
		</Router>
	);
}

export default App;
