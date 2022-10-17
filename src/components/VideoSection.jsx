import { VideoContainer, Video, CursorDot, CursorLogo, CursorYear } from "../styles/VideoSection"
import mainReel from '../assets/videos/reel-loop.mp4'
import { useRef, useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg'

export default function VideoSection() {
    const container = useRef(null)

    function Cursor() {
        const dot = useRef(null)
        const dotLogo = useRef(null)
        const dotYear = useRef(null)
    
        const [cursorVisible, setCursorVisible] = useState(true)
        const [cursorSmaller, setCursorSmaller] = useState(false)
        const [endX, setEndX] = useState(-100)
        const [endY, setEndY] = useState(-100)
    
        const mouseDownEvent = () => {
            setCursorSmaller(true)
        }
    
        const mouseUpEvent = () => {
            setCursorSmaller(false)
        }
    
        const mouseEnterEvent = () => {
            setCursorVisible(true)
        }
    
        const mouseLeaveEvent = () => {
            setCursorVisible(false)
        }
    
        const mouseMoveEvent = (e) => {
            e.preventDefault()
            setCursorVisible(true)

            setEndX(e.pageX)
            setEndY(e.pageY)
        }
    
        useEffect(() => {
            const containerEl = container.current
            containerEl.addEventListener('mousedown', mouseDownEvent)
            containerEl.addEventListener('mouseup', mouseUpEvent)
            containerEl.addEventListener('mousemove', mouseMoveEvent)
            containerEl.addEventListener('mouseenter', mouseEnterEvent)
            containerEl.addEventListener('mouseleave', mouseLeaveEvent)
        
            return () => {
                containerEl.addEventListener('mousedown', mouseDownEvent)
                containerEl.addEventListener('mouseup', mouseUpEvent)
                containerEl.addEventListener('mousemove', mouseMoveEvent)
                containerEl.addEventListener('mouseenter', mouseEnterEvent)
                containerEl.addEventListener('mouseleave', mouseLeaveEvent)
            }
        }, [])

        return (
            <>
                <CursorDot
                    ref={dot}
                    top={`${endY}px`}
                    left={`${endX}px`}
                    visible={cursorVisible ? 1 : 0}
                    smaller={cursorSmaller ? 0.75 : 1}
                >
                    Play Reel
                </CursorDot>
                <CursorLogo
                    ref={dotLogo}
                    src={logo}
                    top={`${endY+120}px`}
                    left={`${endX}px`}
                    visible={cursorVisible ? 1 : 0}
                    smaller={cursorSmaller ? 0.75 : 1}
                />
                <CursorYear
                    ref={dotYear}
                    top={`${endY+140}px`}
                    left={`${endX+25}px`}
                    visible={cursorVisible ? 1 : 0}
                >
                    2010-22
                </CursorYear>
            </>
        )
    }

    return (
        <>
            <VideoContainer ref={container}>
                <Video src={mainReel} autoPlay={true} muted={true} playsInline={true} loop={true} />
            </VideoContainer>
            <Cursor />
        </>
    )
}