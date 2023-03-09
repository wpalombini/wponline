## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

## Using Docker

```
docker build -t blog -f ./apps/blog/Dockerfile .
```

```
docker run -p 8080:3000 blog
```

Then navigate to localhost:8080
