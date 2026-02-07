async function checkConnection(req, res,next) {
  try {
    const userId = req.token.id;
    if (!userId) return res.status(401).json({ message: "invalid token" });
    const check = await userAllowed(userId);
    if (check) redirect
    next();
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

export { checkConnection};  