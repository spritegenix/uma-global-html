import Link from 'next/link';

export default function Services1() {
  return (
    <>
      <section className="section mt-100" style={{ overflow: 'hidden' }}>
        <div className="container">
          <h2 className="title-favicon mb-20 ">What We Offer</h2>
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8 mb-30">
              <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                UMA Global Express provides{' '}
                <strong>fast, reliable, and efficient </strong>
                logistics solutions through{' '}
                <strong>
                  Air, Rail, and Multimodal transport services
                </strong>{' '}
                across the world.
              </p>
            </div>
            {/* <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start">
              <Link
                className="btn btn-brand-1 hover-up"
                href="/request-a-quote"
              >
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
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  ></path>
                </svg>
                Get a Quote
              </Link>
            </div> */}
          </div>
          <div className="mt-20 box-background-offer">
            <div className="bg-under" />
            <div className="row">
              {/* Air Freight */}
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/plane.png"
                      alt="Air Freight"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      Air Freight Services
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      Speed and security for international and domestic
                      shipments, with priority and express options.
                    </p>
                    {/* <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Rail Freight */}
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/train.png"
                      alt="Rail Freight"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      Rail Freight Services
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      Cost-effective, large-scale cargo movement across the
                      country with safe and efficient rail logistics.
                    </p>
                    {/* <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Multimodal Transport */}
              <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/worldwide.png"
                      alt="Multimodal Transport"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      Multimodal Transport
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      Seamless integration of Air, Rail, and Road for optimized
                      shipping and logistics solutions.
                    </p>
                    {/* <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Land Transportation */}
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/delivery.png"
                      alt="Land Transport"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">Land Transportation</h5>
                    <p className="font-sm color-grey-900 mb-35">
                      Reliable trucking services for door-to-door delivery and
                      last-mile logistics.
                    </p>
                    <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Warehousing & Distribution */}
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/forklift.png"
                      alt="Warehousing"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      Warehousing & Distribution
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      Secure storage and strategic distribution centers to
                      streamline logistics operations.
                    </p>
                    <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Cross-Border Logistics */}
              {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage1/worldwide.png"
                      alt="Cross Border"
                    />
                  </div>
                  <div className="card-info">
                    <h5 className="color-brand-2 mb-15">
                      Cross Border Logistics
                    </h5>
                    <p className="font-sm color-grey-900 mb-35">
                      International freight forwarding with customs clearance
                      support for hassle-free global trade.
                    </p>
                    <div className="box-button-offer mb-30">
                      <a className="btn btn-link font-sm color-brand-2">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
