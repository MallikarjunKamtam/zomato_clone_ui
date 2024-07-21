const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const content = `const swEnv = {
    NEXT_PUBLIC_FIREBASE_API_KEY: '${firebaseConfig.apiKey}',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: '${firebaseConfig.authDomain}',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: '${firebaseConfig.projectId}',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: '${firebaseConfig.storageBucket}',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '${firebaseConfig.messagingSenderId}',
    NEXT_PUBLIC_FIREBASE_APP_ID: '${firebaseConfig.appId}',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: '${firebaseConfig.measurementId}'
 }`;

fs.writeFileSync("./public/swEnv.js", content);
