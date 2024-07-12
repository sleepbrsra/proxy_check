const http = require('http');
const https = require('https');

const proxies = [
  'http://170.85.55.0:10160',
  'http://136.226.65.8:10160',
  'http://49.13.230.85:80',
  'http://196.43.178.65:3128',
  'http://189.240.60.166:9090',
  'http://45.152.188.240:3128',
  'http://136.226.65.20:10160',
  'http://104.129.199.62:10160',
  'http://35.185.196.38:3128',
  'http://67.43.227.227:10509',
  'http://4.155.2.13:80',
  'http://72.10.164.178:5253',
  'http://136.226.65.107:10160',
  'http://40.113.166.180:80',
  'http://136.226.66.247:10160',
  'http://67.43.228.250:14725',
  'http://85.209.153.173:4153',
  'socks4://154.64.217.128:36468',
  'http://37.140.242.15:80',
  'http://216.246.40.215:8999',
  'http://136.226.67.33:10160',
  'http://67.43.236.20:15125',
  'http://119.28.60.64:8090',
  'http://104.129.199.57:10160',
  'http://136.226.67.5:10160'
];

function testProxy(proxyUrl) {
  const url = new URL(proxyUrl);
  const protocol = url.protocol === 'https:' ? https : http;

  const options = {
    host: url.hostname,
    port: url.port,
    path: 'http://www.example.com',
    method: 'GET',
    headers: {
      Host: 'www.example.com'
    }
  };

  const request = protocol.request(options, (res) => {
    console.log(`Proxy ${proxyUrl} is working: Status Code: ${res.statusCode}`);
  });

  request.on('error', (err) => {
    console.error(`Proxy ${proxyUrl} failed:`, err.message);
  });

  request.end();
}

proxies.forEach(proxy => testProxy(proxy));
