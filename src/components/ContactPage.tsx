import './ContactPage.css';

interface Contact {
  id: number;
  name: string;
  phone: string;
  avatar?: string;
}

const contactsData: Contact[] = [
  {
    id: 1,
    name: "Anwar Nasir",
    phone: "+251 917 413 622",
    avatar: "https://avatars.githubusercontent.com/u/your-github-id"
  },
];

interface ContactPageProps {
  onNavigateHome?: () => void;
}

function ContactPage({ onNavigateHome }: ContactPageProps) {
  return (
    <div className="contact-page">
      <div className="contact-header">
        {onNavigateHome && (
          <button onClick={onNavigateHome} className="contact-back-button">
            &larr; Back
          </button>
        )}
        <h1 className="contact-title">Contacts</h1>
      </div>
      <div className="contact-list">
        {contactsData.map((contact) => (
          <div key={contact.id} className="contact-item">
            <img
              src={contact.avatar || "https://via.placeholder.com/50"}
              alt={contact.name}
              className="contact-avatar"
            />
            <div className="contact-details">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-phone">{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
