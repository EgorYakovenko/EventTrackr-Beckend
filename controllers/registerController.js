import { User } from '../schemas/user.js';

export const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201, 'OK').json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};
