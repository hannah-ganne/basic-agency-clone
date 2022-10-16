import { SliderWrap, Slider, SliderInner, SliderItem, ClientLogo, ClientTitle, ClientDetail, ProgressBar, ProgressBarInner, SliderCursor } from "../styles/Slider"
import { useRef, useEffect, useState } from 'react'
import google from '../assets/images/google-dark.svg'
import kfc from '../assets/images/KFC-Logo.svg'
import wilson from '../assets/images/Wilson-Logo.svg'
import ATT from '../assets/images/ATT-Logo.svg'
import patagonia from '../assets/images/patagonia-dark.svg'

export default function ClientsSlider() {
    const container = useRef(null)
    const sliderInner = useRef(null)
    const slider = useRef(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    let sliderGrabbed = false

    const scrollEvent = () => {
        setScrollPercentage(100 * slider.current.scrollLeft / (slider.current.scrollWidth - slider.current.clientWidth))  
    }

    const mouseDownEvent = () => {
        sliderGrabbed = true
    }

    const mouseUpEvent = () => {
        sliderGrabbed = false
    }

    const mouseLeaveEvent = () => {
        sliderGrabbed = false
    }

    const mouseMoveEvent = (e) => {
        if (sliderGrabbed) {
            slider.current.scrollLeft -= e.movementX
        }
    }

    // const wheelEvent = (e) => {
    //     e.preventDefault()
    //     slider.current.scrollLeft += e.deltaY
    // }

    useEffect(() => {
        const sliderInnerEl = sliderInner.current
        const sliderEl = slider.current
        sliderEl.addEventListener('scroll', scrollEvent)
        sliderInnerEl.addEventListener('mousedown', mouseDownEvent)
        sliderInnerEl.addEventListener('mouseup', mouseUpEvent)
        sliderInnerEl.addEventListener('mouseleave', mouseLeaveEvent)
        sliderInnerEl.addEventListener('mousemove', mouseMoveEvent)
        // sliderInnerEl.addEventListener('wheel', wheelEvent)

        return (() => {
            sliderEl.addEventListener('scroll', scrollEvent)
            sliderInnerEl.addEventListener('mousedown', mouseDownEvent)
            sliderInnerEl.addEventListener('mouseup', mouseUpEvent)
            sliderInnerEl.addEventListener('mouseleave', mouseLeaveEvent)
            sliderInnerEl.addEventListener('mousemove', mouseMoveEvent)
            // sliderInnerEl.addEventListener('wheel', wheelEvent)
        })
    }, [])

    function Cursor() {
        const dot = useRef(null)
    
        const [cursorVisible, setCursorVisible] = useState(true)
        const [cursorSmaller, setCursorSmaller] = useState(false)
        const [endX, setEndX] = useState(window.innerWidth / 2)
        const [endY, setEndY] = useState(window.innerHeight / 2)
        // const [endX, setEndX] = useState(window.innerWidth / 2)
        // const [endY, setEndY] = useState(window.innerHeight / 2)
    
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
        }, [container])

        return (
            <>
                <SliderCursor
                    ref={dot}
                    top={`${endY}px`}
                    left={`${endX}px`}
                    opacity={cursorVisible}
                    transform={cursorSmaller}
                >
                    {cursorSmaller ? '' : 'Drag'}
                </SliderCursor>
            </>
        )
    }


    return (
        <>
        <SliderWrap ref={container}>
            <Slider ref={slider}>
                <SliderInner ref={sliderInner}>
                    <SliderItem>
                        <ClientLogo src={google} />
                        <ClientTitle>Google</ClientTitle>   
                        <ClientDetail>
                            Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership     
                        </ClientDetail>    
                    </SliderItem>
                    <SliderItem>
                        <ClientLogo src={kfc} />
                        <ClientTitle>KFC</ClientTitle>   
                        <ClientDetail>
                                An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC's brand story to life while making it easier for customers to buy chicken. Learn more about our partnership
                        </ClientDetail>                             
                    </SliderItem>
                    <SliderItem>
                        <ClientLogo src={wilson} />
                        <ClientTitle>Wilson</ClientTitle>   
                        <ClientDetail>
                            A reimagining of Wilson's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand's 108-year history. Read our full case study 
                        </ClientDetail>     
                    </SliderItem>
                    <SliderItem>
                        <ClientLogo src={ATT} />
                        <ClientTitle>AT&T</ClientTitle>   
                        <ClientDetail>
                            Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.
                        </ClientDetail>     
                    </SliderItem>
                    <SliderItem>
                        <ClientLogo src={patagonia} />
                        <ClientTitle>Patagonia</ClientTitle>   
                        <ClientDetail>
                            Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study 
                        </ClientDetail>     
                    </SliderItem>
                </SliderInner>
            </Slider>    
        </SliderWrap>
        <ProgressBar>
            <ProgressBarInner percentage={scrollPercentage >= 86 ? '86%' : `${scrollPercentage}%`} />
        </ProgressBar>
        <Cursor />
        </>
    )
}