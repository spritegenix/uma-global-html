import { useState } from 'react';

export default function Accordion() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionFAQ">
        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              What shipping options does UMA Global Express offer?
            </button>
          </h5>
          <div
            className={
              isActive.key == 1
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              We offer multiple shipping solutions, including{' '}
              <strong>
                Air Freight, Rail Transport, and Multimodal Logistics
              </strong>
              . Our <strong>express delivery</strong> ensures urgent shipments
              reach their destination on time, while
              <strong> cost-effective bulk cargo solutions</strong> cater to
              businesses with large shipments.
            </div>
          </div>
        </div>

        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              How do I track my shipment?
            </button>
          </h5>
          <div
            className={
              isActive.key == 2
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              You can track your shipment in real-time using our{' '}
              <strong>online tracking system</strong>. Simply enter your
              tracking number on our website or mobile app to get live updates
              on your package’s location and estimated delivery time.
            </div>
          </div>
        </div>

        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              What are the payment options available?
            </button>
          </h5>
          <div
            className={
              isActive.key == 3
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              We accept payments via{' '}
              <strong>
                Credit/Debit Cards (Visa, MasterCard), UPI, Net Banking, and
                Wallet Payments
              </strong>
              . For business accounts, we also offer invoicing and bulk payment
              options.
            </div>
          </div>
        </div>

        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(4)}>
            <button
              className={
                isActive.key == 4
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              Can I schedule a pickup for my shipment?
            </button>
          </h5>
          <div
            className={
              isActive.key == 4
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              Yes! With UMA Global Express, you can{' '}
              <strong>schedule a doorstep pickup</strong> at your convenience.
              Our team will collect your shipment from your location and ensure
              it reaches its destination securely.
            </div>
          </div>
        </div>

        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(5)}>
            <button
              className={
                isActive.key == 5
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              What items are restricted from shipping?
            </button>
          </h5>
          <div
            className={
              isActive.key == 5
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              Certain items such as{' '}
              <strong>
                hazardous materials, explosives, live animals, and perishable
                goods
              </strong>{' '}
              may be restricted from shipping based on country regulations.
              Please check our <strong>prohibited items list</strong> on our
              website or contact our support team for more details.
            </div>
          </div>
        </div>
        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(6)}>
            <button
              className={
                isActive.key == 6
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              Does UMA Global Express provide international shipping?
            </button>
          </h5>
          <div
            className={
              isActive.key == 6
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              Yes, we offer <strong>international shipping</strong> to over 150+
              countries through our extensive{' '}
              <strong>global freight network</strong>. Our services include{' '}
              <strong>customs clearance, freight forwarding</strong>, and
              <strong> last-mile delivery</strong> to ensure smooth
              international shipments.
            </div>
          </div>
        </div>

        <div className="accordion-item wow animate__animated animate__fadeIn">
          <h5 className="accordion-header" onClick={() => handleToggle(7)}>
            <button
              className={
                isActive.key == 7
                  ? 'accordion-button text-heading-5 '
                  : 'accordion-button text-heading-5 collapsed'
              }
            >
              What should I do if my shipment is delayed?
            </button>
          </h5>
          <div
            className={
              isActive.key == 7
                ? 'accordion-collapse'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              If your shipment is delayed, you can{' '}
              <strong>track your order in real-time</strong>
              using our tracking system. If you need further assistance, please
              contact our
              <strong> 24/7 customer support team</strong>. We work closely with
              our logistics partners to resolve any delivery issues as quickly
              as possible.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
