import React, { useEffect, useState } from 'react'
import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText';
import compAnimalThumb from '../../assets/static/images/Companion_Animals-1.jpg'
import compAnimalThumb2 from '../../assets/static/images/varities/Companion_Animals-1.jpg'
import farmAnimal from '../../assets/static/images/Farm Animals.jpg'
import exoAnimal from '../../assets/static/images/Exotic Animals.jpg'
import equineAnimal from '../../assets/static/images/Equine.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import utils from '../../assets/utils';
import axios from 'axios';

import style from '../MedicalCenter/MedicalCenter.model.css'
import Medicaldevices from '../landingPage/Medicaldevices';
import ContactForm from '../ContactUs/ContactForm';
import { ProductCard } from '../ProdAndSolution/Products/prodCard'

function CompanionAnimal(props) {
    let mainPage = 'MIS'
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [])

    const [mis_prodList, setMis_prodList] = useState([]);
    const [vitro_prodList, setvitro_prodList] = useState([]);
    const [pmls_prodList, setpmls_prodList] = useState([]);
    const data = async () => {
        const data = await axios.get('http://localhost:8000/cart/?category=mis');
        setMis_prodList(data.data)
    }
    const data1 = async () => {
        const data = await axios.get('http://localhost:8000/cart/?category=In-Vitro ');
        setvitro_prodList(data.data)
    }
    
    const data2 = async () => {
        const data = await axios.get('http://localhost:8000/cart/?category=pmls');
        setpmls_prodList(data.data)
    }
    
        //  [carousal1, carousal2, carousal3, carousal1, carousal2, carousal3]
    
    useEffect(() => {
        data()
    }, [])
    useEffect(() => {
        data1()
    }, [])
    useEffect(() => {
        data2()
    }, [])
    
    const CompanionAnimalLog = () => {
        return (<>
            <ImageWithText src={compAnimalThumb} altName={'Contact.jpg'}
                text={['']}
                className='text-white centered' />
            <Container>
                <p className='h2 mt-5'>Domesticated Pets</p>
                <p className=' text-secondary'>
                Companion animals are viewed as essential members of numerous households.
                </p>
                <br />
                <p className=' text-secondary'>
                As the population of companion animals expands and their life expectancy extends, age-related health issues become a growing concern for both owners and veterinarians.
                </p>
                <br />
                <p className=' text-secondary'>
                Furix Animal Medical is committed to delivering comprehensive solutions, encompassing general and surgical care, medical imaging, and laboratory diagnostic testing, to fulfill the requirements of contemporary animal hospitals and clinics. Our goal is to support veterinarians in providing precise, secure, and dependable healthcare services for companion animals.
                </p>
                <ImageWithText altName={'cms'} src={compAnimalThumb2} text={['']} key={`1`} />
            </Container>
        </>)
    }

    const FarmAnimalLog = () => {
        return (<>
            <ImageWithText src={farmAnimal} altName={'Contact.jpg'}
                text={['']}
                className='text-white centered' />
            <Container>
                <p className='h2 mt-5'>Farm Animals</p>
                <p className=' text-secondary'>
                We are a reliable clinical partner for diverse livestock farms, providing solutions that address the specific medical requirements of animals such as cattle, horses, sheep, goats, and pigs.
                </p>
                <br />
                <p className=' text-secondary'>
                Our portable ultrasound systems feature unique convex and endocavity transducers, facilitating improved livestock breeding and fertility management.
                </p>
                <br />
                <p className=' text-secondary'>
                Compact and dependable laboratory equipment can be utilized in various types of livestock farms to guarantee precise and efficient hematology tests, biochemistry, and PCR analysis.
                </p>
            </Container>
        </>)
    }

     const EquineAnimalLog = () => {
         return (<>
             <ImageWithText src={equineAnimal} altName={'Contact.jpg'}
                 text={['']}
                 className='text-white centered' />
             <Container>
                 <p className='h2 mt-5'>Horse</p>
                 <p className=' text-secondary'>
                 The horse is a cherished companion in both our lives and endeavors.

                 </p>
                 <br />
                 <p className=' text-secondary'>
                 As horse racing continues to grow in popularity, there is an increasing need for professional healthcare services and cutting-edge medical devices for racehorses. Covering everything from diagnosis to treatment and monitoring, Furix Animal Medical provides premium solutions for the healthcare of racehorses.

                 </p>
                 <br />
                 <p className=' text-secondary'>
                 Our premium ultrasound systems can be applied to identifying horse obstetrics and genital diseases, heart diseases, and sports injuries such as tendonitis. Various transducer options are available, including linear transducers, convex transducers ,and phased array transducers. The portable ultrasound systems also offer more flexibility for veterinarians while diagnosing different diseases.


                 </p>
                 <br />
                 <p className=' text-secondary'>
                 Throughout surgery, precise monitoring of various parameters ensures the safety of anesthesia. Our dependable infusion systems also facilitate accurate administration of medications.
                 </p>
                 <br />
                 <p className=' text-secondary'>
                 We have also pioneered In-Vitro Diagnostic solutions specifically designed for horses, providing more precise test results in hematology, biochemistry, and PCR analysis.


                 </p>
                 <ImageWithText altName={'cms'} src={compAnimalThumb2} text={['']} key={`1`} />
             </Container>
         </>)
     }

    const ExoticAnimalLog = () => {
        return (<>
            <ImageWithText src={exoAnimal} altName={'Contact.jpg'}
                text={['']}
                className='text-white centered' />
            <Container>
                <p className='h2 mt-5'>Unusual Animals</p>
                <p className=' text-secondary'>
                Numerous species, both in the wild and within zoo environments, face the peril of extinction. Safeguarding biological diversity and defending endangered and rare animals is a collective responsibility for all.
                </p>
                <br />
                <p className=' text-secondary'>
                Furix Animal Medical upholds our obligation by disseminating advanced medical technologies to aid veterinarians and activists in enhancing the well-being of exotic animals.

                </p>
                <br />
                <p className=' text-secondary'>
                The inclusive ultrasound imaging solutions, featuring diverse transducers and integrated tools, can cater to the requirements of distinct rare species for medical examinations, disease diagnoses, and breeding purposes.
                </p>
                <br />
                <p className=' text-secondary'>
                Extensive years of research and practical experience enable us to gain a deeper understanding of exotic animals and their physiology. This knowledge empowers us to devise adaptable solutions suitable for various types of exotic animals. As an illustration, a dedicated Giant Panda mode has been incorporated into our hematology analyzers to enhance disease screening.
                    <br />
                    Our comprehensive operating room solution incorporates advanced animal anesthesia workstations, multiparameter patient monitoring systems, and dependable infusion systems. This reduces the risk associated with anesthesia and enhances the safety of animals during surgery.
                </p>
                <ImageWithText altName={'cms'} src={compAnimalThumb2} text={['']} key={`1`} />
            </Container>
        </>)
    }

    return (
        <div className='marg-top-common'>
            {(window.location.pathname.match('/Companion_Animals')) ?
                CompanionAnimalLog() : null
            }
            {(window.location.pathname.match('/Farm_Animals')) ?
                FarmAnimalLog() : null
            }

            {(window.location.pathname.match('/Exotic_Animals')) ?
                ExoticAnimalLog() : null
            }
            {(window.location.pathname.match('/Equine')) ?
                EquineAnimalLog() : null
            }
            <Container>
                <p className='h2 text-center mt-5 form-headline'>Advanced Medical Imaging Solution</p>
                <div className="products">
                    {mis_prodList &&
                        mis_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                        ))}
                </div>
            </Container>

            <Container>
                <p className='h2 text-center mt-5'>Laboratory Diagnostic Solutions</p>
                <div className="products">
                    {vitro_prodList &&
                        vitro_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                        ))}
                </div>
            </Container>

            <Container>
                <p className='h2 text-center mt-5'>Monitoring and Life Support for Patients</p>
                <div className="products">
                    {pmls_prodList &&
                        pmls_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                        ))}
                </div>
            </Container>


            <div className='mb-5'>
                <div className='d-flex justify-content-center text-center mt-5 mb-5'>
                    <h2 className='mt-2'>Learn More </h2>
                </div>

                <Medicaldevices />
            </div>

            <div style={{ backgroundColor: '#ececec' }}>
                <ContactForm />
            </div >

        </div >

    )
}

export default CompanionAnimal