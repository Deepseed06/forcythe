
import activityImg from '../../public/images/activity.svg'
import africaFund from '../../public/images/africaFund.svg'
import exacImg from '../../public/images/exec-pro.svg' 
import stacImg from '../../public/images/stac.svg' 
import phoneImg from '../../public/images/phone.svg' 
import starkImg from '../../public/images/starks.svg' 
import johnImg from '../../public/images/john.svg' 
import chritineImg from '../../public/images/christina.svg' 
import edwinImg from '../../public/images/edwin.svg' 
import ceoImg from '../../public/images/executive-pro-ceo.svg' 
import iwariaImg from '../../public/images/iwaria-founder.svg' 
import starkLogo from '../../public/images/stacai.svg' 
import stacaiLogo from '../../public/images/stacai.svg' 
import exeLogo from '../../public/images/ExecutivePros Logo.svg' 
import iwariaLogo from '../../public/images/iwaria.svg' 
import BeapreneurLogo from '../../public/images/Beaupreneur.svg' 
export const items = [
    { content: activityImg },
    { content: africaFund },
    { content: exacImg},
    { content:  stacImg},
    { content: phoneImg },
    { content: starkImg },
]
export const testifiers = [
    { id:1,imgSrc: johnImg },
    { id:2,imgSrc: ceoImg},
    { id:3,imgSrc:  edwinImg},
    { id:4,imgSrc: iwariaImg },
    { id:5,imgSrc: chritineImg },
]

 interface ButtonData {
  id: number
  label: string;
  content: string
  title:string;
  imageSrc: string;
  footer: string;
}

export const buttons:ButtonData[] = [
    { id: 1, 
      title:"Starks Associate", 
      label: starkLogo, 
      content: `Partnering with Forcythe was 
      like finding a hidden gem. Their genuine 
      interest in our success was palpable, and the 
      continuous support post-launch has been a testament to 
      their commitment. They’ve become more than a service provider; 
      they’re a trusted ally.`,
      imageSrc:testifiers[0].imgSrc.src,
      footer:'John, Management' 
    },
    { 
      id: 2, 
      title:"ExecutivePros", 
      label: exeLogo, 
      content: `The team understood the 
      assignment and delivered very well. 
      One of the things that stood them out was 
      how they took our concepts and turned it into 
      visually appealing designs that caught the eyes of 
      our clients and made increased web engagements. Kudos!`,
      imageSrc:testifiers[1].imgSrc.src,
      footer:'Testimony, Co-founder'
    },
    { id: 3, 
        title:"Stai AI", 
      label: iwariaLogo, 
      content: `Forcythe is seriously amazing when it 
      comes to coming up with new ideas. They took our 
      rough ideas and turned them into something incredible online. 
      Their team’s commitment to our vision was evident every step of the way.`,
      imageSrc:testifiers[3].imgSrc.src,
      footer:'Iwaria, Founder'
      
    },
    { id: 4, 
        title:"Iwaria", 
      label: stacaiLogo, 
      content: `The moment we engaged Forcythe, it was 
      clear they were in a league of their own. Their strategic 
      approach to our project not only enhanced our online platform 
      but also enriched our brand’s story, captivating our audience 
      like never before.`, 
      imageSrc:testifiers[2].imgSrc.src,
      footer:'Edwin, Former CTO'
    },
    { id: 5, 
      title:"Beaupreneur", 
      label: BeapreneurLogo, 
      content: `I’m beyond impressed with the 
      dedication Forcythe showed. They didn’t 
      just deliver—they educated us, involving us in 
      the creative process. The result? A website that truly 
      feels like ours and speaks directly to our customers’ hearts.`,
      imageSrc:testifiers[4].imgSrc.src,
      footer:'Christiana, Founder'
    },
  ]