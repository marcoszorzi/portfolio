 let contact = 
    [{
        "phone": "(343) 996-8186",
        "email": "marcoszorzi@gmail.com",
        "linkedin": "https://ca.linkedin.com/in/marcos-zorzi-rosa",
        "city": "Ottawa, ON, Canada"
    }];

 let experience = [
    {
        "id": 1,
        "title": "Systems Consultant at Senior Curitiba",
        "time": "2018-2019",
        "roles":["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    },
    {
        "id": 2,
        "title": "Systems Administrator at Boticario Group",
        "time": "2018-2018",
        "roles":["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    },
    {
        "id": 3,
        "title": "Systems Consultant at Senior Curitiba",
        "time": "2014-2018",
        "roles":["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    },
    {
        "id": 4,
        "title": "Systems Administrator at Lactec Institutes",
        "time": "2009-2014",
        "roles":["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    }
];
 
let education = [
    {
        id: 1,
        title: "Mobile Application Design and Development",
        institution: "Algonquin College",
        degree: "Diploma",
        time: "2018-2020",
        roles:["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    },
    {
        id: 2,
        title: "MBA in Project Management",
        institution: "Positivo Universtity",
        time: "2016-2017",
        degree: "MBA",
        roles:["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
    },
    {
        id: 3,
        title: "Bachelor's in Information Systems",
        institution: "Unibrasil",
        time: "2014-2018",
        degree: "Bachelor",
        roles:["ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf","ashfuassjkf"]
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
    console.log(experience);

    setExperience();
    setEducation();
    
});

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