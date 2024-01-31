import React from 'react'
import {
  CommunityFeed,
  Footer,
  Links,
  Navbar,
  Menus,
  Profile,
  Ranking,
  Tabs,
  WheelOfOpp,
} from './components'
import styles from './styles'
import MobileBottom from './components/MobileBottom'

const App = () => {
  return (
    <div className="bg-violet-100 w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-white rounded shadow`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex flex-row'>
            <div className={`sm:flex hidden flex-col w-[20%] h-[100%] justify-between items-start mt-3 mr-2 bg-white rounded`}>
              <div className='flex flex-col justify-start items-start w-full'>
                <Menus />
                <CommunityFeed />
              </div>
              <Footer />
            </div>
            <div className='sm:w-[80%] w-full border-l border-solid border-violet-200 bg-violet-50'>
              <div className='w-full object-contain h-[120px]'>
                <img src="https://t3.ftcdn.net/jpg/00/73/08/22/360_F_73082224_ay4Tus31QNHNmGSIty53ZE6mBrBc47cV.jpg" alt="" className='h-[120px] w-[100%]' />
              </div>
              <div className='w-full h-[100%] flex sm:flex-row flex-col sm:mb-0'>
                <div className='sm:flex hidden flex-col w-[25%] bg-white rounded mr-3'>
                  <Profile />
                  <Links />
                  <WheelOfOpp />
                  <Ranking />
                </div>
                <div className='sm:hidden flex flex-row w-full bg-white rounded object-fit'>
                  <div className='flex flex-col w-[70%] bg-white rounded mr-3'>
                    <Profile />
                    <Links />
                    <Ranking />
                  </div>
                  <WheelOfOpp />
                </div>
                <Tabs />
              </div>
            </div>
            <MobileBottom />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App