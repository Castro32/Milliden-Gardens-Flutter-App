// // import Router from 'express';
// // import {Request, Response, NextFunction} from 'express';
// // import { ContactController } from '../controllers/contactController';

// // const router = Router();
// // const contactController = new ContactController();

// // const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>) =>
// //   (req: Request, res: Response, next: NextFunction) => 
// //     Promise.resolve(fn(req, res)).catch(next);

// // // Create a new contact
// // router.post('/', asyncHandler(contactController.createContact.bind(contactController)));

// // export default router;
// import { Router } from 'express';
// import { EmailController } from '../controllers/ContactController'

// const router = Router();
// const contactController = new EmailController();

// router.post('/send-email', contactController.sendContactEmail);
// router.post('/subscribe', contactController.subscribe);

// export default router;
// import { Router } from 'express';
// import { ContactController } from '../controllers/contactController';

// const router = Router();
// const contactController = new ContactController();

// router.post('/send-email', ContactController.sendContactEmail);
// router.post('/subscribe', ContactController.subscribe);

// export default router;

import { Router } from 'express';
import { ContactController } from '../controllers/contactController';

const router = Router();
const contactController = new ContactController();

// Use the instance methods from the instantiated controller
router.post('/send-email', contactController.sendContactEmail);
router.post('/subscribe', contactController.subscribe);

export default router;