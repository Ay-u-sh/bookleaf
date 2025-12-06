import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import BookingPage from './pages/BookingPage/BookingPage'
import VerificationPage from './pages/VerificationPage/VerificationPage'
import VerifyRequestPage from './pages/VerificationRequestPage/VerifyRequest';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './pages/components/Navbar';
import Pricing from './pages/PricingPage/Pricing';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<LandingPage />} />
        <Route path  = '/pricing' element = {<Pricing />} />
        <Route path = '/register' element = {<RegistrationPage />} />
        <Route path = '/book/:businessId' element = {<BookingPage />} />
        <Route path = '/verify' element = {<VerificationPage />} />
        <Route path = '/verifyrequest' element = {<VerifyRequestPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
