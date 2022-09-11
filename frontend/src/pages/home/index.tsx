import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import CardLogin from '../../components/CardLogin';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-card">
        <div className="home-content-card">
          <h1>Avalie Filmes</h1>
          <h6>Diga o que você achou do seu filme favorito</h6>
          <div className="home-content-image">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="home-container-login">
        <CardLogin />
      </div>
    </div>
  );
};

export default Home;
