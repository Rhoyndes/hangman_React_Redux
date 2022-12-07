import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increaseError, increaseWins, decrease, usedCharts, restart } from "./HangManSlice";
import { HangManBody } from "./elements/HangManBody";
import { Score } from "./elements/Score";
import { Used } from "./elements/Used";
import { getPassword } from "./HangManSlice";
import { Password } from "./elements/Password";
import { Panel } from "./elements/Panel";

export const HangMan = () => {
    const [chartState, setChartState] = useState([])
    const [flag, setFlag] = useState(false)
    const [map, setMap] = useState([])
    const [input, setInput] = useState('')
    const { password, misstake, usedChart } = useSelector((store) => store.hangman)
    const dispatch = useDispatch()

    const passwordString = String(password).length
    const chartArray = []
    let maps = []

    useEffect(() => {
        misstake === 10 && setTimeout(() => restartGameLost(), 500)
        // eslint-disable-next-line
    }, [misstake])

    const startHangMan = () => {
        for(let i = 0; i < passwordString; i++){
            chartArray.push({pass: password[0][i].toUpperCase(), id: i})
            maps.push({pass: '_', id: i})
        }
        setMap(maps)
        setFlag(!flag)
        return setChartState(chartArray)
    }

    const check = () => {
        const checkChart = usedChart.some(chart => chart === input)
        if(checkChart && input !== ''){
            alert(`You have already used '${input}'`)
            return setInput('')
        }else{
            dispatch(usedCharts(input))
        }
        chartState.forEach(chart => {
            if(chart.pass === input){
                map[chart.id].pass = input
                setMap([...map, map[chart.id].pass = input])
            }
        })
        winGame()
        input && checkError(input)
        setInput('')    
    }
    
    const checkError = (input) => {
        const checkError =  chartState.some(chart => chart.pass === input)
        !checkError && dispatch(increaseError())
    }

    const restartGameLost = () => {
        setMap([])
        setFlag(!flag)
        dispatch(decrease())
        dispatch(restart())
        dispatch(getPassword())
        return alert('You lost')
    }
    
    const winGame = () => {
        const win = map.every(item => item.pass !== '_')
        if(win){
            setTimeout(() => restartGameWin(), 300)
        }
    }

    const restartGameWin = () => {
        setMap([])
        setFlag(!flag)
        dispatch(increaseWins())
        dispatch(restart())
        dispatch(getPassword())
        return alert('You win')
    }

    return (
        <>
            <Score />
            <div className="hangman-container">
                <h1 className="hangman-title">Simple Hangman: React + Redux</h1>
                <HangManBody misstake={misstake}/>
                <Panel 
                input={input}
                setInput={setInput}
                startHangMan={startHangMan}
                flag={flag}
                check={check}
                />
                <Password map={map}/>
            </div>
            <Used usedChart={usedChart}/>
        </>
    )
}