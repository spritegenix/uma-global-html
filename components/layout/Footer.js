import Link from 'next/link';

export default function Footer1({}) {
  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 width-25 mb-30">
                <div className="mb-20">
                  <img
                    src="/assets/imgs/template/logo-footer.svg"
                    alt="UMA Global Express"
                  />
                </div>
                <p className="font-xs mb-20 color-white">
                  UMA Global Express offers seamless{' '}
                  <strong>
                    air, ocean, rail, and multimodal logistics solutions
                  </strong>
                  . Our services include{' '}
                  <strong>sourcing, warehousing, e-commerce fulfillment</strong>
                  , and value-added offerings like{' '}
                  <strong>kitting, assembly, and customized packaging</strong>{' '}
                  to meet diverse business needs.
                </p>
                <h6 className="color-brand-1">Follow Us</h6>
                <div className="mt-15">
                  <Link className="icon-socials icon-facebook" href="#" />
                  <Link className="icon-socials icon-instagram" href="#" />
                  <Link className="icon-socials icon-twitter" href="#" />
                  <Link className="icon-socials icon-youtube" href="#" />
                  <Link className="icon-socials icon-linkedin" href="#" />
                </div>
              </div>
              <div className="col-lg-3 width-25 mb-30">
                <h5 className="mb-10 color-brand-1">Company</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="/#Delivering">About Us</Link>
                  </li>
                  <li>
                    <Link href="/#services">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/#contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Industries</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">E-commerce Logistics</Link>
                  </li>
                  <li>
                    <Link href="#">Retail & Distribution</Link>
                  </li>
                  <li>
                    <Link href="#">Manufacturing Supply Chain</Link>
                  </li>
                  <li>
                    <Link href="#">Automotive Logistics</Link>
                  </li>
                  <li>
                    <Link href="#">Healthcare & Pharma</Link>
                  </li>
                  <li>
                    <Link href="#">Warehousing & Fulfillment</Link>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-3 width-25 mb-30">
                <h5 className="mb-10 color-brand-1">Services</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Air Freight</Link>
                  </li>
                  <li>
                    <Link href="#">Rail Freight</Link>
                  </li>
                  <li>
                    <Link href="#">Multimodal Transport</Link>
                  </li>
                  {/* <li>
                    <Link href="#">Warehousing & Distribution</Link>
                  </li>
                  <li>
                    <Link href="#">Customs Clearance</Link>
                  </li>
                  <li>
                    <Link href="#">Last-Mile Delivery</Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 width-25 mb-30">
                <h5 className="mb-10 color-brand-1">Our Work</h5>
                <div className="galleries-footer">
                  <ul className="list-imgs">
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal1.png"
                        alt="Global Shipping"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal2.png"
                        alt="Air Freight"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal3.png"
                        alt="Warehousing"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal4.png"
                        alt="Road Transport"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal5.png"
                        alt="Customs Handling"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal6.png"
                        alt="Cargo Loading"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal7.png"
                        alt="Distribution Centers"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal8.png"
                        alt="Client Shipments"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/page/homepage1/gal9.png"
                        alt="Express Logistics"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="container">
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                  <span className="color-grey-300 font-md">
                    © UMA Global Express {new Date().getFullYear()}. All rights
                    reserved.
                  </span>
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                  <ul className="menu-bottom">
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/cookies-policy"
                      >
                        Cookies Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/terms-of-service"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
