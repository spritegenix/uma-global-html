import Link from 'next/link';

export default function Info1() {
  return (
    <>
      <div id="Delivering"></div>
      <section className="section mt-85">
        <div className="container">
          <div className="text-center">
            <img
              className="mb-15"
              src="/assets/imgs/template/icons/favicon.svg"
              alt="UMA Global Express"
            />
            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
              Delivering Excellence in Logistics & Transportation
            </p>
            <h2 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn">
              A Global Network Built on
              <br className="d-none d-lg-block" />
              Reliability & Innovation
            </h2>
          </div>
          <div className="row mt-50 align-items-center">
            <div className="col-xl-7 col-lg-6 mb-30">
              <div className="box-images-pround">
                <div className="box-images wow animate__animated animate__fadeIn">
                  <img
                    className="img-main"
                    src="/assets/imgs/page/homepage1/img1.png"
                    alt="Modern Logistics"
                  />
                  <div className="image-2 shape-3">
                    <img
                      src="/assets/imgs/page/homepage1/icon1.png"
                      alt="Tech-Driven Logistics"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mb-30">
              <div className="box-info-pround">
                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                  Fast, Reliable & Technology-Driven Shipping
                </h3>
                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">
                  At <strong>UMA Global Express</strong>, we leverage
                  <strong> cutting-edge logistics technology</strong> and a
                  <strong> global network</strong> to provide
                  <strong> seamless, fast, and secure</strong> shipping
                  solutions. Our commitment to{' '}
                  <strong>efficiency and customer satisfaction</strong>
                  ensures that your cargo reaches its destination on time.
                </p>
                <div className="mt-30">
                  <ul className="list-ticks">
                    <li className="wow animate__animated animate__fadeIn flex">
                      <div>
                        {' '}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>{' '}
                      <div>
                        <strong>Real-Time Shipment Tracking</strong>
                      </div>
                    </li>
                    <li className="wow animate__animated animate__fadeIn flex">
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <strong>Custom Freight Solutions</strong>
                    </li>
                    <li className="wow animate__animated animate__fadeIn flex">
                      <div>
                        {' '}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        {' '}
                        <strong>
                          Multi-Modal Transportation (Air, Rail & Road)
                        </strong>
                      </div>
                    </li>
                    <li className="wow animate__animated animate__fadeIn flex">
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <strong>Advanced Warehousing & Distribution</strong>
                    </li>
                    <li className="wow animate__animated animate__fadeIn flex">
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <strong>Cross-Border & International Shipping</strong>
                    </li>
                    <li className="wow animate__animated animate__fadeIn flex">
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <strong>AI-Powered Logistics & Smart Routing</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
