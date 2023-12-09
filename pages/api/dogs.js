import dbConnect from '../../lib/dbConnect';
import Dog from '../../models/Dog';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const dogs = await Dog.find({});
        res.status(200).json({ success: true, data: dogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // handle other HTTP methods
    default:
      res.status(400).json({ success: false });
      break;
  }
}