/* eslint-disable react/jsx-key */
import {Container, Row, Card} from 'react-bootstrap'
import styles from '../styles/page.styles/ourTeam.module.scss'

export default function OurTeam() {

  const data = [
   { 
     name: 'Advisory Board',
     description : 'The Advisory Board is not yet another “think tank” but a group of experts that share in our vision for establishing a lead in using the benefits of Emerging Technology to make Africa region and the world Safer.',
     members : [
      { 
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Professor-Ibrahim-Agboola-Gambari.jpg',
        name : 'Professor Ibrahim Agboola Gambari',
        title : 'The Executive Chairman/President Technology Against Crime Africa',
        description : 'Chairman of Savannah Centre for Diplomacy, Democracy and Development (SCDDD)'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/P.J.-Ingram.jpg',
        name : 'P.J. Ingram',
        title : 'The International Co-Chari/Vise President Technology Against Crime Africa',
        description: ' MBE BSc MA GCGI Managing Editor, Grey Hare Media Limited,London, United Kingdom'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/AIG-C.K.-Aderanti.jpg',
        name : 'AIG C.K. Aderanti, mni (Rtd)',
        title : 'President/CEO',
        description: ' Daniel Security Systems Limited Nigeria Assistant Inspector General of Police (AIG) Cornelius Kayode Aderanti, Mni'
      },
     ],
    
  },
  {
    name: 'Drone & Counter Drone Scientific Committee',
    description: 'The Scientific Committee will be the coordinating head of the ideation platform in the different co-creation groups. They will enhance the dialogue on the actualization of drone compendium in their different subject domain which will focus to promote Standard Operational Procedure (SOP) and international best practices to be drawn out of this virtual co-creation hub.',
    members : [
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Ms-Brooke-Tapsall.jpg',
        name : 'Ms Brooke Tapsall',
        title : ' CEO, DroneALERT',
        description: 'Estonia & Australia'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/David-Mc-Creary.jpg',
        name : 'David Mc Creary',
        title : 'President/CEO, New Age Aerial',
        description: 'Sacramento, California – USA'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Mr.-Kelvin-Lungu.jpg',
        name : 'Mr. Kelvin Lungu',
        title : 'Lecturer - University of Zambia',
        description: 'Co-Ordinator – Zambia Flying Labs'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Sanjana-Rathi.jpg',
        name : 'Sanjana Rathi',
        title : 'Research Analyst, Cyber Peace Foundation,',
        description: 'Ranchi Jharkhand, India'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Ackson-Kondwani-Mwenda.jpg',
        name : 'Ackson Kondwani Mwenda',
        title : 'Aerospace Engineer | Founder African Drone Voice.',
        description: 'Zambian based in Cote D’ivoire'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Orville-McCalla.jpg',
        name : 'Orville McCalla',
        title : 'CEO/President AeroStream Consulting Inc.',
        description: '',
        location: 'Canada'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Jan-Otto-Johansen-1.jpg',
        name : 'Jan Otto Johansen',
        title : 'Police Superintendent',
        description: 'Head of C-UAV, Bomb squad Norwegian National Police Special Response Unit'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Yong-LI.jpg',
        name : 'Yong LI',
        title : 'UAV public security',
        description: 'development and application of UAV',
        location : 'Greater China and Southeast Asia'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Mr.-Adewale-Adegoke.jpg',
        name : 'Mr. Adewale Adegoke',
        title : 'CEO Digital Orbital Solutions and Cordinator ',
        description: 'Nigeria Flying Labs'
      },
    ]
  },
  {
    name : 'TAC Cybercrime Expert Group',
    description : 'This will be the coordinating arm of the ideation platform in the Artificial Intelligence and Cybercrime co-creation groups. This is a collection of Experts called the TAC – Cybercrime Expert Group. They will enhance the dialogue on the actualization of the various TAC Africa Cybercrime Project to promote Standard Operational Procedure (SOP) and international best practices.',
    members: [
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Professor-B.K.-Alese.jpg',
        name : 'Professor B.K. Alese',
        title : '',
        description: ''
      },
      {
        image: '	https://tacafrica.org/wp-content/uploads/2020/05/Ese-Egerega.jpg',
        name : 'Ese Egerega',
        title : '',
        description: ''
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Raji-Abdulgafar.jpg',
        name : 'Raji Abdulgafar',
        title : '',
        description: ''
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Shehu-Awwal.jpg',
        name : 'Shehu Awwal',
        title : '',
        description: ''
      },
      {
        image: '	https://tacafrica.org/wp-content/uploads/2020/05/FELIX-LARBI-ARYEH.jpg',
        name : 'Felix Larbi Aryeh',
        title : 'Research Fellow / Lecturer & Webmaster',
        description: '(MSc, BSc, MIASTED, MGARNET, MUTAG) Computer Science and Engineering Department & ICTU University of Mines and Technology'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/Tosin-Akinsowon.jpg',
        name : 'Tosin Akinsowon',
        title : '',
        description: ''
      },
    ]
  },
  {
    name : 'Secretariat',
    description : 'The Secretariat will maintain an overview of ongoing virtual platform discuss between the co-creation programmes and circulates the results or information as and at when due.',
    members : [
      {
        image: '',
        name : 'Bright Lawrence',
        title : 'Drones solution specialist TAC – NGO',
        description: '',
        location: 'Abuja – Nigeria',
        socials : [] 
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2019/10/Ibrahim-Ali.jpg',
        name : 'Abdullazeez Ocheja',
        title : 'Senior UAV pilot TAC NGO',
        description: '',
        location: 'Abuja – Nigeria'
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2019/10/Nkwoka-Onyinyechukwu-Peter.jpg',
        name : 'Peter Nkwoka',
        title : ' Senior UAV Pilot/ Trainer TAC NGO',
        description: '',
        location: 'Abuja – Nigeria',
      },
      {
        image: '',
        name : 'Kalu Sampson',
        title : 'Media Consultant TAC NGO',
        description: '',
        location: 'Abuja – Nigeria'
      },
      {
        image: '',
        name : 'Kind Akuboa',
        title : 'Managing Director, Training, Media & Innovations TAC NGO',
        description: '',
        location : 'Abuja – Nigeri'
      },
      {
        image: '	https://tacafrica.org/wp-content/uploads/2019/10/Ibrahim.jpg',
        name : 'Ibrahim Ali',
        title : 'Graphics Media Consultant TAC NGO',
        description: '',
        location: 'Abuja – Nigeria'
      },
    ]
  },
  {
    name : 'Partners',
    description : 'Partners are organizations with specific Expertise which are invited by the TAC Secretariat to participate in the initiative. Partners can be NGOs, research institutes, companies, stakeholders with well grounded expertise, etc.',
    members : [
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/ruda-robotics.jpg',
        name : '',
        title : '',
        description: ''
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/drone-alert.jpg',
        name : '',
        title : '',
        description: ''
      },
      {
        image: 'https://tacafrica.org/wp-content/uploads/2020/05/grey-media.jpg',
        name : '',
        title : '',
        description: ''
      },
    ]
  },
   
  ];

  
  return(
      <Container className={styles.container} >
    <div className='' >
        {data.map(({name, description, members}) => (
          <div>
              <h2 className='text-primary'>{name}</h2>
              <p className='col-md-8 p-0'>{description}</p>
            {/* </Container> */}
            <div style={{margin: '0 auto', width: '100%'}}>
              <Row xs={1} md={2} xl={4} className={['g-4', 'd-flex', 'justify-content-cente', styles.card_container__outer].join(' ')} >
              {members.map(({image, name, title, description, location}) => (
                <Card className={['m-4', styles.card_container__inner ].join(' ')}  >
                  <Card.Img variant="top" src={image} className={styles.card_container__inner__image} />
                  <div>
                    <Card.Title className='text-primary' >{name}</Card.Title>
                    <div className={['text-primary',  styles.card_container__inner__colored__text].join(' ')}>
                      {title}
                    </div>
                    <div className={styles.card_container__inner__colored__text}>
                      {description}
                    </div>
                  </div>
                </Card>
              )
              )}
              </Row>
            </div>
          </div>
        )
        )
      }
      </div>
    </Container>
  )
}