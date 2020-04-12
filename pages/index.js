import Layout from '../components/Layout';
import Button from '../components/Button';
import Maincard from '../components/Maincard';
import Promises from '../components/Promises';
import Video from '../components/Video';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Customers from '../components/Customers';
import Impact from '../components/Impact';

export default () => {
  return (
    <Layout>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Top notch service is our main auto motive
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <Maincard
        subject="WHO WE ARE"
        title="Nemo enim ipsam voluptatem quia voluptas in proident"
        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur."
        img="/first-cover.png"
        offLinks={{ display: 'none' }}
        bg={{
          background: 'url(/maincard-bg.png) no-repeat center center / cover',
        }}
      />
      <Promises />
      <Video />
      <Services />
      <Appointment />
      <Maincard
        subject="GALLERY & LIVE STREAMS"
        title="Check out our hard workers"
        link1="Gallery"
        link2="Live stream: Bay 1"
        link3="Live stream: Bay 2"
        link4="Live stream: Bay 3"
        img="/gallery-pic.png"
        offText={{ display: 'none' }}
      />
      <Customers />
      <Impact />
    </Layout>
  );
};
