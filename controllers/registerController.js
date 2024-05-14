import { User } from '../schemas/user.js';

// export const register = async (req, res) => {
//   const newUser = await User.create(req.body);

//   res.status(201, 'OK').json({
//     user: {
//       name: newUser.name,
//       email: newUser.email,
//       date: newUser.date,
//     },
//   });
// };

export const register = async (req, res) => {
  const { fullName, email, dob, referral } = req.body;
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const participant = new User({
      fullName,
      email,
      dob,
      referral,
      event: eventId,
    });

    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
