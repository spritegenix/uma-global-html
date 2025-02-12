export default function Howitwork1() {
  return (
    <>
      <section className="section pt-85 bg-worldmap">
        <div className="container">
          <div className="text-center">
            <img
              className="mb-15"
              src="/assets/imgs/template/icons/favicon.svg"
              alt="UMA Global Express"
            />
            <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">
              How It Works
            </h2>
            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
              Our streamlined logistics process ensures that your shipment
              reaches its destination{' '}
              <strong>quickly, safely, and efficiently</strong>. From placing an
              order to final delivery, UMA Global Express handles it all with
              precision.
            </p>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6 mb-30">
              <div className="box-image-how">
                <img
                  className="w-100 wow animate__animated animate__fadeIn"
                  src="/assets/imgs/page/homepage1/how-it-work.png"
                  alt="Efficient Logistics Process"
                />
                <div className="box-info-bottom-img">
                  <div className="image-play">
                    <img
                      className="mb-15 wow animate__animated animate__fadeIn"
                      src="/assets/imgs/template/icons/play.svg"
                      alt="Watch How It Works"
                    />
                  </div>
                  <div className="info-play">
                    <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">
                      <strong>25+ Years of Logistics Excellence</strong>
                    </h4>
                    <p className="font-sm color-white wow animate__animated animate__fadeIn">
                      Our expertise in freight forwarding, supply chain
                      management, and real-time tracking makes shipping easier
                      than ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <ul className="list-how-works">
                <li>
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/order.png"
                        alt="Order Placement"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                      Customer Places an Order
                    </h5>
                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                      The process starts with a detailed{' '}
                      <strong>inspection and quality check</strong> of goods
                      before dispatch.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/payment.png"
                        alt="Secure Payment"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                      Secure Payment Processing
                    </h5>
                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                      Customers can pay via{' '}
                      <strong>Payoneer, PayPal, or Visa/Mastercard</strong> for
                      secure transactions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/warehouse.png"
                        alt="Warehouse Processing"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                      Order Received at Warehouse
                    </h5>
                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                      Our logistics team{' '}
                      <strong>verifies inventory and prepares shipments</strong>{' '}
                      for fast processing.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/picked.png"
                        alt="Order Processing"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                      Order Picked, Packed & Shipped
                    </h5>
                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                      Items are securely packed and{' '}
                      <strong>dispatched to the nearest shipping hub</strong>.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/delivery.png"
                        alt="On-Time Delivery"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                      On-Time Delivery & Success Tracking
                    </h5>
                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                      Customers receive <strong>real-time updates</strong> on
                      shipment status for transparency and reliability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
