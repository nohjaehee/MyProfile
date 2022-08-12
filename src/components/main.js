import "../css/main.css";
import myImg from '../img/profile3.png' 




export default function Main() {
  return (
    <main className="mainWrap" style={{ padding: "1rem 0" }}>
      
      <div className="imgWrap" >
      <img src={myImg} alt="icon" className="profileImg"  />
      </div>
      <div className="homeDesc">
        <h2>I'm a Front-end Developer.</h2>
        <ul class="introWrap">
            <li>
              fueled by coffee
              <span className="introDesc" aria-label="cheese" role="img">☕</span> 
            </li>
            <li>
              based in the Korea
            <span className="introDesc" aria-label="cheese" role="img">🌎</span>
            </li>
            <li>
              jhrho1@hanmail.net
              <span className="introDesc" aria-label="cheese" role="img">📧</span> 
            </li>
            <li>
              
            </li>
          </ul>
      </div>

      
    </main>
  );
}
