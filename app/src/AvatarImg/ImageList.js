
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useBreakpoint } from './useBreakpoint';



export const ImageList = () => {
  const matches = useBreakpoint('(min-width:900px)');


  const imagesAndTitles = [
    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt413a72c966de5019/1812-Novelty-Homepage-202301-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title: "Novità del 2023",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt985c185e9456faed/Generic-Site-Wave-1-Exclusive-202208-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title:  "Set esclusivi",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt000ef33faa9bca80/offers_Promos-Home-2021-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title:  "Offerte",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt162009d5265209d5/76192-202106-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title: "Marvel",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/bltf9b17b60653cf537/1830-Home-202301-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title: "Capodanno lunare",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt944f15f94625732f/21171-202106-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title: "Minecraft™",

    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/bltdf13b0231fc4daa4/QL_LLMagazine_160x130_jpeg[30304].jpg?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title:  "Rivista GRATIS",
    },

    {
      url: "https://www.lego.com/cdn/cs/set/assets/blt3c435fefe7e0b613/VIPSoftLaunch-Quicklink.jpg?fit=crop&format=webply&quality=80&width=80&height=65&dpr=2",
      title: "VIP",
    }
  ]


  return (
    // <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 30, paddingTop: 40, paddingBottom: 50}}>
    //   {imagesAndTitles.map((image, index) => (

        // <Link  style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 10, listStyle: "none", textDecoration: "none", color: "black"}}
        //         to={`/image/${index}`} key={image.url}>

 <>
                 <useMediaQuery minWidth={900}>
                    {matches ?
                    (
                      <>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 30, paddingTop: 40, paddingBottom: 50}}>
                    {imagesAndTitles.map((image, index) => (

                      <Link  style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 10, listStyle: "none", textDecoration: "none", color: "black"}}
                              to={`/image/${index}`} key={image.url}>
                            <img src={image.url} alt={image.title} style={{width: 80, height: 60}} />
                            <Typography style={{fontSize: 12,  }}  variant="p">{image.title}</Typography>
                     </Link>
                      ))}
                     </div>

                    </>
                    )
                    :
                    ( <>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 30, paddingTop: 40, paddingBottom: 50, flexWrap: "wrap"}}>
                    {imagesAndTitles.map((image, index) => (
                      <Link  style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 10, listStyle: "none", textDecoration: "none", color: "black"}}
                              to={`/image/${index}`} key={image.url}>
                        <img src={image.url} alt={image.title} style={{width: 50, height: 40}} />
                        <Typography style={{fontSize: 11 }}  variant="p">{image.title}</Typography>
                     </Link>
                     ))}
                    </div>
                      </>
                    )}
                  </useMediaQuery>



            </>



        // </Link>
      // ))}
    // </div>
  );
}

export default ImageList;



