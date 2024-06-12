## Reproduction of potential issue

Reproduction steps:  
0. Install dependencies: `npm i`
1. Start the containers, e.g. with `npx electric-sql start --with-postgres`
2. Run the migrations: `npm run db:migrate`
3. Start web client: `npm run dev`

Observe that the electric docker container stops after a few seconds, sync is not happening, and the web client prints errors to the console.