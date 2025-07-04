function Contact() {
    return (
        <>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe width="400" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=pune+(Nikhil%20Bhosale)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Calculateur de carte de population</a></iframe>
                    </figure>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form action="#" className="form" data-form>
                        <div className="input-wrapper">
                            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input/>
                            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input/>
                        </div>
                        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                        <button className="form-btn" type="submit" data-form-btn>
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </>
    )
}

export default Contact;