const API = 'http://localhost:3000/api/users'


export const Api = async() => {
const res = await fetch(API)
return await res.json()
}
 