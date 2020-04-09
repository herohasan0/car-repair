import Title from './Title';
import Impactcard from './Impactcard';
import Button from './Button';

function Impact() {
  return (
    <section className="Impact">
      <div className="container">
        <div className="Impact-top">
          <Title
            subject="OUR IMPACT"
            title="Nemo enim ipsam voluptatem quia voluptas"
          />
          <img src="/impact-img.png" alt="" className="Impact-top-img" />
        </div>
        <div className="Impact-middle">
          <Impactcard img="/oil.svg" title="16k+" description="Oil changes" />
          <Impactcard
            img="/transmission.svg"
            title="13k+"
            description="Transmission repairs"
          />
          <Impactcard
            img="/car-service.svg"
            title="15k+"
            description="Alignments made"
          />
          <Impactcard
            img="/engine.svg"
            title="11,500k+"
            description="Engines repaired"
          />
        </div>
        <div className="Impact-bottom">
          <h4 className="Impact-bottom-title">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h4>
          <Button text="Make an Appointment" />
        </div>
      </div>
    </section>
  );
}

export default Impact;
