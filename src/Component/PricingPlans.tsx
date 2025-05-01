import '../Style/PricingPlans.css';
import { Button } from 'reactstrap';

const PricingPlans = () => {
  const pricingPlans = [
    {
      title: "BASIC PLAN",
      price: "$9",
      features: [
        "1GB Disk Space",
        "100 Email Account",
        "24/24 Support"
      ]
    },
    {
      title: "STANDARD PLAN",
      price: "$19",
      features: [
        "5GB Disk Space",
        "500 Email Account",
        "24/24 Support"
      ]
    },
    {
      title: "PREMIUM PLAN",
      price: "$29",
      features: [
        "10GB Disk Space",
        "Unlimited Email Account",
        "24/24 Support"
      ]
    }
  ];

  return (
    <div className="pricing-section">
      <h1 className="pricing-title">Pricing Table</h1>
      <div className="pricing-cards-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="pricing-card-hover-layer"></div>
            <div className="pricing-card-content">
              <h5 className="plan-title">{plan.title}</h5>
              <div className="price-circle">
                <h1 className="price-amount">{plan.price}</h1>
                <h6 className="price-period">/ MONTH</h6>
              </div>
              <div className="plan-features">
                {plan.features.map((feature, i) => (
                  <p key={i} className="feature-item">{feature}</p>
                ))}
              </div>
              <Button color="info" className="purchase-button">Purchase Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;