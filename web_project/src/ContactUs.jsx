import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <div className="contact-message">
          <p>
            For clarifications, technical support, or any questions about how the I-Cane and its services work, you can contact us through the following channels:
          </p>
          
          <div className="contact-info">
            <div className="contact-section">
              <h3>Email Support</h3>
              <p><strong>General Support Email:</strong> <a href="mailto:support@i-cane.com">support@i-cane.com</a></p>
              <p><strong>Technical Email (Faults/Warranty):</strong> <a href="mailto:technical@i-cane.com">technical@i-cane.com</a></p>
            </div>
            
            <div className="contact-section">
              <h3>Social Media (Direct Messages)</h3>
              <p><strong>Facebook:</strong> <a href="https://facebook.com/ICaneGlobal" target="_blank" rel="noopener noreferrer">@ICaneGlobal</a></p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/AutonomousGuidance" target="_blank" rel="noopener noreferrer">@AutonomousGuidance</a></p>
            </div>
            
            <div className="contact-section">
              <h3>Website</h3>
              <p>You can use our contact form at <a href="https://www.i-cane.com/contact" target="_blank" rel="noopener noreferrer">www.i-cane.com/contact</a></p>
            </div>
          </div>
          
          <div className="closing-message">
            <p><strong>We will be happy to help you with any questions you may have!</strong></p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ContactUs
