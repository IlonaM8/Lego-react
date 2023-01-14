

import WhiteBar from "./White-bar/WhiteBar"






const App = () => {

    //function
    // function clickButton(e){
    //     console.log('Hai premuto il bottone ' + e.target.innerHTML)
    // }

     //function
    //  function clickAltroButton(e){
    //     console.log('Hai premuto un altro bottone ' + e.target.innerHTML)
    // }

    return(
        <div>
            <WhiteBar />
            {/* <Navabar /> */}
            {/* < Button
                btnStyle="button-noborder"
                text="Natale"
                onClick={clickButton}
             /> */}
            <div>
            {/* < Button
                btnStyle="button-border"
                text="Compra ora"
                onClick={clickAltroButton}
            /> */}
            </div>


        {/* <NavbarLego /> */}

        {/* <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route  path="/Card" element={<CardExample/>}/>
            <Route path="/Carousel" element={<CarouselExample />}/>
            <Route  path="/Table" element={<Table />}/>
            <Route path="/Chips"  element={<ChipsExample />}/>
        </Routes> */}



          {/* <AppBarLego /> */}
          {/* <MobileDrawer /> */}



        </div>

    )
}

export default App
