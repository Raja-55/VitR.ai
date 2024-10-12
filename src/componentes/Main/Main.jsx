import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
        <div className='main'>
          <div className='nav'>
            <p></p>
            <img src= {assets.vitR_icon} className="icon"alt=''/>
          </div>
          <div className="main-container">
            {
              !showResult
            ?<>
              <div className="greet">
              <p><span>Hello, I'm vitR.AI</span></p>
              <p> How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <img src= { assets.compass_icon} alt=''/>
                <p> Suggest beautiful places to see on an upcoming road trip</p>

              </div>
              <div className="card">
                <img src= { assets.bulb_icon} alt=''/>
                <p>Briefly summarize this concept: urban planning</p>

              </div>
              <div className="card">
                <img src= { assets.message_icon} alt=''/>
                <p>Brainstorm team bording activities for our work retreat</p>
              </div>
              <div className="card">
                <img src= { assets.code_icon} alt=''/>
                <p>Improve the readability of the following code</p>
              </div>
            </div>
            </>
            :<div className='result'>
              <div className="reslt-tittle">
                <img src={assets.vitR_icon} alt=''/>
                <p>{recentPrompt}</p>
              </div>
        
              <div className="result-data">
                <img src= {assets.load_icon} alt=''/>
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
            </div>
            }

            <div className="main-bottom">
              <div className="search-box">
                <input  onChange = {(e) =>setInput(e.target.value)} value={input} placeholder='Search any prompt here'/>
                <div>
                  <img src={ assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img  onClick={()=>onSent()}src={assets.send_icon} alt="" />
                </div>
              </div>
              <p className="bottom-info">
                Improve Knowledge with vitR.AI
              </p>
            </div>  
          </div>
        </div>
  )
}

export default Main