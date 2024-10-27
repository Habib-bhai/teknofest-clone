export  interface Data {
    competitionName: string,
    participationFee: number,
    competitionImg: string,
    competitionDescription: string,
    MaximumParticipantsAllowed: number,
    objID: number,
    category: string
}



export const competitionsData: Data[] = [
    {
      competitionName: "Vuln Hunt",
      participationFee: 2500,
      competitionImg : "/categories/cyberSecurity/cyberSecurity1.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Teams will compete in a Capture the Flag (CTF) challenge, aiming to identify and exploit vulnerabilities in a pre-configured website or domain. Participants will utilize ethical hacking tools and techniques to evaluate the system’s security. The team that successfully captures the most flags by identifying and exploiting critical vulnerabilities within the allotted time will be crowned the winner.",
      objID: 0,
      category: "cyber-security"
    },
    {
      competitionName: "Circuit Design Battle",
      participationFee: 2000,
      competitionImg : "/categories/robotics/robotics1.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Teams will compete to design and build functional electronic circuits based on given specifications. Participants will demonstrate their knowledge of circuit components, circuit analysis, and breadboarding techniques. The challenge will assess teams’ ability to troubleshoot circuits and optimize designs for performance and efficiency.",
      objID: 1,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "PCB Mastery",
      participationFee: 2000,
      competitionImg : "/categories/robotics/robotics2.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Participants will compete to design optimal Printed Circuit Boards (PCBs) using specialized software. They will demonstrate their proficiency in schematic capture, PCB layout, component placement, routing, and design rule checking. The challenge will assess teams’ ability to create efficient, reliable, and manufacturable PCB designs within given constraints.",
      objID: 2,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Robot Soccer challenge",
      participationFee: 4000,
      competitionImg : "/categories/robotics/robotics3.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Teams will create advanced, soccer robots capable of complex strategies and tactics. Emphasis will be on advanced mechanics, electronics, computer vision, and artificial intelligence. Robots will demonstrate high-level skills such as passing, dribbling, and teamwork. Matches will be more intense and strategic, requiring sophisticated programming and robot design.",
      objID: 3,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Sky Warriors",
      participationFee: 8000,
      competitionImg : "/categories/robotics/robotics4.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Participants will pilot drones through a challenging obstacle course, testing their speed, agility, and precision. The course will include various obstacles, such as hoops, gates, and tunnels, designed to challenge pilots’ skills and test the capabilities of their drones. The competition will be judged based on speed, accuracy, and overall performance.",
      objID: 4,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Robo Race",
      participationFee: 2000,
      competitionImg : "/categories/robotics/robotics5.png",
      MaximumParticipantsAllowed: 4,
      competitionDescription : "The Robo Race competition challenges participants to design and build high-performance robots capable of navigating an obstacle-filled racecourse. These robots must demonstrate speed, agility, and precision as they race against time to complete the course while overcoming various hurdles. The competition tests participants’ skills in robotics, engineering, and programming, with the fastest and most efficient robot taking the victory.",
      objID: 5,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Line Following Robot – LFR (LEVEL 1)",
      participationFee: 2000,
      competitionImg : "/categories/robotics/robotics6.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Students will design and build robots capable of autonomously following a black line on a white surface. Emphasis will be on basic electronics, sensor technology, and simple programming. Robots will be judged on speed, accuracy, and ability to navigate complex line patterns.",
      objID: 6,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Line Following Robot -(LFR LEVEL 2)",
      participationFee: 3000,
      competitionImg : "/categories/robotics/robotics6.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Welcome to the Line Following Robot Beginner Race, an exciting competition that challenges the creativity and engineering skills of participants! In this event, enthusiasts and beginners in robotics design and program their own line-following robots. The objective is to navigate a predefined track with twists, turns, and curves, all while following a visible black line using sensors and intelligent algorithms. Teams will design and build high-performance line-following robots capable of navigating complex and challenging tracks. Emphasis will be on advanced sensor technology, control algorithms, and high-speed performance. Robots will be judged on speed, accuracy, consistency, and ability to handle obstacles or varying line conditions.",
      objID: 7,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Robo Sumo",
      participationFee: 5000,
      competitionImg : "/categories/robotics/robotics7.png",
      MaximumParticipantsAllowed: 4,
      competitionDescription : "Two autonomous robots will engage in a simulated sumo wrestling match within a circular arena. The objective is to forcefully push the opponent out of the ring. Robots will be judged on their mechanical design, sensor capabilities, and algorithmic intelligence. Emphasis will be on aggressive tactics, strategic maneuvering, and robust construction",
      objID: 8,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Lightweight Robo War",
      participationFee: 5000,
      competitionImg : "/categories/robotics/robotics9.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : "Welcome to the Lightweight Robo War competition, where small but mighty combat robots take the stage! In this action-packed event, robotics enthusiasts, hobbyists, and engineers come together to showcase their miniature mechanized warriors. Despite their size, these tiny robots are equipped with impressive weaponry and smart tactics, making for thrilling battles. The arena features challenging obstacles and exciting terrain, testing the agility and strategic thinking of the robots and their operators. Join us for an exhilarating display of ingenuity and technology in the world of Lightweight Robo War!",
      objID: 9,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "Heavy Weight Robo War",
      participationFee: 8000,
      competitionImg : "/categories/robotics/robotics8.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : "Teams will design and build extremely powerful and durable robots for ultimate combat. Emphasis will be on advanced engineering, sophisticated electronics, and innovative weapon systems. Robots will be allowed greater freedom in terms of size, weight, and weapon complexity. The goal is to demonstrate superior engineering, strategic thinking, and combat prowess to emerge victorious.",
      objID: 10,
      category: "robotics-and-electronics"
    },
    {
      competitionName: "FULL STACK FRENZY",
      participationFee: 4000,
      competitionImg : "/categories/programming/programming2.png",
      MaximumParticipantsAllowed: 4,
      competitionDescription : "HELLO WORLD",
      objID: 11,
      category: "programming-and-development"
    },
    {
      competitionName: "CodeXpress",
      participationFee: 1000,
      competitionImg : "/categories/programming/programming1.png",
      MaximumParticipantsAllowed: 1,
      competitionDescription : "Participants will compete to solve a series of coding problems within a strict time limit. The challenge focuses on testing participants’ problem-solving, algorithmic thinking, and coding efficiency. Winners will be determined based on the number of problems solved correctly and the speed of submission.",
      objID: 12,
      category: "programming-and-development"
    },
    {
      competitionName: "Code to Conquer",
      participationFee: 1000,
      competitionImg : "/categories/robotics.png",
      MaximumParticipantsAllowed: 1,
      competitionDescription : "Participants will be presented with a specific problem or challenge that requires a coding solution. The focus will be on the efficiency and correctness of the code, rather than simply completing the task. Challenges may include:Error Detection: Participants will write code to identify and rectify errors in existing codebases. Stack Overflow Prevention: Participants will develop code that effectively manages memory usage to avoid stack overflows, especially in recursive functions. Time and Space Complexity Analysis: Participants will analyze given code snippets and determine their time and space complexity, or optimize existing code to improve performance. Algorithm Design and Optimization: Participants will design and implement efficient algorithms for given problem sets, considering factors like time and space complexity.",
      objID: 13,
      category: "programming-and-development"
    },
    {
      competitionName: "Appathon",
      participationFee: 4000,
      competitionImg : "/categories/programming/programming3.png",
      MaximumParticipantsAllowed: 4,
      competitionDescription : "Teams will compete to develop innovative Android, iOS and hybrid applications within a specified timeframe. Participants will be judged on app functionality, user interface design, performance, and overall user experience. The challenge will test teams’ ability to create engaging and practical mobile solutions.",
      objID: 14,
      category: "programming-and-development"
    },
    {
      competitionName: "Data Wrangling Warriors",
      participationFee: 2000,
      competitionImg : "/categories/dataScienceAndAi/dataScienceAndAi1.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : "Participants will embark on a data-driven journey to uncover insights from a provided dataset. They will demonstrate their ability to transform raw data, perform exploratory data analysis, create compelling visualizations, and effectively communicate their findings through storytelling. The challenge emphasizes the entire data analysis pipeline, from data cleaning to impactful narrative building.",
      objID: 15,
      category: "data-science-and-ai"
    },
    {
      competitionName: "Computer Visionary Challenge",
      participationFee: 2000,
      competitionImg : "/categories/dataScienceAndAi/dataScienceAndAi3.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : "Participants will compete to develop innovative computer vision applications using advanced techniques like image classification, object detection, image segmentation, and image generation. The challenge will assess teams’ ability to extract meaningful information from visual data and create practical solutions for real-world problems",
      objID: 16,
      category: "data-science-and-ai"
    },
    {
      competitionName: "PITCH YOUR IDEA",
      participationFee: 2000,
      competitionImg : "/categories/businessAndFinance/Idea_pitching.png",
      MaximumParticipantsAllowed: 1,
      competitionDescription : "The Idea Pitching Competition invites participants to present innovative ideas that leverage technology for the advancement of key sectors such as education, healthcare, agriculture, medicine, and urban planning. This competition focuses on creative solutions that address real-world challenges, aiming to foster technological innovations that can drive progress in these critical areas. Participants will pitch their concepts to a panel of experts, showcasing the potential impact and feasibility of their ideas.",
      objID: 17,
      category: "business-and-finance"
    },
    {
      competitionName: "BridgeQuest",
      participationFee: 2000,
      competitionImg : "/categories/engineering/engineering1.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : "Participants will compete to construct the strongest and most efficient bridge using only sticks or wooden dowels. The bridges will be tested to their maximum load capacity, with the winner determined by the bridge that can support the heaviest weight before collapsing. The challenge emphasizes creativity, problem-solving skills, and structural engineering principles.",
      objID: 18,
      category: "engineering-competitions"
    },
    {
      competitionName: "CAD Craze",
      participationFee: 1000,
      competitionImg : "/categories/engineering/engineering2.png",
      MaximumParticipantsAllowed: 1,
      competitionDescription : "Participants will create a detailed 3D model of a given object or component using computer-aided design (CAD) software. The model should accurately represent the object’s geometry, dimensions, and features. Participants will be evaluated based on the accuracy, completeness, and efficiency of their models.",
      objID: 19,
      category: "engineering-competitions"
    },
    {
      competitionName: "Water Rocket Wars",
      participationFee: 3000,
      competitionImg : "/categories/engineering/engineering3.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "Participants will design, build, and launch water rockets using basic materials and principles of hydraulics. The goal is to achieve the highest altitude and longest flight time. The competition will test participants’ understanding of hydraulic pressure, rocket design, and launch techniques.",
      objID: 20,
      category: "engineering-competitions"
    },
    {
      competitionName: "SKY SOARERS",
      participationFee: 3000,
      competitionImg : "/categories/engineering/engineering4.png",
      MaximumParticipantsAllowed: 3,
      competitionDescription : "HELLO WORLD",
      objID: 21,
      category: "engineering-competitions"
    },
   
    {
      competitionName: "ML & NLP MASTERY CHALLENGE",
      participationFee: 2000,
      competitionImg : "/categories/dataScienceAndAi/dataScienceAndAi2.png",
      MaximumParticipantsAllowed: 2,
      competitionDescription : " HELLO WORLD ",
      objID: 22,
      category: "data-science-and-ai"
    }
  ]