# ChatApplication
# how to start ChatApplication
# For Client:
cd ChatApplication
cd client
create a .env file in this directory, inside write <br>
 `PORT=3001` <br>
npm i <br>
npm install yarn <br>
npm run build <br>
yarn start -p 3001 <br>
# For Server:
cd ChatApplication <br>
cd server <br>
npm i yarn <br>
create a .env file in this directory, inside write <br>
DATABASE_URL="postgresql://u2ytyiahziwqzsgegdy5:dRDdK3wuhK11kjIZFjJD370NVrjszR@btszuylwkulg6ff1ztm1-postgresql.services.clever-cloud.com:50013/btszuylwkulg6ff1ztm1"<br>
`PORT=3005` <br>
yarn start <br>
# For Database:
cd ChatApplication <br>
cd server <br>
npm i yarn <br>
npm i prisma <br>
npx prisma init <br>
npx prisma generate <br>
npx prisma db push <br>
npx prisma studio <br>
