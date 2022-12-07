import { useSelector } from "react-redux";

export const Score = () => {
    const { wins, lost } = useSelector((store) => store.hangman)
    return (
        <>
            <div className="score-container">
                <p className="score-text">score:</p>
                <p className="score-text">wins: <span className="score-text-decorate">{wins}</span></p>
                <p className="score-text">lost: <span className="score-text-decorate">{lost}</span></p>
            </div>
        </>
    )
}