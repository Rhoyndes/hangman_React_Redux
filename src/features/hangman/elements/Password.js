import { useEffect } from "react"

export const Password = ({map}) => {
    // useEffect(() => {
    //     const win = map.every(item => item.pass !== '_')
    //     if(win){
    //         alert('win')
    //     }
    // }, [map])
    return (
        <div className="hangman-password-container">
        {map.map((chart, key) => {
            return <span className="hangman-password" key={key}>{chart.pass} </span>
        })}
    </div>
    )
}