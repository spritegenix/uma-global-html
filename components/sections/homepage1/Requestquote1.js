import { useEffect, useState } from 'react';
import CountUp from '@/components/elements/CounterUp';
import Link from 'next/link';

export default function Requestquote1() {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName('counterUp');
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="section bg-leading-company pt-95">
        <div className="box-bg-leading" />
        <div className="container">
          <div className="text-center mb-45">
            <h2 className="color-brand-1 mb-15 wow animate__animated animate__fadeIn">
              Delivering Excellence in Logistics for Over 20 Years
            </h2>
            <p className="font-md color-white wow animate__animated animate__fadeIn">
              Trusted by businesses worldwide, UMA Global Express provides{' '}
              <strong>fast, secure, and reliable shipping solutions</strong>.
              Our commitment to{' '}
              <strong>efficiency and customer satisfaction</strong> drives our
              success.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="cardLeadingCompany">
                <div className="cardImage">
                  <span className="img wow animate__animated animate__fadeIn">
                    <img
                      src="/assets/imgs/page/homepage1/handover.png"
                      alt="Parcels Delivered"
                    />
                  </span>
                </div>
                <div className="cardInfo">
                  <h3 className="color-brand-1 wow animate__animated animate__fadeIn">
                    <span>+</span>
                    <span className="counterUp">
                      {inViewport && <CountUp end={500000} duration={10} />}
                    </span>
                  </h3>
                  <p className="font-lg color-white wow animate__animated animate__fadeIn">
                    Parcels Delivered Safely
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="cardLeadingCompany">
                <div className="cardImage">
                  <span className="img">
                    <img
                      src="/assets/imgs/page/homepage1/cities.png"
                      alt="Cities Covered"
                    />
                  </span>
                </div>
                <div className="cardInfo">
                  <h3 className="color-brand-1 wow animate__animated animate__fadeIn">
                    <span>+</span>
                    <span className="count">
                      {inViewport && <CountUp end={1200} duration={10} />}
                    </span>
                  </h3>
                  <p className="font-lg color-white wow animate__animated animate__fadeIn">
                    Cities Covered Worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="cardLeadingCompany">
                <div className="cardImage">
                  <span className="img">
                    <img
                      src="/assets/imgs/page/homepage1/client.png"
                      alt="Happy Customers"
                    />
                  </span>
                </div>
                <div className="cardInfo">
                  <h3 className="color-brand-1 wow animate__animated animate__fadeIn">
                    <span>+</span>
                    <span className="count">
                      {inViewport && <CountUp end={10000} duration={10} />}
                    </span>
                  </h3>
                  <p className="font-lg color-white wow animate__animated animate__fadeIn">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="cardLeadingCompany">
                <div className="cardImage">
                  <span className="img">
                    <img
                      src="/assets/imgs/page/homepage1/company.png"
                      alt="Businesses Served"
                    />
                  </span>
                </div>
                <div className="cardInfo">
                  <h3 className="color-brand-1 wow animate__animated animate__fadeIn">
                    <span>+</span>
                    <span className="count">
                      {inViewport && <CountUp end={750} duration={10} />}
                    </span>
                  </h3>
                  <p className="font-lg color-white wow animate__animated animate__fadeIn">
                    Businesses Served
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-form-contact-leading">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="title-favicon color-brand-2 mb-15">
                  Calculate Your Shipping Cost
                </h2>
                <p className="font-md color-grey-700 mb-25">
                  Please fill in the details below to get an estimate for your
                  shipment.
                </p>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Select Service Type</option>
                        <option value="Air Freight">Air Freight</option>
                        <option value="Rail Transport">Rail Transport</option>
                        <option value="Express Delivery">
                          Express Delivery
                        </option>
                        <option value="Multimodal Shipping">
                          Multimodal Shipping
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Dimensions (cm³)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Weight (kg)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Pickup Location</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Kolkata">Kolkata</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Delivery Destination</option>
                        <option value="Dubai">Dubai</option>
                        <option value="London">London</option>
                        <option value="New York">New York</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Type of Goods</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Automobile Parts">
                          Automobile Parts
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value>Quantity</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Additional Instructions (Optional)"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <strong className="font-sm-bold color-grey-900">
                        Extra Services
                      </strong>
                      <div className="row mt-10 box-cb-form">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input className="cd-form" type="checkbox" />{' '}
                            Express Delivery (+₹3,000)
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input className="cd-form" type="checkbox" /> Add
                            Insurance (+₹1,500)
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input className="cd-form" type="checkbox" /> Secure
                            Packaging (+₹1,000)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <Link className="btn btn-brand-1-big mr-25" href="#">
                      <svg
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
                          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                        ></path>
                      </svg>
                      Calculate Cost
                    </Link>
                    <Link className="btn btn-link-medium" href="/contact">
                      Contact Us
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-image-contact">
                  <img
                    src="/assets/imgs/page/homepage1/img-contact.png"
                    alt="Shipping Estimate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
