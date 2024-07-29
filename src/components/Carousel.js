import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'

function ImageViewer({project}) {

  return (
    <Box sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Carousel sx={{width:'100%'}}>
        {
        project.additional_images.map((item, i) => (<Item key={i} item={item} />))
        }
      </Carousel>
    </Box>
  );
}

function Item(props)
{
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
            height={600}
            width={600}
            objectFit='contain'
            src={props.item}
            alt={"s"}
            ></Image>
            </Box>
    )
}

export default ImageViewer;