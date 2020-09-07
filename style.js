const Classes=["Class9","Class10","Class11","Class12"];
const Show=[
	"Class 9 is important for building a strong foundation for the Class 10 Board exam. CBSE Class 9 is a turning point in students’ lives which will let them realize what is at stake for the following year. CBSE syllabus for Class 9 for the academic year 2020-2021 has been designed as per the guidelines of the CBSE Board. The syllabus offers a conceptual background and lays the groundwork for the Class 10 Board examsThe CBSE 2020 exam is to be conducted as per the CBSE syllabus and not NCERT books. Here we have provided the syllabus for all the subjects as mentioned on the official CBSE website. So, students are advised to prepare for the exam, as per the syllabus mentioned here.",
	"Class 10 is considered as the turning point in every student’s life. The result of class 10 will decide the stream for higher studies. The CBSE Class 10 Syllabus is a valuable resource for students. It includes the course structure, distribution of units marks and number of periods allocated for each unit. Along with this, the CBSE Syllabus for class 10 also provides information about reference books, projects, assignments, and practicals.","The Central Board of Secondary Education designs and prescribes the syllabus of Class 11 for the academic year 2020-2021. The syllabus of CBSE Class 11 board is also beneficial for those students who are planning to appear for competitive exams like NEET and JEE aspirants. Knowing the CBSE Class 11 syllabus of all the subjects will help students to get an idea about the topics they are going to study for the academic year 2020-2021. Class 11 CBSE Board latest syllabus is very important for students to start with a proper preparation strategy.","The Central Board of Secondary Education (CBSE) conducts the Class 12 board examination for all the streams. Class 12 is considered as the turning point in students academic career as the results of Class 12 will decide their future career options. By understanding the CBSE syllabus of Class 12, students can perform well in their exam and can prepare each subject accordingly. Referring the syllabus gives students the information about what topics they should begin with.The CBSE Board Exam 2020 is to be conducted as per the CBSE syllabus and not NCERT books. Here, we have provided CBSE Class 12 syllabus for all the subjects as mentioned in the official CBSE website. So, students are advised to prepare for the exam, as per the syllabus mentioned here."
]
function Coachingclasses()
{
		for (let i=0; i <Classes.length;i++)
			{
				const tag = document.createElement("h2");
				const text = document.createTextNode(Classes[i]);
				tag.style='color:blue'
				tag.appendChild(text);
				const element = document.getElementById("root");
				element.appendChild(tag);

				const data= document.createElement("p");
				const text2= document.createTextNode(Show[i]);
				data.appendChild(text2)
				const D1= document.getElementById("root");
				D1.appendChild(data);

			}
		}
 
const Coach=["Allen Career Institution","Resonance","Bansal","Career Point"];

const Des=["ALLEN is known to create ‘never before’ benchmarks.The past achievements were complemented with remarkable progress when our Classroom Coaching Students bagged the All India First Ranks in both the prestigious examinations of India, JEE Advanced 2014 and AIPMT 2014 respectively. In 2016, ALLEN broke it's own stupendous records of previous year results by becoming the first ever Institute of the country to produce All India Ranks 1,2,3 in both JEE Advanced and NEET- UG from classroom.",
"I have studied there for 2 years. I am sure i’m eligible to write this I am a 17 year old girl, who has just come home after 2 long years of surviving in kota.RESONANCE - KOTA is a nice place no doubt. They have good material, nice faculty and good environment.This is the place for you if—If you are a topper right from your childhood with your basic concepts CRYSTAL CLEAR (and your 10 CGPA is not the proof of it).you are ready to sacrifice the AWESOME school life of 11th and 12th.You are ready to face an ocean of emotions of all types and still survive.You are ready to work your ass off for 2 years, straight.you are ready to survive on the disgusting mess food and a nosy hostel warden.you are ready to get LOST in the sea of students in your class.you are ready if your teachers dont give a damn about you if you are not on the “top” in fact none of the teachers will know your name as there are 200 students in a batch unless,of course you are the ‘entertainer’ of the batch. Let me tell you an AVERAGE/GOOD student = NOTHING in Kota. you need to be OUTSTANDING."
,"Bansal Classes is really good. Their course structure, fees and other factors are excellent.I was lucky enough to be a student for 2 years in their Kota branch.I see that they have plenty of branches in every major city nowadays but how good the course is, It depends on the location, the best faculty is always at the head branch. No matter what they say.Also, kindly note the fact that there are plenty of coaching classes that go by the same name while they are not related to them. You have to take care while choosing the one.If the student has zeal to learn and is determined to crack the JEE he/she can do it without coaching as well. But again, it is a personal choice.If the student wants to join the coaching, Bansal Classes is the place for them."
,"Hello friends, I have been in kota coaching and take admisdion in june 2015. Now I am going to tell you some disadvantage of their coaching class.Test series are not well upto date and consisting recent pattern of question . they are still consisting old pattern.They are not using standard study material like notes and books.They are using their own and looting money .They do not maintain descipline in their students because they are not having any problem with that so their student are keep on decresing.Thanks"]

function Coaching()
{
	for (let i=0; i < Coach.length;i++)
			{
				const tag = document.createElement("h2");
				const text = document.createTextNode(Coach[i]);
				tag.style='color:blue'
				tag.appendChild(text);
				const element = document.getElementById("coaching");
				element.appendChild(tag);

				const data= document.createElement("p");
		
				const text2= document.createTextNode(Des[i]);
				data.style='color:black'
				data.appendChild(text2);
				
				const D1= document.getElementById("coaching");
				D1.appendChild(data);
			}	
		}						
