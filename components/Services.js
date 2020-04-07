import Title from './Title';
import Servicecard from './Servicecard';
import Button from './Button';

function Services() {
  return (
    <section className="Services">
      <div className="container">
        <Title
          subject="Our Services"
          title="Sed perspiciatis omnis iste natus"
        />
        <div className="Services-content">
          <Servicecard
            src="multi-point.svg"
            title="Multi Point Inspections"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Servicecard
            src="auto-repair.svg"
            title="Auto Repair"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
            shadow="shadow"
          />
          <Servicecard
            src="auto-maintenance.svg"
            title="Auto Maintenance"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Servicecard
            src="tires.svg"
            title="Tires"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Servicecard
            src="service-warranty.svg"
            title="Service Warranty"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Servicecard
            src="shop-online.svg"
            title="Shop Online"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Services;
