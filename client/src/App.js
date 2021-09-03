import Header from "./layout/Header.js";
import Main from './layout/Main'
import Technologies from "./layout/Technologies.js";
import { useLayoutEffect, useRef, useState } from "react"
import Contact from "./layout/Contact.js";
import SideBar from "./layout/SideBar.js";
import SideButton from "./layout/SideButton.js";
import Projects from "./layout/Projects.js";


function App() {

  useLayoutEffect(() => {
    const updateWidth = () => {
      if(window.innerWidth <= 700) {
        setShowSideButton(true)
      } else if (window.innerWidth <= 700 &&
          !(window.scrollY > headerRef.current.clientHeight)) {
          setShowSideButton(false)
        }
    }
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const [showSideBar, setShowSideBar] = useState(false)
  const [showSideButton, setShowSideButton] = useState(window.innerWidth <= 700)

  const headerRef = useRef('')
  const mainRef = useRef('')  
  const techRef = useRef('')
  const projectRef = useRef('')
  const contactRef = useRef('')

  const onMainScroll = () => {
    mainRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  const onTechScroll = () => {
    techRef.current.scrollIntoView({ block: "center", behavior: "smooth" })
  }

  const onProjectScroll = () => {
		projectRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
	}

  const onContactScroll = () => {
    contactRef.current.scrollIntoView({ block: "end", behavior: "smooth" })
  }

  const toggleSideBar = () => {
    setShowSideBar((prevValue) => !prevValue)
  }

  if(!window.innerWidth <= 700) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY
      if (scrolled > headerRef.current.clientHeight) {
        setShowSideButton(true)
      } else {
        setShowSideButton(false)
      }
    })
  }

  return (
			<div className="App">
				<Header
					ref={headerRef}
					onContactScroll={onContactScroll}
					onTechScroll={onTechScroll}
					onProjectScroll={onProjectScroll}
					onMainScroll={onMainScroll}
				/>
				<SideButton
					in={showSideButton}
					showSideBar={showSideBar}
					onClick={toggleSideBar}
				/>
				<SideBar
					in={showSideBar && showSideButton}
          toggleSideBar={toggleSideBar}
					onContactScroll={onContactScroll}
					onTechScroll={onTechScroll}
					onProjectScroll={onProjectScroll}
					onMainScroll={onMainScroll}
				/>
				<Main ref={mainRef} />
				<Technologies ref={techRef} />
				<Projects ref={projectRef} />
				<Contact ref={contactRef} />
			</div>
		)
}

export default App;
