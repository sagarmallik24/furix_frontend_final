import React from 'react'
import './ProdAndSolution.module.css'
import Varities from '../landingPage/Varities'
import ProdSolution from '../../assets/static/images/prod&sol.jpg'
import Medicaldevices from '../landingPage/Medicaldevices'
import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText'
import ContactForm from '../ContactUs/ContactForm';
function ProdAndSolution() {


    // const [imgs, setImgs] = useState([]);
    // const data = async () => {
    //     const data = await axios.get(`${utils.getHost()}/get/bannersDetail`);
    //     setImgs(data.data)
    //     //  [carousal1, carousal2, carousal3, carousal1, carousal2, carousal3]
    // }
    // useEffect(() => {
    //     data()
    // }, [])



    return (
        <div className='marg-top-common'>
            <section className='mb-5'>
                <ImageWithText src={ProdSolution} altName={'news.jpg'}
                    text={['Product Offerings and Solutions']}
                />
            </section>

            <section className='container mb-5'>

                {/* --------------------------------------------------------------------- */}

                <div>
                    <p className='d-flex justify-content-center mt-5 mb-3 h1'>Resolutions</p>
                    <p className='container d-flex text-center mt-2 '>We are dedicated to ensuring equal access to high-quality healthcare by addressing the varied demands of veterinarians, enabling them to care for a diverse range of animals.</p>
                    <Varities />
                </div>

                {/* --------------------------------------------------------------------- */}

                <div style={{ backgroundColor: 'rgb(249 249 249)' }}>
                    <br />
                    <p className='d-flex justify-content-center mt-3 mb-3 h3'>Offerings</p>
                    <p className='container d-flex text-center mt-2 '>With an extensive product portfolio encompassing medical imaging systems, patient monitoring and life support, and In-Vitro diagnostics for animals, we are enhancing the healthcare experience for animals and boosting confidence for animal caregivers.</p>
                    <Medicaldevices />
                </div>
            </section>

            <section>
                <div style={{ backgroundColor: '#ececec' }}>
                    <ContactForm />
                </div >
            </section>
        </div>
    )
}

export default ProdAndSolution