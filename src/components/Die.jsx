export default function Die(prop){
    const style = {backgroundColor : prop.isHeld ? "rgb(161, 247, 172)" : "white"}

    return <button onClick={prop.onClick} 
                    style={style} 
                    id={prop.id}
                    aria-label={`this is Die with value ${prop.val}, it is ${prop.isHeld ? "held" : "not Held"}`}

                    >{prop.val}</button>
}