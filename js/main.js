 let contact = 
  {
        "phone": "(343) 996-8186",
        "email": "marcoszorzi@gmail.com",
        "linkedin": "https://ca.linkedin.com/in/marcos-zorzi-rosa",
        "city": "Ottawa, ON, Canada",
        "picture": "./img/profile.jpg",
        "about": "Mobile Application Design and Development student, with a passion for programming, skilled in C, Java and SQL. With more than 10 years of experience in the IT field. Proficient in C, C#, C++, Java, SQL, Oracle PL-SQL, HTML, CSS, JavaScript, Bootstrap, MongoDB, Postman, Git, Adobe Illustrator, Photoshop, and XD."
    };

 let experience = [
    {
        "id": 1,
        "title": "Systems Consultant at Senior Curitiba",
        "time": "2018-2019",
        "roles":["Provide remote support for installation, maintenance and use of Senior Systems",
        "Develop and design features and reports as requested by clients",
        "Programmin in LSP(Proprietary language, C based) and Java. Glassfish server versions 2, 3 and 4.",
        "Perform backup and restore routines in Oracle and SQL databases.",
        "Perform systems update and modules installations in server side.",
        "Management of projects through all phases from planning through to maintenance and support",
        "Perform testing, configuration changes, enhancements and new functionality",
        "Prepare documentation and user manuals, including written instruction on procedures related"]
    },
    {
        "id": 2,
        "title": "Systems Administrator at Boticario Group",
        "time": "2018-2018",
        "roles":["Accountable for maintenance and support of Vetorh platform from Senior Systems",
                 "Development of features and reports as requested from the HR area",
                 "Programmin in LSP(Proprietary language, C based). Glassfish server versions 2 and 3.",
                 "Management of users access, providing login creation and attributing permissions",
                 "Planning and development of long-term strategic goals for systems and software",
                 "Monitor server/network status for application systems and ensure optimal performance of applications",
                 "Ensure that application use is not interrupted by security or other infrastructure systems",
                 "Troubleshoot real-time problems with minimum impact to users or the business overall",
                 "Prepare documentation and user manuals, including written instruction on procedures related",
                 "Liaise with vendors and various teams regarding complex requests.",
                 "Follow-up on internal projects related to HR area with diverse systems platforms."]
    },
    {
        "id": 3,
        "title": "Systems Consultant at Senior Curitiba",
        "time": "2014-2018",
        "roles":["Provide remote support for installation, maintenance and use of Senior Systems",
                 "Develop and design features and reports as requested by clients",
                 "Programmin in LSP(Proprietary language, C based) and Java. Glassfish server versions 2, 3 and 4.",
                 "Perform backup and restore routines in Oracle and SQL databases.",
                 "Perform systems update and modules installations in server side.",
                 "Management of projects through all phases from planning through to maintenance and support",
                 "Perform testing, configuration changes, enhancements and new functionality",
                 "Prepare documentation and user manuals, including written instruction on procedures related",
                 "Elaborate and perform training for clients"]
    },
    {
        "id": 4,
        "title": "Systems Administrator at Lactec Institutes",
        "time": "2009-2014",
        "roles":["Accountable for application installation, maintenance and support of Senior Systems",
                 "Development of features and reports as requested from the company's multiple areas",
                 "Programmin in LSP(Proprietary language, C based). Glassfish server versions 2 and 3",
                 "Management of users access, providing login creation and attributing permissions",
                 "Elaborate and perform training to end-users about new features.",
                 "Perform backup and restore in Oracle database as needed in system updates.",
                 "Monitor server/network status for application systems and ensure optimal performance",
                 "Ensure that application use is not interrupted by security or other infrastructure systems",
                 "Troubleshoot real-time problems with minimum impact to users or the business overall",
                 "Prepare documentation and user manuals, including written instruction on procedures related",
                 "Liaise with vendors and various teams regarding complex requests."]
    }
];
 
