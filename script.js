
const projects = [
    {
        title: "Robotic Arm Manipulator and Control",
        image: "assets/projects/robot-arm.jpeg",
        description: "Designed and manufactured a 3-degree-of-freedom differential wrist and end effector for a robotic arm for the URC competition. Developed a control scheme combining inverse kinematics and current-controlled positioning. I also implemented an autonomous keyboard typing routine.",
        videoUrl: "https://youtu.be/fZ5lqiTug2U?t=50"
    },
    {
        title: "Weeble Bot",
        image: "assets/projects/Weeblebot.jpeg",
        description: "Developed a dynamics model for Weeblebot using a Kalman filter to prevent tipping. Also implemented autonomous navigation between different rooms inside the Mechanical Engineering building.",
        videoUrl: "https://www.youtube.com/watch?v=LnjLd8OGPeI&feature=youtu.be",
        paperUrl: "assets/Weeblebot.pdf"
    },
    {
        title: "Inverse Kinematic Demo",
        image: "assets/projects/inverse-kinematics.jpg",
        description: "Implemented inverse kinematics for a 4-degree-of-freedom robotic arm to mimic drawings created by participants.",
        videoUrl: ""
    },
    {
        title: "Horseless Chariot",
        image: "assets/projects/horseless-chariot.jpg",
        description: "Designed and developed a moving platform controlled using a Wii Balance Board.",
        videoUrl: "https://youtu.be/gg9zKZokLzA?si=N-SYgemdYe6RtH16"
    },
    {
        title: "Kinetic Machine",
        image: "assets/projects/kinetic-machine.jpeg",
        description: "Used in-house sheet metal manufacturing to develop a high-speed RC car powered by Falcon 500 motors.",
        videoUrl: ""
    },
    {
        title: "Demo Motor",
        image: "assets/projects/demo-motor.jpg",
        description: "Designed and built a brushed DC motor from scratch to demonstrate how the Lorentz force generates torque and produces rotational motion.",
        videoUrl: ""
    },
    {
        title: "Electric Chair",
        image: "assets/projects/electric-chair.jpeg",
        description: "Repurposed an old chassis to create a fun motorized chair controlled using either an Xbox controller or an Xbox Kinect.",
        videoUrl: "https://youtu.be/MXTYrrQDJWY?si=d10RwG0HW0iZyX9x"
    },
    {
        title: "Fun Bot",
        image: "assets/projects/FUN-bot.jpeg",
        description: "Developed an autonomous robot featuring an interactive game and RFID tag system that allows it to identify and drive toward people.",
        videoUrl: "https://youtu.be/jlLSOi9p7nc?si=sdw-783KH9lIVFdG"
    }
];

const projectGrid = document.getElementById("project-grid");

function displayProjects() {
    projects.forEach((project) => {
        const card = document.createElement("a");

        card.className = "project-card";
        card.href = project.videoUrl || "#";

        if (project.videoUrl) {
            card.target = "_blank";
            card.rel = "noopener noreferrer";
        } else {
            card.addEventListener("click", (event) => {
                event.preventDefault();
            });
        }

       card.innerHTML = `
            <img
                class="project-image"
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
            >

            <div class="project-info">
                <h2 class="project-title"></h2>
                <p class="project-description"></p>

                <div class="project-meta">
                    ${project.videoUrl ? `
                        <a href="${project.videoUrl}" target="_blank"
                        rel="noopener noreferrer">WATCH VIDEO ↗</a>
                    ` : ""}

                    ${project.paperUrl ? `
                        <a href="${project.paperUrl}" target="_blank"
                        rel="noopener noreferrer">READ PAPER ↗</a>
                    ` : ""}
                </div>
            </div>
        `;

        card.querySelector(".project-title").textContent = project.title;
        card.querySelector(".project-description").textContent = project.description;

        projectGrid.appendChild(card);
    });
}

document.getElementById("year").textContent = new Date().getFullYear();

displayProjects();
