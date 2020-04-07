import Layout from '../components/Layout';
import Button from '../components/Button';
import Maincard from '../components/Maincard';
import Promises from '../components/Promises';
import Video from '../components/Video';
import Services from '../components/Services';

export default () => {
  return (
    <Layout>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Top notch service is
            <br />
            our main auto motive
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <Maincard />
      <Promises />
      <Video />
      <Services />
    </Layout>
  );
};
