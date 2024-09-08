import React from 'react'
import advertiseBanner from '../../../public/assets/Ads_2.png'
import Image from '../layout/Image'
import  Container  from '../layout/Container'
import { Link } from 'react-router-dom'

const MiddleAd = () => {
  return (
    <section className=' mt-10 sm:mt-14 md:mt-18 lg:mt-23 xl:mt-28 2xl:mt-32'>
        <Container>
            <Link to={""}>
                <Image className={"w-full"} imageLink={advertiseBanner} altText={"kjlsd"}/>
            </Link>
        </Container>
    </section>
  )
}

export default MiddleAd