import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PaymentSuccessModal({ show, onClose }) {
  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [show]);
  if (!show) return null;
  return (
    <div className="modal fade show" style={{
      display: 'block',
      background: 'rgba(0,0,0,0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1050,
      overflow: 'hidden'
    }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered" style={{ minHeight: '100vh' }}>
        <div className="modal-content text-center p-4">
          <div className="mb-3" style={{ overflow: 'visible' }}>
            <div className="tick-animation" style={{ overflow: 'visible', display: 'inline-block' }}>
              <svg width="80" height="80" viewBox="0 0 80 80" style={{ display: 'block', overflow: 'visible' }}>
                <circle cx="40" cy="40" r="35" fill="#e6ffe6" stroke="#28a745" strokeWidth="5" />
                <polyline
                  points="28,42 38,52 54,32"
                  fill="none"
                  stroke="#28a745"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 40,
                    strokeDashoffset: 40,
                    animation: 'tickmark 0.7s ease forwards'
                  }}
                />
              </svg>
            </div>
          </div>
          <h4 className="mb-2">Payment Successful!</h4>
          <p className="mb-3">Thank you for your purchase.</p>
          <button className="btn btn-success" onClick={onClose}>Close</button>
        </div>
      </div>
      <style>{`
        .tick-animation polyline {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: tickmark 0.7s ease forwards;
        }
        @keyframes tickmark {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
