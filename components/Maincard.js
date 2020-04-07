import Title from './Title';

function Maincard() {
  return (
    <section className="Maincard">
      <div className="container">
        <div className="Maincard-content">
          <Title
            subject="WHO WE ARE"
            title="Nemo enim ipsam voluptatem quia voluptas in proident"
          />
          <div className="Maincard-text">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur.
          </div>
          <img src="/first-cover.png" alt="" className="Maincard-img" />
        </div>
      </div>
    </section>
  );
}

export default Maincard;
