export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Hotels'},
      {id: 12, name: 'Restaurants'},
      {id: 13, name: 'HK Island'},
      {id: 14, name: 'Kowloon'},
      {id: 15, name: 'Outer Islands'},
      {id: 16, name: 'Macau'},
      {id: 17, name: 'Phone Applications'},
      {id: 18, name: 'Useful Info'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
