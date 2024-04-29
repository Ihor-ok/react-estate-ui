import { useState } from 'react'
import './chat.scss'

function Chat() {
    const [chat, setChat] = useState(true)


    return (
        <div className="chat">
            <div className="massages">
                <h1>Massages</h1>
                <div className="massage">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jon Doe</span>
                    <p>
                        Lorem ipsum dolor sit, amet...
                    </p>
                </div>
                <div className="massage">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jon Doe</span>
                    <p>
                        Lorem ipsum dolor sit, amet...
                    </p>
                </div>
                <div className="massage">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jon Doe</span>
                    <p>
                        Lorem ipsum dolor sit, amet...
                    </p>
                </div>
                <div className="massage">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jon Doe</span>
                    <p>
                        Lorem ipsum dolor sit, amet...
                    </p>
                </div>
                <div className="massage">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jon Doe</span>
                    <p>
                        Lorem ipsum dolor sit, amet...
                    </p>
                </div>
            </div>
            {chat && <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        John Doe
                    </div>
                    <span className='close' onClick={()=>{setChat(null)}}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>1 hor ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>1 hor ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>1 hor ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>1 hor ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>1 hor ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat