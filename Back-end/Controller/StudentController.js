
const Student = require("../Model/Student");

// POST – Add Student 
const PostStudent=async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
}

// GET – Get All Students
const GetStd=async (req, res) => {
  const students = await Student.find();
  res.json(students);
}

// PUT – Update Student 
const UpdateStd= async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
}

// DELETE – Delete Student 
const DeleteStd=async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student Deleted" });
}

module.exports = {PostStudent,GetStd,UpdateStd,DeleteStd}
