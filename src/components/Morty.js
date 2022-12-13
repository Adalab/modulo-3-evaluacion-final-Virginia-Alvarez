const Morty  = ()=>{
    return(
        <div className="cartoonContainerMorty">
          <div className="morty-container">
    <div className="head-container">
      <div className="head">
        <div className="brows-container">
          <div className="left brow"></div>
          <div className="right brow"></div>
        </div>
        <div className="eyes-container">
          <div className="left eye">
            <div className="pupil"></div>
          </div>
          <div className="right eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div className="nose"></div>
        <div className="mouth-container">
          <div className="mouth"></div>
        </div>
      </div>
      <div className="ear-container">
        <div className="left ear"></div>
        <div className="right ear"></div>
      </div>
      <div className="hair-container">
        <div className="hair"></div>
      </div>
    </div>
    <div className="body-container">
      <div className="body"></div>
    </div>
  </div>
        </div>
    )
}

export default Morty;