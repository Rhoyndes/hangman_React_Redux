export const Panel = ({startHangMan, flag, input,setInput, check}) => {

    return (
        <>
            <button className="hangman-startBtn" onClick={startHangMan} style={flag ? {pointerEvents: 'none'} : {pointerEvents: 'all'}}>Roll word</button>
            <div className="hangman-check-container">
                <input className="hangman-input" type="text" value={input} onChange={(e) => {
                    setInput(e.target.value.toUpperCase())
                }} minLength={1} maxLength={1}/>
                <button className="hangman-checkBtn" onClick={check} style={flag ? {pointerEvents: 'all'} : {pointerEvents: 'none'}}>check</button>
            </div>
        </>
    )
}