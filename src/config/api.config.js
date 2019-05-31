import axios from 'axios';

export const firebaseAPI = axios.create({
  baseURL: 'https://fcm.googleapis.com/fcm',
  timeout: 1000,
  headers: {
    Authorization:
      'key=AAAAoA9Gm3c:APA91bET2bWXqhxgu60GvJVj5AGKyQ094SLR65osQGOk5NEbpv2nnOYJG3bzY2zH8eAkxFhdPRiyneAAjLwg8hzlIdDmLopIdkSOfCG0yQLbnmd5r4GkDpuS1eQWjm3CPm1VpP89sKOZ',
    'Content-Type': 'application/json'
  }
});
