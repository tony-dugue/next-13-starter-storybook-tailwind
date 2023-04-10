# Mon portfolio

## Présentation du projet

---

Mon portfolio en Nextjs 13 / Typescript et le framework CSS Tailwind + Styled-components / sass pour la gestion des feuilles de style.

- Projet [Next.js](https://nextjs.org/) crée avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Mise en place d'une configuration évolutive avec des outils de qualité (EsLint et Prettier), d'outils de vérification de code géré par des Git Hooks (avec Husky) et d'un engine locking (version de Node, prise en charge uniquement de Yarn).

- Mise en place d'un storybook pour la documentation des composants

## 🚀 Installation

---

- récupération du projet sur Github par HTTPS :

```shell script
$ https://github.com/tony-dugue/portfolio-tony-v3.git
```

- installer les packages :

```shell script
$ yarn install
```

## Démarrer l'application

---

- Démarrer le serveur de développement :

```bash
yarn dev
```

Pour créer un dossier de production :

```bash
yarn build
```

Pour créer un export (export des pages en fichiers html statiques) :

```bash
yarn export
```

Pour démarrer le storybook :

```bash
yarn storybook
```

- Dans le terminal, accéder à l'application : [http://localhost:3000](http://localhost:3000)
- Dans le terminal, accéder au storybook : [http://localhost:6006](http://localhost:6006)

## Ressources utilisées dans le projet

---

### Librairies utilisées dans ce projet :

CSS Framework : [Tailwind CSS](https://tailwindcss.com/) <br />
Styled Components : [emotion/styled](https://emotion.sh/docs/introduction) <br />
Linter : [EsLint](https://eslint.org/) <br />
Code Formatter : [Prettier](https://prettier.io/) <br />
Documentation des composants: [Storybook](https://storybook.js.org/) <br />
Git Hooks: [husky](https://typicode.github.io/husky/#/) <br />

### Librairies d'animation utilisées dans ce projet :

[GSAP](https://greensock.com/gsap/) <br />
[FramerMotion](https://www.framer.com/motion/) <br />

## Informations complémentaires

---

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
