import Button from "./ButtonsExample/component"



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
            <h1>Ciao Mondo</h1>
            < Button 
                btnStyle="button-noborder" 
                text="Natale"  
                onClick={clickButton} />
            <div>
            < Button
                btnStyle="button-border" 
                text="Compra ora"  
                onClick={clickAltroButton} />
            </div>
        </div>
        
    )
}

export default App