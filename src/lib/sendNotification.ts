import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("../../service-key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function sendNotification({
  message,
  title,
  token,
  link,
}: {
  token;
  title;
  message;
  link;
}) {
  const payload = {
    token,
    notification: { title, body: message },
    webpush: link && {
      fcmOptions: {
        link,
      },
    },
  };

  await admin.messaging().send(payload);
}
