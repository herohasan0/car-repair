import Title from './Title';
import Customercard from './Customercard';

function Customers() {
  return (
    <section className="Customers">
      <img src="/gears-gallery-bg.png" className="Customers-bg"></img>
      <div className="container">
        <Title
          subject="OUR CUSTOMERS"
          title="Illum qui dolorem eum quo voluptas ut distinctio"
        />
        <div className="Customers-container">
          <Customercard
            text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim
          illum ad minim veniam, quis ea exercitation ullamco cillum ut enim
          dolore.”"
            img="/customer-1.png"
            name="Cullen Bohannon"
          />
          <Customercard
            text="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”"
            img="/customer-2.png"
            name="Jennifer Thomas"
          />
        </div>
      </div>
    </section>
  );
}

export default Customers;
