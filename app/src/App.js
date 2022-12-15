import Button from "./ButtonsExample/component"
import AnotherModal from "./Modal/AnotherModal"
import ModalAccount from "./Modal/ModalAccount"
import ModalHeart from "./Modal/ModalHeart"


import Navabar from "./Navbar/Navabar"
import WhiteBar from "./White-bar/WhiteBar"



const App = () => {

    //function 
    function clickButton(e){
        console.log('Hai premuto il bottone ' + e.target.innerHTML)
    }

     //function 
     function clickAltroButton(e){
        console.log('Hai premuto un altro bottone ' + e.target.innerHTML)
    }

    return(
        <div>
             <WhiteBar />
            <Navabar />
            <h1>Lego website work in progress</h1>
            < Button 
                btnStyle="button-noborder" 
                text="Natale"  
                onClick={clickButton}
             />
            <div>
            < Button
                btnStyle="button-border" 
                text="Compra ora"  
                onClick={clickAltroButton} 
            />
            </div>
           
        <ModalHeart />
        <AnotherModal />
        
          
        </div>
        
    )
}

export default App