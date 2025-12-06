import './Hero.css'
import { Link} from 'react-router-dom'
export default function Hero(){
    return(
      <main className="landing-hero">
        <h1 className="hero-title">Appointment Booking</h1>

        <div className="animated-line" aria-hidden="true">
            <span className="word">made simple</span>
            <span className="word">in seconds</span>
            <span className="word">built for small businesses</span>
            <span className="word">and individuals</span>
        </div>

        <p className="hero-description">
            Minimal. Fast. Reliable — let customers pick times and get confirmed instantly.
            No clutter, no back-and-forth.
        </p>

        <Link to='/register' className="cta-primary">Get Booking Link</Link>
    </main>
    )
}