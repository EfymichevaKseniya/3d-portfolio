import { Link } from 'react-router-dom'
import routes from '@navigator/routes.json'
import arrow from '@assets/icons/arrow.svg'

const InfoBox: React.FC<{text: string, link: string, btnText: string}> = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='text-center font-medium sm:text-xl'>{text}</p>
      <Link  className='neo-brutalism-white neo-btn' to={link}>
        {btnText}
        <img className='w-4 h-4 object-contain' src={arrow} />
      </Link>
    </div>
  )
}

const renderContent = {
    1: (
      <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Ksenia</span> 👋
        <br/>
        A Frontend Developer
      </h1>
    ),
    2: (
      <InfoBox
        text='Led some projects to success over the years.'
        link={routes.about}
        btnText='Visit my portfolio'
      />
    ),
    3: (
      <InfoBox
        text='Need a project done or looking for a dev?'
        link={routes.contacts}
        btnText="Let's talk"
      />
    ),
}

const HomeInfo: React.FC<{ currentStage: keyof typeof renderContent}> = ({ currentStage }) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo