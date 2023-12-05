import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/error.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <div id="error-page">
      <Header/>
  <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
}