## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Docker

```
docker build -t web -f ./apps/web/Dockerfile
```

```
docker run -p 8080:3000 web
```

Then navigate to localhost:8080
