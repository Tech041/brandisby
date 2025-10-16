import bycrypt from "bcryptjs";

export const passwordHasher = async (password) => {
  const hashedPassword = await bycrypt.hash(password, 10);
  return hashedPassword;
};




