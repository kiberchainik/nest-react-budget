export function getTokenFromLS():string {
    const data = localStorage.getItem('token')
    const token = data ? JSON.parse(data) : ''

    return token
}

export function setTokenToLS(key:string, token:string):void {
    localStorage.setItem(key, JSON.stringify(token))
}

export function removeTokenFromLS(key:string):void {
    localStorage.removeItem(key)
}