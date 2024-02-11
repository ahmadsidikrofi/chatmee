'use client'
import { PrettyChatWindow } from "react-chat-engine-pretty"
const LetsChat = ({ user }) => {
    const local = localStorage.getItem('username')
    return (
        <>
            <p>{local}</p>
            <div className="background" style={{ fontFamily: 'Avenir' }}>
                <PrettyChatWindow 
                    projectId="4bd8149f-c578-4029-b452-d8ee9b40cf7d"
                    username={user.username}
                    secret={user.secret}
                />
            </div>
        </>
    )
}
export default LetsChat