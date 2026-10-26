
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Apurva Dighe",
        email: "apurva@example.com",
        course: "MCA"
    },
    {
        id: 2,
        name: "Rahul Patil",
        email: "rahul@example.com",
        course: "BCA"
    }
];

let nextId = 3;

function validateStudent(data) {
    const { name, email, course } = data;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof course !== "string" ||
        !name.trim() ||
        !email.trim() ||
        !course.trim()
    ) {
        return "Name, email, and course are required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return "Please enter a valid email address.";
    }

    return null;
}

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Student REST API",
        endpoints: [
            "GET /api/students",
            "GET /api/students/:id",
            "POST /api/students",
            "PUT /api/students/:id",
            "DELETE /api/students/:id"
        ]
    });
});

app.get("/api/students", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
});

app.get("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            message: "ID must be a positive integer."
        });
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
});

app.post("/api/students", (req, res) => {
    const error = validateStudent(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error
        });
    }

    const name = req.body.name.trim();
    const email = req.body.email.trim().toLowerCase();
    const course = req.body.course.trim();

    const emailExists = students.some(
        (student) => student.email.toLowerCase() === email
    );

    if (emailExists) {
        return res.status(409).json({
            success: false,
            message: "A student with this email already exists."
        });
    }

    const newStudent = {
        id: nextId++,
        name,
        email,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully.",
        data: newStudent
    });
});

app.put("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            message: "ID must be a positive integer."
        });
    }

    const student = students.find((item) => item.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    const error = validateStudent(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error
        });
    }

    const email = req.body.email.trim().toLowerCase();

    const emailExists = students.some(
        (item) => item.id !== id && item.email.toLowerCase() === email
    );

    if (emailExists) {
        return res.status(409).json({
            success: false,
            message: "Another student already uses this email."
        });
    }

    student.name = req.body.name.trim();
    student.email = email;
    student.course = req.body.course.trim();

    res.status(200).json({
        success: true,
        message: "Student updated successfully.",
        data: student
    });
});

app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            success: false,
            message: "ID must be a positive integer."
        });
    }

    const index = students.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Student deleted successfully.",
        data: deletedStudent
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON request body."
        });
    }

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error."
    });
});

app.listen(PORT, () => {
    console.log(`Student REST API running at http://localhost:${PORT}`);
});
