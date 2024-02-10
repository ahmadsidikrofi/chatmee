import axios from "axios"
export async function POST (request) {
    const { username } = await request.json()
    try {
        const res = await axios.put('https://api.chatengine.io/users/', 
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "79bcf854-8e9c-448a-914a-d797ec79b42a" } }
        )
        return Response.json(res.data);
    } catch (err) {
        console.log("error: ", err)
    }
}