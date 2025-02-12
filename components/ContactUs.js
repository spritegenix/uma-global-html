import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div>
      <section className="section">
        <div className="container position-relative">
          <div className="box-cover-contactform">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="box-contactform-left">
                  <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                    Still have question?
                  </h3>
                  <p className="font-md color-grey-900 mb-50 wow animate__animated animate__fadeIn">
                    Can’t find the answer you are looking for? Please chat to
                    our friendly team.
                  </p>
                  <ContactForm />
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 position-relative">
                <div className="box-contactform-right">
                  <h5 className="color-brand-2 mb-35 wow animate__animated animate__fadeIn">
                    Headquarters
                  </h5>
                  <div className="map-info">
                    <img
                      className="mb-25 wow animate__animated animate__fadeIn"
                      src="/assets/imgs/template/logo.svg"
                      alt="transp"
                    />
                    <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                    <p className="color-grey-700 mb-10 wow animate__animated animate__fadeIn">
                      <svg
                        className="icon-16 mr-10 color-brand-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Phone: +01-246-357 (Any time 24/7)
                    </p>
                    <p className="color-grey-700 mb-30 wow animate__animated animate__fadeIn">
                      <svg
                        className="icon-16 mr-10 color-brand-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      Email: info@uma.com
                    </p>
                    <div className="line-border mb-25" />
                    <p className="color-grey-700 font-md-bold wow animate__animated animate__fadeIn">
                      Hours: 8:00 - 17:00, Mon - Sat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
