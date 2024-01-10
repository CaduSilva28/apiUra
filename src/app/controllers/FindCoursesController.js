import jsonCourses from '../database/courses.json';

class findCoursesController {
    async findCourses(req, res) {
        const data = {
            "lstCourses": jsonCourses, 
            "stgData": "Análise e Desenvolvimento de Sistemas, Ciências Contábeis, Administração e Pedagogia"
        };

        try{
            res.status(200).json({
                status: true,
                data
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