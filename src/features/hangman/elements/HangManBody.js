export const HangManBody = ({misstake}) => {

    return (
        <div className="hangman__body">
            <div className="hangman__body-part hangman__body-part-1">
                <div className="hangman__body-part-vertical" style={misstake > 0 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-2">
                <div className="hangman__body-part-vertical" style={misstake > 1 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-3">
                <div className="hangman__body-part-vertical-half" style={misstake > 2 ? {display: 'block'} : {display: 'none'}}></div>
                <div className="hangman__body-part-horizontal-half" style={misstake > 3 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-4">
                <div className="hangman__body-part-horizontal" style={misstake > 4 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-5">
                <div className="hangman__body-part-vertical-half" style={misstake > 6 ? {display: 'block'} : {display: 'none'}}></div>
                <div className="hangman__body-part-horizontal-half hangman__body-part-horizontal-half-mirror" style={misstake > 5 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-6">
                <div className="hangman__body-part-head" style={misstake > 7 ? {display: 'block'} : {display: 'none'}}></div>
                <div className="hangman__body-part-chest" style={misstake > 8 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-7">
                <div className="hangman__body-part-legs" style={misstake > 9 ? {display: 'block'} : {display: 'none'}}></div>
            </div>
            <div className="hangman__body-part hangman__body-part-8"></div>
            <div className="hangman__body-part hangman__body-part-9"></div>
        </div>
    )
}