import { useEffect, useState } from "react";

function VerificationPage() {
  const [status, setStatus] = useState("loading"); 
  // "loading" | "success" | "expired" | "invalid" | "already_used" | "error"
  const [bookingLink, setBookingLink] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) {
      setStatus("invalid");
      return;
    }

    // Call backend verify API
    fetch(`/api/verify?token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          // backend sends message or reason
          if (data.reason === "Token expired") setStatus("expired");
          else if (data.reason === "Invalid token") setStatus("invalid");
          else if (data.reason === "Token already used") setStatus("already_used");
          else setStatus("error");
        } else {
            fetch('/api/generate-booking-link',{method:'POST',credentials:'include'})
            .then(res=>res.json())
            .then(data=>{
                if(!data.ok)
                    setStatus(data.message);
                else{
                    setBookingLink(data.bookingLink);
                    setStatus("success");
                }
            })
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="form-page">
      <div className="form-page-card">
        {/* Title */}
        <h1>
          {status === "loading" && "Verifying your business…"}
          {status === "success" && "Verification Successful"}
          {status === "expired" && "Link Expired"}
          {status === "invalid" && "Invalid Verification Link"}
          {status === "already_used" && "Link Already Used"}
          {status === "error" && "Something went wrong"}
        </h1>

        {/* Subtitle */}
        <p className="form-page-subtitle">
          {status === "loading" && "Please wait a moment…"}
          {status === "success" && "Your email has been verified successfully!"}
          {status === "expired" && "Your verification link has expired. Please request a new one."}
          {status === "invalid" && "This verification link is not valid."}
          {status === "already_used" && "This link was used already. Verification is complete."}
          {status === "error" && "We couldn't verify your account. Try again later."}
        </p>

        {/* SUCCESS → SHOW BOOKING LINK */}
        {status === "success" && bookingLink && (
          <div className="form-group">
            <label>Your Booking Link</label>
            <div className="input-wrapper">
              <span className="input-icon">link</span>
              <input
                type="text"
                value={(status === "success" && bookingLink) ?bookingLink:''}
                readOnly
                onClick={(e) => e.target.select()}
              />
            </div>
            <span className="hint">Share this link with your customers.</span>
          </div>
        )}

        {/* Button for retry / home */}
        {(status === "expired" ||
          status === "invalid" ||
          status === "already_used" ||
          status === "error") && (
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/")}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}

export default VerificationPage;
