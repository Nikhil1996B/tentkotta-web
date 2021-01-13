import crypto from "crypto";
import { config } from "../services/config";

let resizedIV = Buffer.allocUnsafe(16);
let key = crypto
  .createHash("sha256")
  .update(config.cryptoCipherKey || "VueData")
  .digest();
let iv = crypto
  .createHash("sha256")
  .update(config.cryptoCipherIv || "VueData@123")
  .digest();
iv.copy(resizedIV);

export const encrypt = async (str) => {
  const mykey = crypto.createCipheriv("aes256", key, resizedIV);
  var mystr = mykey.update(str, "utf8", "hex");
  mystr += mykey.final("hex");
  return mystr;
};

export const decrypt = async (str) => {
  var mykey = crypto.createDecipheriv("aes256", key, resizedIV);
  var mystr = mykey.update(str, "hex", "utf8");
  mystr += mykey.final("utf8");
  return mystr;
};
