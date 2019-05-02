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
               "Mongo DB", "Cordova, Ajax, REST API and CORS", 
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
        level: 90
    },
    {
        id: 2,
        skill: "JavaScript",
        level: 80
    },
    {
        id: 3,
        skill: "C, C++",
        level: 70
    },
    {
        id: 4,
        skill: "C#",
        level: 50

    },
    {
        id: 5,
        skill: "Java",
        level: 70
    },
    {
        id: 6,
        skill: "Photoshop, Illustrator & XD",
        level: 70
    },
    {
        id: 7,
        skill: "SQL",
        level: 90
    },
    {
        id: 8,
        skill: "Oracle",
        level: 70
    },
    {
        id: 8,
        skill: "MongoDB",
        level: 80
    }
];

let portfolio = [
    {
        id: 1,
        name: "PIZZA SHOP",
        description: "Full-stack developed website, using HTML 5, CSS 3, NodeJS, MongoDB, Express and CRUD.",
        platform: "Web",
        screenshot: "./img/web_pizzashop.png",
        link: "https://zorz0004.github.io/pizzashop/"
    },
    {
        id: 2,
        name: "PLAYR",
        description: "Music player developed with Cordova using Cordova Media plugin.",
        platform: "Android",
        screenshot: "./img/a_playr.png",
        link: "https://zorz0004.github.io/playr"
    },
    {
        id: 3,
        name: "FINDR",
        description: "Geolocation app developed with Cordova using Google Maps API.",
        platform: "iOS",
        screenshot: "./img/ios.png",
        link: "https://zorz0004.github.io/findr"
    }
]

document.addEventListener('DOMContentLoaded', () => {

    //Responsive menu
    document.querySelector(".hamburger").addEventListener("click", function(ev){
        ev.preventDefault();
        if(document.querySelector(".navbar").classList.contains("hide")){
            document.querySelector(".navbar").classList.remove("hide");
            document.querySelector(".hamburger").classList.add("reverse");
        }else{
            document.querySelector(".navbar").classList.add("hide");
            document.querySelector(".hamburger").classList.remove("reverse");
        }
    });

    setProfile();
    setSkills();
    setExperience();
    setEducation();
    setPortfolio();
});

function setProfile(ev){
    if(ev){
        ev.preventDefault();
    }

    //Left side
    let contactInfo = document.querySelector(".contactInfo");

    //Set values
    contactInfo.querySelector(".phone").querySelector(".myPhone").innerText = contact.phone;
    contactInfo.querySelector(".email").querySelector(".myEmail").innerText = contact.email;
    contactInfo.querySelector(".linkedin").querySelector(".myLinkedIn").href = contact.linkedin;
    contactInfo.querySelector(".linkedin").querySelector(".myLinkedIn").innerText = "Click to Go";
    contactInfo.querySelector(".city").querySelector(".myCity").innerText = contact.city;


    //right side
    let about = document.querySelector(".aboutr");

    //Set values
    about.querySelector(".picture").src = contact.picture;
    about.querySelector(".description").innerText = contact.about;
}

function setSkills(ev){
    if(ev){
        ev.preventDefault();
    }

    let skillList = document.querySelector(".skillsList");

    //Clear whatever is inside the list
    while(skillList.firstChild){
        skillList.removeChild(skillList.firstChild);
    }

    
    //Left List
    skillsL = document.createElement("ul");
    skillsL.classList.add("skillsL");

    //Center List
    skillsC = document.createElement("ul");
    skillsC.classList.add("skillsC");

    //Right List
    skillsR = document.createElement("ul");
    skillsR.classList.add("skillsR");


    let count = 0;
    skills.forEach(element =>{
        //Create Elements
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("progressbar");
        let divP = document.createElement("div");


        //Set values
        li.innerText = element.skill;
        divP.setAttribute("style",`width:${element.level}%;`);

        div.appendChild(divP);

        li.appendChild(div);

        if(count <= 2){
            skillsL.appendChild(li);
        } else if(count > 2 && count <= 5){

            skillsC.appendChild(li);
        } else{

            skillsR.appendChild(li);
        }

        count++;
    });

    //Append Lists
    skillList.appendChild(skillsL);
    skillList.appendChild(skillsC);    
    skillList.appendChild(skillsR);

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

    //Populate elements
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

    //Populate elements
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

function setPortfolio(ev){
    if(ev){
        ev.preventDefault();
    }

    let cards = document.querySelector(".portfolio").querySelector(".cards");

    //Clear whatever is in the list
    while(cards.firstChild){
        cards.removeChild(cards.firstChild);
    }

    //Populate elements
    portfolio.forEach(element => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let p =document.createElement("p");
        let pl = document.createElement("p");
        let a = document.createElement("a");
        
        img.setAttribute("alt", element.name.toLowerCase());
        h2.classList.add("name");
        p.classList.add("description");
        pl.classList.add("platform");
        a.classList.add("link");
        a.setAttribute("class","link");
        a.setAttribute("target","_blank");

        img.src = element.screenshot;
        h2.textContent = element.name;
        p.textContent = element.description;
        pl.textContent = "Platform: " + element.platform;
        a.href = element.link;
        a.innerHTML = "Take a look...";

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(pl);
        div.appendChild(a);

        li.appendChild(div);
        cards.appendChild(li);
    })


}

