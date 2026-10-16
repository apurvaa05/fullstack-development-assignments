
import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Your form has been submitted successfully!");
    }

    return (
        <main className="page-container">
            <section className="form-card">
                <h1>Student Information Form</h1>
                <p className="subtitle">
                    Enter your details and see them update instantly.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">Select Course</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose a course</option>
                            <option value="MCA">MCA</option>
                            <option value="BCA">BCA</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">About Yourself</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write a short introduction"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>

                    <button type="submit">Submit Details</button>
                </form>
            </section>

            <section className="preview-card">
                <h2>Live Preview</h2>
                <p className="preview-subtitle">
                    Your information appears here as you type.
                </p>

                <div className="preview-item">
                    <span>Full Name</span>
                    <p>{formData.name || "Not entered yet"}</p>
                </div>

                <div className="preview-item">
                    <span>Email Address</span>
                    <p>{formData.email || "Not entered yet"}</p>
                </div>

                <div className="preview-item">
                    <span>Course</span>
                    <p>{formData.course || "Not selected yet"}</p>
                </div>

                <div className="preview-item">
                    <span>About Yourself</span>
                    <p className="preview-message">
                        {formData.message || "Not entered yet"}
                    </p>
                </div>
            </section>
        </main>
    );
}

export default App;
