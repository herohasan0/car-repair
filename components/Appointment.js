import Input from './Input';
import Button from './Button';

function Appointment() {
  return (
    <section className="Appointment">
      <div className="container">
        <div className="Appointment-form">
          <h4 className="Appointment-form-title">Make an appointment</h4>
          <div className="Appointment-form-content">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Select Service" />
            <textarea
              name=""
              id=""
              placeholder="Tell us about the car needing service(s)"
            ></textarea>
          </div>
          <Button text="Make an Appointment" />
        </div>
        <div className="Appointment-text">
          <div className="Appointment-text-title">
            Maxime placeat facere possimus omnis
          </div>
          <div className="Appointment-text-count">17k</div>
          <div className="Appointment-text-bottom">
            customers served (and counting)
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
