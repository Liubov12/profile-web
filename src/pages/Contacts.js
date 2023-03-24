const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section__title">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="section_title-2">Location</h2>
            <p>London, United Kingdom</p>
          </li>
          <li className="content-list__item">
            <h2 className="section_title-2">Telephone</h2>
            <p>
              <a href="tel:+447778594480">+44 7778594480</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="section_title-2">Email</h2>
            <p>
              <a href="mailto:kovalliubov90@gmail.com">
                kovalliubov90@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
