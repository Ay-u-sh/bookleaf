import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import BookingPage from './pages/BookingPage/BookingPage'
import VerificationPage from './pages/VerificationPage/VerificationPage'
import VerifyRequestPage from './pages/VerifyRequestPage/VerifyRequestPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './pages/components/Navbar';
import Pricing from './pages/PricingPage/Pricing';
import BookingReceivedPage from './pages/BookingReceivedPage/BookingReceivedPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
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
        <Route path = '/verify-business' element = {<VerificationPage />} />
        <Route path = '/verify-request' element = {<VerifyRequestPage />} />
        <Route path= "/booking-received/:businessId" element={<BookingReceivedPage />} />
        <Route path = "*" element = {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
