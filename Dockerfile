
from node
COPY ./public app
COPY server.js app
COPY views app
workdir app
Run npm install
entrypoint npm start
