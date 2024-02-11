
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
            <div className="flex gap-1 p-2 bg-[#282b36]  text-white">
                <div className="bg-rose-500 px-3 py-3 rounded-[100%] text-xl font-bold "> {storedUser.substring(0,2).toUpperCase()} </div>
                <button onClick={handleLogout} className="p-3 bg-rose-600 w-full rounded-[15px]  font-medium">Logout</button>
            </div>
            <div className="background w-full" style={{ fontFamily: 'quicksand' }}>
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