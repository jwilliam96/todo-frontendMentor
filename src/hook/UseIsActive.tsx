import { useState } from "react"

export default function UseIsActive(initial: boolean) {
    const [isActive, setIsActive] = useState(initial)

    const handlerIsActive = () => {
        setIsActive(prev => !prev)
    }

    return [isActive, handlerIsActive] as const
}
