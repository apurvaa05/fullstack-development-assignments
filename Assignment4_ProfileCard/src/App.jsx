
import React from "react";
import "./App.css";

function ProfileCard({ name, imageUrl, description, role, skills }) {
    return (
        <article className="profile-card">
            <div className="profile-banner"></div>

            <img
                src={imageUrl}
                alt={name}
                className="profile-image"
            />

            <div className="profile-content">
                <h2>{name}</h2>
                <p className="profile-role">{role}</p>
                <p className="profile-description">{description}</p>

                <div className="skills-section">
                    <h3>Skills</h3>

                    <div className="skills-list">
                        {skills.map((skill) => (
                            <span className="skill" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="profile-button"
                    onClick={() => window.alert("Hello! I am " + name + ".")}
                >
                    View Profile
                </button>
            </div>
        </article>
    );
}

function App() {
    const profiles = [
        {
            name: "Apurva Dighe",
            imageUrl:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
            role: "Full Stack Developer",
            description:
                "Passionate about building modern web applications and creating useful digital experiences.",
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            name: "Priya Sharma",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
            role: "UI/UX Designer",
            description:
                "Enjoys designing clean interfaces and making websites easy and enjoyable to use.",
            skills: ["Figma", "UI Design", "Prototyping"]
        },
        {
            name: "Rahul Patil",
            imageUrl:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
            role: "Frontend Developer",
            description:
                "Loves turning creative ideas into responsive and interactive web experiences.",
            skills: ["React", "CSS", "JavaScript"]
        }
    ];

    return (
        <main className="app-container">
            <header className="page-header">
                <h1 className="page-title">Our Profiles</h1>
                <p className="page-subtitle">
                    Get to know our team members
                </p>
            </header>

            <section className="profiles-grid">
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.name}
                        name={profile.name}
                        imageUrl={profile.imageUrl}
                        role={profile.role}
                        description={profile.description}
                        skills={profile.skills}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;