let education = [
    {
        id: 1,
        title: "Mobile Application Design and Development",
        institution: "Algonquin College",
        degree: "Diploma",
        time: "2018-2020",
        roles:["HTML, JavaScript and CSS","Node.JS","C++, C# and JAVA", 
               "Mongo DB", "Ajax, REST API and CORS", 
               "Adobe Photoshop, Adobe Illustrator, Adobe XD and Adobe Dreamweaver",
               "VS Code, Visual Studio, Xcode and Android Studio"]
    },
    {
        id: 2,
        title: "MBA in Project Management",
        institution: "Positivo Universtity",
        time: "2016-2017",
        degree: "MBA",
        roles:["PMBOK","Project Management Charts",
               "Agile Projects","Economic Project Viability",
               "Projects Scope and Timing","Human Resources in Projects","Quality in Projects"]
    },
    {
        id: 3,
        title: "Bachelor's in Information Systems",
        institution: "Unibrasil",
        time: "2014-2018",
        degree: "Bachelor",
        roles:["Programming practice in C, C# and JAVA", 
               "Object Oriented Programming", 
               "SQL Administration and Programming", 
               "Web Programming HTML and Java",
               "Operating Systems",
               "Network protocols",
               "Distributed Systems"]
    }
];

let skills = [
    {
        id: 1,
        skill: "HTML & CSS",
        level: 5
    },
    {
        id: 2,
        skill: "JavaScript",
        level: 4
    },
    {
        id: 3,
        skill: "C, C++, C# and Java",
        level: 4
    },
    {
        id: 4,
        skill: "Photoshop, Illustrator & XD",
        level: 4
    },
    {
        id: 5,
        skill: "SQL and Oracle",
        level: 5
    },
    {
        id: 6,
        skill: "MongoDB",
        level: 4
    }
];


document.addEventListener('DOMContentLoaded', () => {

    setProfile();
    setExperience();
    setEducation();

});

function setProfile(ev){
    if(ev){
        ev.preventDefault();
    }

    //Left side
    let contactInfo = document.querySelector(".contactInfo");
    console.log(contactInfo.querySelector(".linkedin").querySelector(".myLinkedIn").href);

    contactInfo.querySelector(".phone").querySelector(".myPhone").innerText = contact.phone;
    contactInfo.querySelector(".email").querySelector(".myEmail").innerText = contact.email;
    contactInfo.querySelector(".linkedin").querySelector(".myLinkedIn").href = contact.linkedin;
    contactInfo.querySelector(".linkedin").querySelector(".myLinkedIn").innerText = "Click to Go";
    contactInfo.querySelector(".city").querySelector(".myCity").innerText = contact.city;


    //right side
    let about = document.querySelector(".aboutr");

    about.querySelector(".picture").src = contact.picture;
    about.querySelector(".description").innerText = contact.about;
}

function setExperience(ev){
    if(ev){
        ev.preventDefault();
    }

    let xpList = document.querySelector(".experienceList");

    //Clear whatever is in the list
    while(xpList.firstChild){
        xpList.removeChild(xpList.firstChild);
    }

    experience.forEach(element =>{

        let li = document.createElement("li");
        let p = document.createElement("p");
        p.classList.add("title");
        let time = document.createElement("p");
        time.classList.add("time");
        
        let ul = document.createElement("ul");
        element.roles.forEach(role =>{
            let liRole = document.createElement("li");
            liRole.textContent = role;
            ul.appendChild(liRole);
        });

        p.textContent = element.title;
        time.textContent = element.time;

        li.appendChild(p);
        li.appendChild(time);
        li.appendChild(ul);
        
        xpList.appendChild(li);
    })
}

function setEducation(ev){
    if(ev){
        ev.preventDefault();
    }

    let eduList = document.querySelector(".educationList");

    //Clear whatever is in the list
    while(eduList.firstChild){
        eduList.removeChild(eduList.firstChild);
    }

    education.forEach(element => {

        let li = document.createElement("li");
        let p = document.createElement("p");
        p.classList.add("title");
        let time = document.createElement("p");
        time.classList.add("time");
        
        let ul = document.createElement("ul");
        element.roles.forEach(role =>{
            let liRole = document.createElement("li");
            liRole.textContent = role;
            ul.appendChild(liRole);
        });

        p.textContent = element.title + " at " + element.institution;
        time.textContent = element.time;

        li.appendChild(p);
        li.appendChild(time);
        li.appendChild(ul);
        
        eduList.appendChild(li);
    });

}