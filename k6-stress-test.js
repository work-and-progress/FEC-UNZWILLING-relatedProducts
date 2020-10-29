import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    // { duration: '2m', target: 100 }, // below normal load
    // { duration: '5m', target: 100 },
    // { duration: '2m', target: 200 }, // normal load
    // { duration: '5m', target: 200 },
    // { duration: '2m', target: 300 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    // { duration: '10m', target: 0 }, // scale down. Recovery stage.

    { duration: '1m', target: 1000 }, // beyond the breaking point
    { duration: '2m', target: 1000 }, // beyond the breaking point
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {

  let responses = http.get('http://localhost:3002/getRelatedProducts/Movies/Towels/Steel/Licensed');

  sleep(1.2);
}

// sudo scp -i wap-questions.pem appa.csv ec2-user@ec2-18-224-251-206.us-east-2.compute.amazonaws.com:~/

// sudo scp -i "SDC-key.pem" /Users/henrylo/Documents/Work/Hack_Reactor/React/related-products/database/category.csv ec2-user@ec2-13-56-13-2.us-west-1.compute.amazonaws.com:~/