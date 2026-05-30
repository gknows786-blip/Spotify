function Card(props) {
    return(
        <>
        <button className={props.sty}><img style={{height: "100%", borderRadius: "10px"}} src={props.pic} alt="" /></button>
        
        </>
    )
}
export default Card