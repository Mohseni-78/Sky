import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hasshedPass = await hash(password, 12);
  return hasshedPass;
}

async function verifyPassword(password, hashPass) {
  const res = await compare(password, hashPass);
  return res;
}
export { hashPassword, verifyPassword };
