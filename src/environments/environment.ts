// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { DRIVE_API_KEY } from 'src/config.js';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: DRIVE_API_KEY,
    authDomain: "website-72efa.firebaseapp.com",
    projectId: "website-72efa",
    storageBucket: "website-72efa.appspot.com",
    messagingSenderId: "953639012007",
    appId: "1:953639012007:web:deb0d136fc7b957afc7d82",
    measurementId: "G-PGHDN99GW1"
  },

  philanthropyDriveID: "1C_9SQMYwOzswI9El6TN6Moblv1zS_LZh",
  brotherhoodDriveID: "1cI9j97iuwIEmW4TeFBCxgGE2FO1euVHl",
  historyCompositesDriveID: "1SjEqwMrayxEcF5EG6naYyve8htVxeoYT",
  historianGalleryDriveID: "1x2AR9uLVVFeMlwKSrsOySbS4KZXlbIyR",
  rosterDriveID: "1UgD_wIiqgUpVBbRVSBNOySmjb1TnAF3tY6Lf9aCAWb4"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
