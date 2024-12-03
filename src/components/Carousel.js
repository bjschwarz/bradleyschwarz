import {detailImages}  from "@/components/Projects.js";
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

export default function ResponsiveCarousel() {
  return (
    <div >
      <Carousel
       sx={{ width: 'auto',
        height: '700px', 
        position: 'relative',
        backgroundColor: "#272727",
        borderRadius: "10px"
      }}
      >
        {detailImages.map((item) => (
          <div key={item}>
            <Image
                layout="fill"
                src={item}
                alt='logo'
                objectFit="contain"
                loading="eager"
              />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
