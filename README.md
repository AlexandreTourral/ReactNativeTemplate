# Devid React Native Template

Template Expo SDK 54 prêt à l'emploi pour démarrer rapidement des projets React Native cohérents.

## Stack

- **Expo 54** + **Expo Router** (navigation file-based)
- **NativeWind v4** (Tailwind CSS)
- **Zustand** (state local persisté)
- **TanStack Query** (cache API)
- **i18next** + **expo-localization** (FR / EN)
- **ESLint** + **Prettier**

## Démarrage

```bash
npm install
cp .env.example .env
npx expo start
```

Scripts disponibles :

| Commande | Description |
|----------|-------------|
| `npm start` | Démarre le serveur Expo |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run lint:fix` | Corrige automatiquement ESLint |
| `npm run format` | Formate le code avec Prettier |
| `npm run typecheck` | Vérifie les types TypeScript |

## Utiliser comme template

### Option 1 — GitHub Template

Créez un repo à partir de ce template via **Use this template** sur GitHub, puis clonez-le.

### Option 2 — Renommage manuel

```bash
git clone <url-du-repo> MonNouveauProjet
cd MonNouveauProjet
node scripts/rename-template.mjs MonNouveauProjet
npm install
```

## Personnalisation

Après clonage, mettez à jour :

1. **`app.config.ts`** — `name`, `slug`, `scheme`, bundle IDs iOS/Android
2. **`assets/`** — icônes et splash screen
3. **`global.css`** + **`tailwind.config.js`** — couleurs de marque
4. **`.env`** — variables d'environnement (voir `.env.example`)

## Structure du projet

```
src/
├── api/
│   ├── client.ts
│   └── example.api.ts
├── hooks/queries/
│   ├── use-example.ts
│   └── use-post.ts
├── stores/example/
├── types/example.type.ts
├── i18n/locales/{fr,en}/index.ts
└── app/(tabs)/
```

## Conventions

| Besoin | Emplacement |
|--------|-------------|
| Nouvel écran | `src/app/` (ou sous-groupe de routes) |
| Composant UI | `src/components/ui/` |
| Logique réutilisable | `src/hooks/` |
| Appels API | `src/api/<feature>.api.ts` |
| Queries TanStack | `src/hooks/queries/use-<feature>.ts` |
| State global | `src/stores/<feature>/` (voir `example/` pour le skeleton) |
| Types | `src/types/<feature>.type.ts` |
| Traductions | `src/i18n/locales/{fr,en}/index.ts` |

## Variables d'environnement

Les variables publiques Expo doivent être préfixées par `EXPO_PUBLIC_` :

```
EXPO_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

## Documentation Expo

Consultez la [documentation Expo v54](https://docs.expo.dev/versions/v54.0.0/) avant d'ajouter des packages natifs.
