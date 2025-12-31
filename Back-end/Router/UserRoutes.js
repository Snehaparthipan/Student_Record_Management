const express=require("express")
const{ PostStudent, GetStd, DeleteStd, UpdateStd }=require("../Controller/StudentController")
const router=express.Router()
router.post("/users",PostStudent)
router.get("/all",GetStd)
router.delete("/del/:id",DeleteStd)
router.put("/new/:id",UpdateStd)
module.exports=router