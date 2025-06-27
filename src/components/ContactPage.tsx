import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <img
          src="https://avatars.githubusercontent.com/u/your-github-id" // Replace with your avatar or logo
          alt="Profile"
          className="contact-avatar"
        />
        <h2>Anwar Nasir</h2>
        <h4>Software Engineer</h4>
        <div className="contact-info">
          <p><strong>Address:</strong> Addis Ababa, Ethiopia</p>
          <p><strong>Email:</strong> anwarnasir0970@gmail.com</p>
          <p><strong>Phone:</strong> +251 917 413 622</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/anwar</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/anexdev1" target="_blank" rel="noopener noreferrer">github.com/anexdev1</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
