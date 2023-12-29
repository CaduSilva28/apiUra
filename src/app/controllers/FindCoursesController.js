import jsonCourses from '../database/courses.json';

class findCoursesController {
    async findCourses(req, res) {
        try{
            res.status(200).json({
                status: true,
                data: jsonCourses
            });
        }catch(error){
            res.status(500).json({
                status: false,
                message: "Ocorreu um erro no servidor"
            });
        }
    }
}

export default new findCoursesController();