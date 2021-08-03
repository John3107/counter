import React, {MouseEventHandler, useState} from 'react';
import s from './Counter.module.css';


function Counter() {
    let [score, setScore] = useState<number>(0);

    const scoreColor = (score === 5) ? s.ScoreboardRed : s.ScoreboardBlack

    return (
        <div className={s.Counter}>
            <div className={scoreColor}>
                <span className={s.totalScore}>{score}</span>
            </div>
            <div className={s.Buttons}>
                <button onClick={() => setScore(score + 1)} className={s.inc} disabled={score === 5}>inc</button>
                <button onClick={() => setScore(score = 0)} className={s.reset} disabled={score === 0}>reset</button>
            </div>
        </div>
    );
}


export default Counter
