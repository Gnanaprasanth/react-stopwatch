import React,{useState,useRef,useEffect} from 'react';

export default function Stopwatch() {

    const [isRunning,setIsRunning]=useState(false)
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervalIdref=useRef(null);
    const startTimerRef=useRef(0);

    useEffect(()=>
    {
        if(isRunning){
        intervalIdref.current=    setInterval(()=>{
                setElapsedTime(Date.now()-startTimerRef.current)
            },10)
        }
        return()=>{
            clearInterval(intervalIdref.current)

        }

    },[isRunning])

    function start(){
        setIsRunning(true)
        startTimerRef.current=Date.now()-elapsedTime;
    }

function stop(){
    setIsRunning(false)
}
    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){
        let minutes=Math.floor(elapsedTime/(1000*60)%60)
        let seconds=Math.floor(elapsedTime/(1000)%60)
        let milliseconds=Math.floor((elapsedTime%1000)/10)

        minutes=String(minutes).padStart(2,"0");
        
        seconds=String(seconds).padStart(2,"0");
        
        milliseconds=String(milliseconds).padStart(2,"0");
        
        return `${minutes}:${seconds}:${milliseconds}`;
    }

  return (
    <div className='Stopwatch'>
        <div className="display">
            {formatTime()}</div>
            <div>
            <button className='start' onClick={start}>Start</button>
        <button className='stop' onClick={stop}>Stop</button>
        <button className= 'reset'onClick={reset}>Reset</button>
        </div>
 
        </div>
  )
}
