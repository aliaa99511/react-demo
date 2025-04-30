import '../Style/Price.css';
import { Button } from 'reactstrap';

const Price = () => {
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
    <div>
      <h1 className="heeed">Pricing Table</h1>
      <div className="testimo">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="card">
            <div className="layer"></div>
            <div className="content">
              <h5>{plan.title}</h5>
              <div className="price">
                <h1 className="lolo">{plan.price}</h1>
                <h6>/ MONTH</h6>
              </div>
              <div className="text">
                {plan.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
              <Button color="info">Purchase Now</Button>{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;