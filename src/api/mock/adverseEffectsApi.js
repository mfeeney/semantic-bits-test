import delay from './delay';
import mockData from './data';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const adverseEffects = JSON.parse(mockData);

class AdverseEffectsApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], adverseEffects));
      }, delay);
    });
  }
}

export default AdverseEffectsApi;