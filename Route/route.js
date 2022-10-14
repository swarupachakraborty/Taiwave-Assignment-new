const { router } = require("express")
const studentController = require("../Controller/studentController")

router.post("/register",studentController.createStudent)
router.get("/getting",studentController.getStudent)
router.put("/updating",studentController.updateStudent)
router.delete("/deliting",studentController.deleteStudent)

module.exports=router;