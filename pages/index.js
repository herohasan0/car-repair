import Layout from '../components/Layout';
import Button from '../components/Button';

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
    </Layout>
  );
};
