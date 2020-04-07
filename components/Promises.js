import Title from './Title';
import Minicard from './Minicard';

function Promises() {
  return (
    <section className="Promises">
      <div className="container">
        <Title
          subject="OUR PROMISE TO YOU"
          title="Sed perspiciatis omnis iste natus"
        />
        <div className="Promises-content">
          <Minicard
            src="/giftbox.svg"
            title="Quality service. Everytime."
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas."
          />
          <Minicard
            src="/certified.svg"
            title="Services by certified pros"
            text="Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt."
          />
          <Minicard
            src="/team.svg"
            title="Real people. Honest work."
            text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum."
          />
        </div>
      </div>
    </section>
  );
}
export default Promises;
