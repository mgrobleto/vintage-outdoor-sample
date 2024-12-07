import image1 from '../public/images/outdoor/3.jpg'
import image2 from '../public/images/outdoor/4.jpg'
import image3 from '../public/images/outdoor/5.jpg'
import image4 from '../public/images/outdoor/6.jpg'
import image5 from '../public/images/outdoor/7.jpg'
import image6 from '../public/images/outdoor/8.jpg'
import image7 from '../public/images/outdoor/9.jpg'
import image8 from '../public/images/outdoor/10.jpg'

import { StaticImageData } from 'next/image'

const images: StaticImageData [] = [
    image1, image2, image3, image4, image5, image6, image7, image8
]

export const galleryByIndex = (index: number) : StaticImageData => images[index % images.length]