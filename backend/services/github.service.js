const studentModel = require("../models/Student.authmodel");
const crypto = require("node:crypto");

const ALGORITHM = "aes-256-gcm";
const KEY = Buffer.from(process.env.GITHUB_TOKEN_ENC_KEY, "hex"); // 32 bytes
if (KEY.length !== 32) {
  throw new Error("GITHUB_TOKEN_ENC_KEY must be 32 bytes");
}

 function encryptToken(token) {
  const iv = crypto.randomBytes(12); // 96-bit IV (recommended for GCM)
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

  const encrypted = Buffer.concat([
    cipher.update(token, "utf8"),
    cipher.final(),
  ]);

  const tag = cipher.getAuthTag();

  return {
    encryptedToken: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    authTag: tag.toString("base64"),
  };
}

 function decryptToken(encryptedToken, iv, authTag) {
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    KEY,
    Buffer.from(iv, "base64")
  );

  decipher.setAuthTag(Buffer.from(authTag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedToken, "base64")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

async function userAllowed(userId) {
  const user = await studentModel.findOne({ _id: userId });
  if (!user) throw new Error("invalid userId or token");
  if (!user.github) return true;

  if (user.github.connected === false) return true;
  return false;
}

async function saveAccessToken(id, encrypted) {
  const user = await studentModel.findByIdAndUpdate(
    id,
    {
      $set: {
        "github.connected": true,
        "github.accessTokenEnc": encrypted.encryptedToken,
        "github.iv": encrypted.iv,
        "github.authTag": encrypted.authTag,
        "github.connectedAt": new Date()
      }
    },
    { new: true }
  );

  if (!user) throw new Error("Invalid userId");
}


async function getAccessTokenByUserId(id){
  const student = await studentModel.findById(id).select("github");
  
  if (!student || !student.github.connected) {
    return null;
  }

  return {
    accessTokenEnc: student.github.accessTokenEnc,
    iv: student.github.iv,
    authTag: student.github.authTag,
  };

}

module.exports = { userAllowed,encryptToken,decryptToken,saveAccessToken,getAccessTokenByUserId };
