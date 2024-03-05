import React, { useEffect, useRef } from 'react'
import NewsBlock from '../../components/SingleContent/NewsBlock'
import SingleContent from '../../components/SingleContent/SingleContent'
import medCenter from '../../assets/static/images/veterinaryCollcetion.png'
import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText'
import './MedicalCenter.model.css'

function MedicalCenter(props) {
  const newsRef = useRef(null)
  const eventRef = useRef(null)

  const newsScroll = () => newsRef.current.scrollIntoView()
  const eventScroll = () => eventRef.current.scrollIntoView()

  useEffect(() => {
    if (window.location.href.endsWith('#news'))
      newsScroll()

    if (window.location.href.endsWith('#events'))
      eventScroll()
  }, [])



  const events = [
    {
      src: medCenter,
      place: 'Philadelphia, USA', about: '2023 ACVIM Forum (American College Veterinary Internal Medicine)', title: 'No.638', Convention_Center: 'Pennsylvania Convention Center', date: 'Jun 15-17, 2023'
    }, {
      src: medCenter,
      place: 'china', about: 'china-aa', title: 'china-tt', Convention_Center: 'china-cc',
      date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'honkong', about: 'honkong-aa', title: 'honkong-tt', Convention_Center: 'honkong--cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'india', about: 'india-aa', title: 'india-tt', Convention_Center: 'india-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'USA', about: 'USA-aa', title: 'USA-tt', Convention_Center: 'USA-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'india', about: 'india-aa', title: 'india-tt', Convention_Center: 'india-cc', date: 'Jun 15-17, 2023'
    },
  ]

  const pastEvents = [
    {
      src: medCenter,
      place: 'india', about: 'india-aa', title: 'india-tt', Convention_Center: 'india-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'USA', about: 'USA-aa', title: 'USA-tt', Convention_Center: 'USA-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'india', about: 'india-aa', title: 'india-tt', Convention_Center: 'india-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'india', about: 'india-aa', title: 'india-tt', Convention_Center: 'india-cc', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter,
      place: 'USA', about: 'USA-aa', title: 'USA-tt', Convention_Center: 'USA-cc', date: 'Jun 15-17, 2023'
    },
  ]

  const newsEvents = [
    {
      src: medCenter, discription: 'qcnasocalkscniavnl kasnvca ,smlc kmasmaclka sn ml',
      otherDisc: '', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter, discription: 'qcnasocalk scniavnlkasnvca ,smlc kmasmaclka sn ml',
      otherDisc: '', date: 'Jun 15-17, 2023'
    },
    {
      src: medCenter, discription: 'qcnasocalks cniavnlkasnvca ,smlc kmasmaclka sn ml',
      otherDisc: '', date: 'Jun 15-17, 2023'
    }
  ]


  const Event = () => {
    return (<section  className='medicalcenter-s2-event m-3 '>
      {events &&
        events.map((c) => (
          <SingleContent
            key={c.src}
            src={c.src}
            place={c.place}
            about={c.about}
            title={c.title || ''}
            Convention_Center={c.Convention_Center}
            date={c.date}
          />
        ))}
    </section>
    )
  }

  const PastEvent = () => {
    return (<section  className='medicalcenter-s2-event m-3 '>
      {pastEvents &&
        pastEvents.map((c) => (
          <SingleContent
            key={c.src}
            src={c.src}
            place={c.place}
            about={c.about}
            title={c.title || ''}
            Convention_Center={c.Convention_Center}
            date={c.date}
          />
        ))}
    </section>
    )
  }


  const NewsBlog = () => {
    return (<section  className='medicalcenter-s2-event m-3'>

      {newsEvents &&
        newsEvents.map((c) => (
          <NewsBlock
            key={c.src}
            src={c.src}
            discription={c.discription}
            otherDisc={c.otherDisc}
            date={c.date}
          />
        ))}
    </section>)
  }

  return (
    <div className='marg-top-common'>
      <section className='medicalcenter-s1'>
        <div ref={eventRef}></div>
        <ImageWithText src={medCenter} altName={'news.jpg'}
          text={['Media Center', 'Find more about our upcoming events and latest news.']}
          className='mid-right' />
      </section>


      <section id="events" className='container medicalcenter-s2 mt-5 ' >
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12'>
            <div className='tabs'>
              <ul className="nav nav-tabs" >
                <li>
                  <a href="#upcomingEvent" className="nav-link active" data-bs-toggle="tab" 
                  data-bs-target="#upcomingEvent" type="button" 
                  aria-controls="upcomingEvent" >Upcoming Events</a>
                </li>
                <li >
                  <a href="#pastEvent" className="nav-link" id="pastEvent-tab" data-bs-toggle="tab" 
                  data-bs-target="#pastEvent" type="button" 
                  aria-controls="pastEvent"  >Past Events</a>
                </li>
              </ul>
            </div>

            <div className="tab-content ">
              <div className="tab-pane fade active " id="upcomingEvent" >
                <Event />
              </div>

              <div className="tab-pane fade" id="pastEvent"    >
                <PastEvent />
              </div>

            </div>
          </div>

        </div>


      </section>


      {/* <section id="news" className='container medicalcenter-s3 mt-5 mb-4' ref={newsRef}>
        <p className='h2 d-flex justify-content-center'>News</p>
        <NewsBlog />
      </section> */}

    </div>
  )
}

export default MedicalCenter