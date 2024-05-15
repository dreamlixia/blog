// 自定义hooks方式复用
import React, { useEffect, useState } from 'react'

function usePosition() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        setX(clientX)
        setY(clientY)
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return [
        {x, y}
    ]
}
// 使用
function Index() {
    const [ position ] = usePosition()
    return (
        <div>
            <p>x: {position.x}, y: {position.y}</p>
        </div>
    )
}

export default Index;