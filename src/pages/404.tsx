import { NextPage } from 'next';
import Link from 'next/link';

const content = {
  heading: 'Page non trouvée',
  summary:
    "Oups! Il semble que la page que vous essayer d'atteindre n'existe pas.",
  buttonLabel: "Retour à la page d'accueil",
};

/**
 * Not Found
 */
const NotFound: NextPage = () => {
  return (
    <article>
      <header>
        <h1>{content?.heading}</h1>
      </header>

      <p>{content?.summary}</p>
      <Link href="/">{content?.buttonLabel}</Link>
    </article>
  );
};

export default NotFound;
