import "./second-aside.css";
function SecondAside() {
  return (
    <>
      <div className="second-aside">
        <div style={{ height: "76vh", overflow: "hidden" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_PK0sBNiueE?autoplay=1&loop=1&playlist=_PK0sBNiueE&mute=1&controls=0&modestbranding=1&showinfo=0"
            title="Harris J - O Allah"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default SecondAside;
