import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Page</h1>
      <div className="ContactBox">
        <p>Feel free to reach out if you have any questions or suggestions about AtlasCountries!</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
