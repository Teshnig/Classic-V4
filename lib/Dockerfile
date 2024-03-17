FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Samue-l1/Classic-v4 /Drips/classic-v4

WORKDIR /Drips/Classic-v4

ENV TZ=Africa/Nairobi

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
