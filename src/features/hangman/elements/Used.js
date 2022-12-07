export const Used = ({usedChart}) => {

    return (
        <>
            <div className="hangman-usedChart-container">
                <p className="hangman-usedChart-text">Used:</p>
                    {usedChart.map((chart, key) => {
                        return <span className="hangman-usedChart" key={key}>{chart}</span>
                    })}
            </div>
        </>
    )
}