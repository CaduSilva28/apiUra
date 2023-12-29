import express from 'express';
import FindCoursesController from '../app/controllers/FindCoursesController';
import FindStudentController from '../app/controllers/FindStudentController';

const routes = express.Router();

routes.get('/courses', FindCoursesController.findCourses);
routes.get('/students', FindStudentController.findAllStudent);
routes.get('/student', FindStudentController.findStudent);

export default routes;