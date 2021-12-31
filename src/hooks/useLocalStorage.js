import {useState, useEffect} from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialVlaue) {
    const prefixedkey = PREFIX + key


    const [value, setValue] = useState(()=>{
        const jsonValue =localStorage.getItem(prefixedkey)
        if (jsonValue != null) return JSON.parse(jsonValue)
    
        if ( typeof initialVlaue === 'function'){
            return initialVlaue()
        }else{
            return initialVlaue
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    },[prefixedkey,value])

    return [value, setValue]
}


