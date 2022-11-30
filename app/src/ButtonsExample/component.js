// import style from './ButtonChristmas.css'

const Button = (props) => {
    return ( 
        <div>
            <button 
                 onClick={props.onClick} 
                 className={props.btnStyle}>
                {props.text}
            </button>
        </div>
     );
}
 
export default Button;