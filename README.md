## ImageScape

A photo gallery using React and Firebase where you can quickly upload your photos and see it.

## Setup

1.  Fork and clone this repository.
1.  Create a new branch for your work.
1.  Checkout to the branch that you have named.
1.  Install dependencies with `npm install`.
1.  Run `npm start` to run on local host

## Technologies Used

- Firebase
- Firebase Firestore
- Firebase Hosting
- Firebase Storage
- Framer Motion
- JavaScript
- React
- SASS

## Troubleshooting

1. You may need to create free [Firebase](https://firebase.google.com/) account
1. Once account has been created, you may go create a free project
1. Once project is created, copy all the keys into `config.js` file within the firebaseConfig object

   - Replace the key value in the file with the values given by Firebase

1. To create Firestore Database

   - Go to Firestore Database tab in Firebase
   - Click on Rules Tab
   - Two Mode to select from once you start so you select Test Mode
     - Be advise that Test Mode only allow 30 days from creation so you may need to adjust the rules if using longer than that timeframe
   - Firestore Database should now be created

1. To create Firebase Storage

   - Go to Storage tab in Firebase
   - Click on Rules Tab
   - Rewrite the rules to look something like shown below
     - We are only changing the allow rule to allow read & write permissions since authentification isn't needed

   ```
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write;
       }
     }
   }
   ```
