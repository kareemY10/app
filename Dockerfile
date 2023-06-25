
from node
COPY . app
 
workdir app
Run npm install
entrypoint npm start
