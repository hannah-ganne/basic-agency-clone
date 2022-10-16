import { VideoContainer, Video, CursorDot, CursorLogo, CursorYear } from "../styles/VideoSection"
import mainReel from '../assets/videos/reel-loop.mp4'
import { useRef, useEffect } from 'react'
import logo from '../assets/images/logo.svg'

export default function VideoSection() {
    const container = useRef(null)

    function Cursor() {
        const dot = useRef(null)
        const dotLogo = useRef(null)
        const dotYear = useRef(null)
    
        const cursorVisible = useRef(true)
        const cursorEnlarged = useRef(false)
        const endX = useRef(window.innerWidth / 2)
        const endY = useRef(window.innerHeight / 2)
    
        const toggleCursorVisibility = () => {
            if (cursorVisible.current) {
                dot.current.style.opacity = 1
                dotLogo.current.style.opacity = 1
                dotYear.current.style.opacity = 1
            } else {
                dot.current.style.opacity = 0
                dotLogo.current.style.opacity = 0
                dotYear.current.style.opacity = 0
            }
        }
    
        const toggleCursorSize = () => {
            if (cursorEnlarged.current) {
                dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
            } else {
                dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
            }
        }
    
        const mouseOverEvent = () => {
            cursorEnlarged.current = true
            toggleCursorSize()
        }
    
        const mouseOutEvent = () => {
            cursorEnlarged.current = false
            toggleCursorSize()
        }
    
        const mouseEnterEvent = () => {
            cursorVisible.current = true
            toggleCursorVisibility()
        }
    
        const mouseLeaveEvent = () => {
            cursorVisible.current = false
            toggleCursorVisibility()
        }
    
        const mouseMoveEvent = (e) => {
            cursorVisible.current = true
            toggleCursorVisibility()
            endX.current = e.pageX
            endY.current = e.pageY
    
            dot.current.style.top = endY.current + 'px'
            dot.current.style.left = endX.current + 'px'
            dotLogo.current.style.top = (endY.current + 80) + 'px'
            dotLogo.current.style.left = (endX.current) + 'px'
            dotYear.current.style.top = (endY.current + 100) + 'px'
            dotYear.current.style.left = (endX.current) + 'px'
        }
    
        useEffect(() => {
            const containerEl = container.current
            containerEl.addEventListener('mousedown', mouseOverEvent)
            containerEl.addEventListener('mouseup', mouseOutEvent)
            containerEl.addEventListener('mousemove', mouseMoveEvent)
            containerEl.addEventListener('mouseenter', mouseEnterEvent)
            containerEl.addEventListener('mouseleave', mouseLeaveEvent)
        
            return () => {
                containerEl.addEventListener('mousedown', mouseOverEvent)
                containerEl.addEventListener('mouseup', mouseOutEvent)
                containerEl.addEventListener('mousemove', mouseMoveEvent)
                containerEl.addEventListener('mouseenter', mouseEnterEvent)
                containerEl.addEventListener('mouseleave', mouseLeaveEvent)
            }
        }, [])

        return (
            <>
                <CursorDot ref={dot}>
                    Play Reel
                </CursorDot>
                <CursorLogo ref={dotLogo} src={logo} />
                <CursorYear ref={dotYear}>
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