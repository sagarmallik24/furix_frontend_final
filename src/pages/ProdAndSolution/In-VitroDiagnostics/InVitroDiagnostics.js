import React, { useEffect, useRef, useState } from 'react'
//import React, { useEffect, useRef } from 'react'
import ContactForm from '../../ContactUs/ContactForm'
import { ImageTextSol, ImageWithText } from '../../../components/commonJsComponent/ImageWithCenterText'
import dummyimage from '../../../assets/static/images/staticMachineImg.jpg'
import ivdthumb from '../../../assets/static/images/f2.jpg'
import { ProductCard } from '../Products/prodCard'
import axios from 'axios'


function InVitroDiagnostics() {
  const hemoRef = useRef(null)
  const chemistryRef = useRef(null)
  const mdRef = useRef(null)
  const urinalysisRef = useRef(null)


  const hemoScroll = () => hemoRef.current.scrollIntoView()
  const chemistryRefScroll = () => chemistryRef.current.scrollIntoView()
  const utinalysisScroll = () => urinalysisRef.current.scrollIntoView()
  const mdScroll = () => mdRef.current.scrollIntoView()


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });

    if (window.location.href.endsWith('#Hematology'))
      hemoScroll()

    if (window.location.href.endsWith('#Chemistry'))
      chemistryRefScroll()

    if (window.location.href.endsWith('#Urinalysis'))
      utinalysisScroll()

    if (window.location.href.endsWith('#Molecular-Diagnosis'))
      mdScroll()

  }, [])

  const [hematology_prodList, setcsb_prodList] = useState([]);
    const [chemistry_prodList, setdrs_prodList] = useState([]);
    const [urinalysis_prodList, setPs_prodList] = useState([]);
    const[md_prodList,setmd_prodList]= useState([]);
    
    const fetchhema = async () => {
        const result = await axios.get('http://localhost:8000/cart/?sub_category=hematology');

        console.log(result.data)
        setcsb_prodList(result.data)
    }
    const fetchchem = async () => {
        const result1 = await axios.get('http://localhost:8000/cart/?sub_category=chemistry');

        console.log(result1.data)
        setPs_prodList(result1.data)
    }
    
    const fetchmd = async () => {
        const result2 = await axios.get('http://localhost:8000/cart/?sub_category=molecular');

        console.log(result2.data)
        setmd_prodList(result2.data)
    }

    const fetchurin = async () => {
      const result2 = await axios.get('http://localhost:8000/cart/?sub_category=urinalysis');

      console.log(result2.data)
      setdrs_prodList(result2.data)
  }
    useEffect(() => {
      fetchhema();
  }, [])
  useEffect(() => {
    fetchchem();
  }, [])
  useEffect(() => {
    fetchurin();
  }, [])
  useEffect(() => {
    fetchmd();
  }, [])

    
  const disc = `We offer a comprehensive range of In-Vitro Diagnostic solutions for animals, covering 3-diff hematology, 5-diff hematology, biochemistry, and PCR products. Through the provision of precise and efficient tests, we can meet the growing demands of various laboratories in veterinary hospitals of varying sizes.`

  let mainPage = 'IVD'

  {/*let hematology_prodList = [
    { id: 2, src: dummyimage, name: 'm1' },
    { id: 5, src: dummyimage, name: 'm2' },
    { id: 4, src: dummyimage, name: 'm3' },
    { id: 4504, src: dummyimage, name: 'm4' },
    { id: 4505, src: dummyimage, name: 'm5' }]

  let chemistry_prodList = [
    { id: 4511, src: dummyimage, name: 'm1' },
    { id: 4512, src: dummyimage, name: 'm2' },
    { id: 4513, src: dummyimage, name: 'm3' },]

  let urinalysis_prodList = [
    { id: 4531, src: dummyimage, name: 'm1' },
    { id: 4532, src: dummyimage, name: 'm2' },
    { id: 4533, src: dummyimage, name: 'm3' },
    { id: 4534, src: dummyimage, name: 'm4' },
    { id: 4535, src: dummyimage, name: 'm5' }]

  let md_prodList = [
    { id: 4540, src: dummyimage, name: 'm1' },
    { id: 4541, src: dummyimage, name: 'm2' },
    { id: 4543, src: dummyimage, name: 'm3' },
    { id: 4544, src: dummyimage, name: 'm4' },
  { id: 4545, src: dummyimage, name: 'm5' }]*/}

  return (
    <div className='marg-top-common'>

      <section className='ivd-s1'>
      <ImageTextSol src={ivdthumb} altName={'ivd.jpg'} text={['Diagnostic Solutions In-Vitro', 'Precision in Results', disc]} />
      </section>


      <section className={'container ivd-s2 mt-5 mb-2'} ref={hemoRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Hematological Analysis</p>
        <div className="products">
        {/*<a href="/en/product/BC-60R_Vet"><img src="https://www.furixanimal.com/n0/xikb7f/230418/349/jpg/2dosjxxt.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/BC-60R_Vet">BC-60R Vet</a></h3>
    							<a href="/en/product/BC-5000_Vet"><img src="https://www.furixanimal.com/n0/gflsvk/210713/144/jpg/ddv8qyge.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/BC-5000_Vet">BC-5000 Vet</a></h3>
    							
    							<a href="/en/product/BC-30_Vet"><img src="https://www.furixanimal.com/n0/eddcje/210713/174/jpg/8sxcujby.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/BC-30_Vet">BC-30 Vet</a></h3>
    							<a href="/en/product/BC-2800_Vet"><img src="https://www.furixanimal.com/n0/nzjwcx/210713/550/jpg/6pfoxx1w.jpg" alt="Product" /></a>
                  <h3><a href="/en/product/BC-2800_Vet">BC-2800 Vet</a></h3>*/}
    							
          {hematology_prodList &&
            hematology_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>



      <section className='container ivd-s3 ' ref={chemistryRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Biochemical Analysis</p>
        <div className="products">

          {/*	<a href="/en/product/BS-240_Vet"><img src="https://www.furixanimal.com/n0/kirup1/230728/145/jpg/g9pryugc.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/BS-240_Vet">BS-240 Vet</a></h3>
    							
            <a href="/en/product/Vetube_30"><img src="https://www.furixanimal.com/n0/7viuzq/210906/782/jpg/fvipe5eb.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/Vetube_30">Vetube 30</a></h3>
          */}
          {chemistry_prodList &&
            chemistry_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s4 ' ref={urinalysisRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Analysis of Urine</p>
        <div className="products">
        {/*<a href="/en/product/UA-60V"><img src="https://www.furixanimal.com/n0/x2uqff/220613/152/jpg/pfbdluxl.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/UA-60V">UA-60V</a></h3>
          */}			
          {urinalysis_prodList &&
            urinalysis_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s4 ' ref={mdRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Molecular Diagnostics</p>
        <div className="products">
        {/*<a href="/en/product/Vetgenies_8"><img src="https://www.furixanimal.com/n0/xgglj1/210817/250/jpg/k4wxhm3x.jpg" alt="Product" /></a>
    		<h3><a href="/en/product/Vetgenies_8">Vetgenies 8</a></h3>
          */}		
          {md_prodList &&
            md_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='contactus' >
        <ContactForm />
      </section>

    </div >
  )
}

export default InVitroDiagnostics