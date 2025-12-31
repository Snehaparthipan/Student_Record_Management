import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    studentName: "",
    grade: "",
    subject: ""
  });
  const [editId, setEditId] = useState(null);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (editId) {
      await API.put(`/students/${editId}`, form);
      setEditId(null);
    } else {
      await API.post("/students", form);
    }
    setForm({ studentName: "", grade: "", subject: "" });
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  const editStudent = (student) => {
    setForm(student);
    setEditId(student._id);
  };

  return (
    <div>
      <h2>Student Record Management</h2>

      {/* Add / Update Student Form (2 Marks) */}
      <form onSubmit={submitHandler}>
        <input placeholder="Name" value={form.studentName}
          onChange={e => setForm({ ...form, studentName: e.target.value })} />

        <input placeholder="Grade" value={form.grade}
          onChange={e => setForm({ ...form, grade: e.target.value })} />

        <input placeholder="Subject" value={form.subject}
          onChange={e => setForm({ ...form, subject: e.target.value })} />

        <button type="submit">
          {editId ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* Student List Display (2 Marks) */}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.studentName}</td>
              <td>{s.grade}</td>
              <td>{s.subject}</td>
              <td>
                <button onClick={() => editStudent(s)}>Edit</button>
                <button onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
