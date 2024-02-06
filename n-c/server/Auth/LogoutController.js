export const LogoutController = async (req, res) => {
  const cookies = req.cookies;
  //check cookie
  if (!cookies?.jwt) return res.sendStatus(401);
  // delete cookie
  res.clearCookie("jwt", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.sendStatus(204);
};
