import { useLayoutEffect, useState, FC } from 'react'


export const UseResolution = () => {

    const [size, setSize] = useState<Array<number>>([0, 0])
    useLayoutEffect(() => {
        const sizeListening = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", sizeListening)
        sizeListening()
        return () => window.removeEventListener("resize", sizeListening)
    }, []);

    return size;

}