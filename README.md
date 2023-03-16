### Build

To build all apps and packages, run the following command:

```
docker build -t web -f ./apps/web/Dockerfile .
```

### Deploy

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```
