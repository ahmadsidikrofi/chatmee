
import { PrettyChatWindow } from "react-chat-engine-pretty"
const ChatsPage = () => { 
    const storedUser = localStorage.getItem('username')
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('username')
        window.location.reload()
    }
    return (
        <>
            <button onClick={handleLogout} className="p-3 bg-rose-600 w-full text-white font-medium">Logout</button>
            <div className="background h-[100vh] w-full" style={{ fontFamily: 'quicksand' }}>
                <PrettyChatWindow 
                    projectId="4bd8149f-c578-4029-b452-d8ee9b40cf7d"
                    username={storedUser}
                    secret={storedUser}
                />
            </div>
        </>
    )

}
export default ChatsPage