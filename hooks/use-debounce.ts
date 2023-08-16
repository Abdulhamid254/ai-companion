// debounce hook is going to come in handy bcoz we do not want on every keystroke change to send many req to the db and this is going to prebvent this
import { useEffect, useState } from 'react';


export function useDebounce<T>(value: T, delay?:number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);


    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }

    },[value,delay]);


    return debounceValue;
}