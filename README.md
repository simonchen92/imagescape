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
- Firebase Storage
- Framer Motion
- React
- SASS

## Troubleshooting

1. You may need to create free [Firebase](https://firebase.google.com/) account
1. Once account has been created, you may go create a free project
1. Once project is created, copy all the keys into `config.js` file within the firebaseConfig object
   - Replace the key value in the file with the values given by Firebase
1. Go to Storage tab in Firebase > Click on Rules Tab > Rewrite the rules to look something like shown below (only changing the allow rule to allow read & write permissions since authentification isn't needed)

```
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
```
