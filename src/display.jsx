import Aside from './Aside.jsx'
import Spotify from './spotify.jsx'
import SecondAside from "./second-aside.jsx"

function Display() {
    return(
        <>
        <div style={{display: "flex", gap: "10px"}}>
        <Aside/>
        <Spotify/>
        <SecondAside/>
        </div>
        </>
    )
}
export default Display