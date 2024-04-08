---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single 
title: Syllabus      
lang: us   
ref: syl   
permalink: /   
toc: true  
toc_label: "Syllabus Contents" 
toc_icon: "book-open"  
toc_sticky: true   
sidebar:
  - title: "3D Mesh"
    image: "/assets/images/modalys.klein.bottle.v01.png"  
    image_alt: "3D Mesh"  
    text: "Model geometry for resonating objects."  
  - title: "Digital Waveguides"  
    image_alt: "Ideal String"  
    image: "/assets/images/ideal.string.v01.png"  
    text: "Waveguide model of an ideal string."  
  - title: "Particle Attractors"  
    image_alt: "Particle Attractors"  
    image: "/assets/images/mi-gen.particle.attractors.v01.png"  
    text: "Gravity pulls particles towards oscillators."  
read_time: true  
show_date: true  
date_format: "%Y-%m-%d"  
date: 2024-03-20   
last_modified_at: 2024-03-20   

---

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css"/>

<div class="lang-sidebar">
  {% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
  {% for page in pages %}
    <li class="zoom"><a href="/MHL-Physical-Modeling{{ page.url }}" class="{{ page.lang }}"><span class="fi fi-{{ page.lang }}"></span></a></li>
  {% endfor %}
</div>

<div class="top-h1-icon">
  <i class="fas fa-book-open fa-2x"></i>
</div>   -->

## 1. Essential Contact Information  

**Course Number:** 00791   
**Semester:** Summer 2024   
<!-- **Section:** OL20 (21310)   -->
**Time:** Tuesdays 14:30-16:00    
**Location:** 2.43 Electronic Music Studio   
**Format:** Seminar   
**Modality:** In-person     
<!-- <span style="font-size: smaller;"><em><b>* hybrid and virtual available in extenuating circumstances at the discretion of the instructor</b></em></span>    -->

**Instructor:** Louis Goldford  
**Email:** <a href="mailto:Louis.Goldford@mh-luebeck.de">Louis.Goldford@mh-luebeck.de</a>  
**Office Hours:** Monday — Wednedsay <mark>by appointment</mark>   
**Office Location:** 2.47A _"The Aquarium"_ (next to 2.43 Electronic Music Studio)  
**MHL Discord Server:** [https://discord.gg/2t9kcuGZ](https://discord.gg/2t9kcuGZ){:target="_blank"}      
**Course Website:** [https://einbahnstrasse.github.io/MHL-Physical-Modeling/](https://einbahnstrasse.github.io/MHL-Physical-Modeling/){:target="_blank"}  

## 2. Course Description    

**Physical Modeling Synthesis (Modal Synthesis)** is a second-semester MaxMSP and synthesis course that focuses on Physical Modeling (Modal Synthesis), a technique at the forefront of sound design utilizing niche software to simulate a physical object's acoustic vibrations. Physical models produce timbres that can be both realistic and otherworldly. Together, we will build virtual environments in which vibrating objects are assigned physical properties that shape their timbres (properties like mass, and density; materials such as stone, glass, metal, wood, etc.). We will explore the physics of resonance and the history of synthesis leading to PM techniques in the 1990s. Topics covered include: digital filtering; feedback and recursion; the source-filter model, vocal synthesis; MaxMSP’s gen~ extension to build virtual strings, plates, and membranes; the mi-gen library (“Mass-Interaction Sound Synthesis Toolbox”); the Modalys~ package, and its 3D mesh interface to visually design the geometry of vibrating objects. These tools will provide students with the ultimate flexibility producing new and “unreal” timbres and synthetic textures. Weekly in-class Max patching, occasional small assignments, and a final culmination project, a “work-in-progress,” or a “proof-of-concept” to be shared in class at the end of the semester are required. Although no formal prerequisite exists for this course, prior completion of Sound Synthesis Techniques and Creative Coding is strongly recommended. Taught by Dr. Louis Goldford and offered in English.  



### 2.1 Course Goals      

Students will learn to **integrate** basic formal methods of musical generation into their already established personal and foundational MaxMSP workflow by building filters, delays, and physical models of vibrating objects.   

### 2.2 Learning Outcomes  

_By the end of the course, successful students will be able to do the following:_  

1. **implement** and **demonstrate** the tools of physical modeling within an artistic workflow  
2. **classify** and **identify** a variety of synthesis methods      
3. **design** compositional algorithms and **apply** them to the control of synthesizers  
4. **identify**, **critique**, and **experiment** with differing approaches to sound synthesis  
5. **compare** and **contrast** various historic physical modeling approaches      
6. **assemble** favored tools into a personal creative coding practice, including a logical debugging process  
7. **submit** and **version** assignments through _GitHub_  

### 2.3 Required Software + Hardware    

_See the [RESOURCES TAB](/MHL-Physical-Modeling/resources){:target="_blank"} for download and documentation links._  
1. personal laptop  
2. headphones  
3. MaxMSP  
4. the bach library for computer-assisted composition  
5. the Modalys library for physical modeling synthesis  
6. Terminal (pre-packaged on macOS/Linux) or Terminal Emulator (download for Windows users)  
7. Git version control system   
8. a public account on _GitHub.com_  
9. Google Chrome or any web browser that will allow you to access our Course Website & materials   
10. various other plugins and apps listed throughout the semester  

## 3. Expectations   

### 3.1 General Expectations   

1. **Arrive on time** to all course sessions.  
2. Setup + maintain a public _GitHub_ account, and report your username to the instructor for grading at the start of the semester.  
3. Spend **1-2 additional hours a week** _(outside of class)_ on the timely completion of our lab assignments and projects.  
4. Submit assignments by the given deadlines: {{ site.weekly-deadline-statement }}  
5. **Back up and organize your work REGULARLY on _GitHub_.** _Catastrophic loss of materials is not an excuse for missed deadlines!_  

### 3.2 Weekly Preparation      

1. **Study video tutorials, slides, and other assigned materials ahead of class.** Come prepared with questions if you don't understand them.  
2. We will devote the majority of our class time to patching and creating, and therefore **we will be unable to present videos and slides in class.** Familiarize yourself with this background content beforehand so that you are not lost if we do not address it directly in our class session.   
3. Additionally, you are strongly encouraged to **consult the recommended software documentation resources**. These provide context and will deepen your understanding as you build your own systems and creative tools.  

### 3.3 Communication   

1. Weekly class sessions will be held in the 2.43 Electronic Music Studio. Questions can easily be addressed before and after, if not during, our class.   
2. MHL email accounts are our official means of communication, but we will also use Discord for additional discussion.  
3. **Requests for assistance:** Send an email, or a message on Discord. I will respond during normal working hours; requests arriving "after hours" will be answered on subsequent weekdays.  
4. Discord should be used during regular hours. Please respond during the workday as promptly as you can to inquiries from the instructor (both for email and messages sent on Discord). _Multiple successive days without a response is unacceptable._  
5. **Actively participate** in our online class discussions. **Thoughtfully contribute to a positive classroom environment,** while supporting and challenging your colleagues’ ideas.  
6. **Check Discord regularly** for group and private messages.  
7. If you have a question that may be relevant to the group (about assignments, etc.), post it on Discord.  
8. Use Discord for easy communication with your colleagues as well — you can DM individuals or selected groups.  

### 3.4 Self-Guided Patching   

1. All students are responsible for building each of our pedagogical patches **by themselves**, regardless of whether a student needs to be absent or late from any class session, for any reason. 
2. This policy fosters a habit of **personal practice** in Max and **promotes self-guided learning** and **understanding** of each patch's raw components.  
3. Students are also responsbile for producing their **own work** throughout the class, including their own builds of our pedagogical patches, in accordance with our [Academic Integrity Policy](#academic-integrity-policy) below.  
4. Direct copies or clones of Max patches are evident in their line-by-line code, and are therefore easily traceable. 
5. Students should rely on our **seminar discussions**, **patch comments**, **office hours**, Max's extensive **documentation**, **help files**, and **user forums** to actively troublehsoot and **debug** issues that are naturally expected to arise during patching/coding. _This is how one learns best as they engage in project work._   
6. By adopting this policy, we avoid fostering a habit of **relying on others' code**: that is, constantly borrowing Max patches from colleagues or forums without learning to understand a patch's underlying functionality.  
7. This policy is **not to enforce copying or mimicking**, but rather to promote **reasoning through the pedagogical patches** and adopting their utilization **as templates and boiler documents**, that is, as a basis for future work, aimed at **building independence and creativity**. At its core, this policy, therefore, combats the habit of **copying code** without understanding its functioning.         
8. At first, students may **progress slowly** through this process. However, just like learning to drive a car, students will become more efficient and quicker over time as they **optimize their patching routine** and **build resourcefulness**. Through our class patches and projects, students **will learn to debug faster**, to actively seek solutions from the best resources for any given necessity, and to find resolution in an efficient, self-guided manner.   

### 3.5 Attendance + Participation Policy   

> _es besteht Anwesenheitspflicht gemäß Prüfungsverfahrensordung._ 

> _Attendance is required in accordance with the examination procedure regulations._  

_Your participation is based on attendance and your engagement in class, and will form a substantial portion of your grade._   

#### 3.5.1 Prompt Arrival   

Students are expected to arrive promptly to all class sessions and remain engaged throughout for the duration of class.     

#### 3.5.2 Absences   

* German law requires that you **attend a minimum of 80% of all class sessions** in order to pass this class. 
* This means **you can miss up to 3 class sessions**.  
* However, missing a class should be avoided when possible. In a skills-building music technology course such as this one, we must ensure that you are up-to-date on our materials each week — partly because the next week will often build on the materials covered last week.  
* Missing _more than_ 3 class sessions will result in a grade reduction or possibly a failure of the course, depending on whether a student satisfies additional makeup work assigned by the instructor. In this scenario, the student completes all Max patching, assignments, projects, and any additional material assigned by the instructor to help ensure understanding or evaluation of progress. Additional materials may, in some cases, require the student to attend periodic check-in meetings with the instructor to ensure the student understands material missed in class. Failure to meet with the instructor to evaluate progress in such a circumstance will result in a grade reduction if progress is otherwise not demonstrated in the student's submitted work.  

##### 3.5.2.1 Procedure for Absences      

* Students are responsible for completing the same work outside of class that was assigned or completed in class.   
* If you must be absent for any reason, follow this **Procedure for Absences:**   

  1. Check our [Schedule](/schedule){:target="_blank"} for assignments, videos, slides, readings, etc.   
  2. Contact a classmate for **patch screenshots** and **notes** on what you missed (e.g. on Discord) _(in accordance with [3.5.2.3 Sharing Patch Screenshots](#3523-sharing-patch-screenshots) below)._   
  3. After these first 2 steps, contact the instructor with any additional questions.  
  4. Complete all assigned work one week later than original planned.      

##### 3.5.2.3 Sharing Patch Screenshots   

1. In accordance with [3.4 Self-Guided Patching](#34-self-guided-patching) above, students should **never share their patches** (.maxpat) with one another. 
2. Rather, students should **only share screenshots** of their work. In other words, all students should build each of the pedagogical patches by themselves.   
3. See [How to take a screenshot on a Mac or PC](https://reviewed.usatoday.com/laptops/features/how-to-take-a-screenshot-on-mac-and-pc){:target="_blank"} for further details.   

## 4. General Schedule of Topics   

_Please note: Our schedule of topics and their precise order may change._  
_See the [SCHEDULE TAB](schedule/){:target="_blank"} for a precise weekly breakdown._  
_For a detailed list of assignments, points, and deadlines, see the [GRADING TAB.](grading.html){:target="_blank"}_  

<div class="schedulingtable">
<table>
<colgroup>
<col width="5%" />
<col width="15%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th>Week</th>
<th>Date</th>
<th>Topic(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">1</td>
<td markdown="span">{{ site.week-01 }}</td>
<td markdown="span"><a href="schedule/#w1" target="_blank">{{ site.week-01-topic }}</a></td>
</tr>
<tr>
<td markdown="span">2</td>
<td markdown="span">{{ site.week-02 }}</td>
<td markdown="span"><a href="schedule/#w2" target="_blank">{{ site.week-02-topic }}</a></td>
</tr>
<tr>
<td markdown="span">3</td>
<td markdown="span">{{ site.week-03 }}</td>
<td markdown="span"><a href="schedule/#w3" target="_blank">{{ site.week-03-topic }}</a></td>
</tr>
<tr>
<td markdown="span">4</td>
<td markdown="span">{{ site.week-04 }}</td>
<td markdown="span"><a href="schedule/#w4" target="_blank">{{ site.week-04-topic }}</a></td>
</tr>
<tr>
<td markdown="span">5</td>
<td markdown="span">{{ site.week-05 }}</td>
<td markdown="span"><a href="schedule/#w5" target="_blank">{{ site.week-05-topic }}</a></td>
</tr>
<tr>
<td markdown="span">6</td>
<td markdown="span">{{ site.week-06 }}</td>
<td markdown="span"><a href="schedule/#w6" target="_blank">{{ site.week-06-topic }}</a></td>
</tr>
<tr>
<td markdown="span">7</td>
<td markdown="span">{{ site.week-07 }}</td>
<td markdown="span"><a href="schedule/#w7" target="_blank">{{ site.week-07-topic }}</a></td>
</tr>
<tr>
<td markdown="span">8</td>
<td markdown="span">{{ site.week-08 }}</td>
<td markdown="span"><a href="schedule/#w8" target="_blank">{{ site.week-08-topic }}</a>
</td>
</tr>
<tr>
<td markdown="span">9</td>
<td markdown="span">{{ site.week-09 }}</td>
<td markdown="span"><a href="schedule/#w9" target="_blank">{{ site.week-09-topic }}</a></td>
</tr>
<tr>
<td markdown="span">10</td>
<td markdown="span">{{ site.week-10 }}</td>
<td markdown="span"><a href="schedule/#w10" target="_blank">{{ site.week-10-topic }}</a></td>
</tr>
<tr>
<td markdown="span">11</td>
<td markdown="span">{{ site.week-11 }}</td>
<td markdown="span"><a href="schedule/#w11" target="_blank">{{ site.week-11-topic }}</a></td>
</tr>
<tr>
<td markdown="span">12</td>
<td markdown="span">{{ site.week-12 }}</td>
<td markdown="span"><a href="schedule/#w12" target="_blank">{{ site.week-12-topic }}</a></td>
</tr>
<tr>
<td markdown="span">13</td>
<td markdown="span">{{ site.week-13 }}</td>
<td markdown="span"><a href="schedule/#w13" target="_blank">{{ site.week-13-topic }}</a></td>
</tr>
<tr>
<td markdown="span">14</td>
<td markdown="span">{{ site.week-14 }}</td>
<td markdown="span"><a href="schedule/#w14" target="_blank">{{ site.week-14-topic }}</a></td>
</tr>
<tr>
<td markdown="span">15</td>
<td markdown="span">{{ site.week-15 }}</td>
<td markdown="span"><a href="schedule/#w15" target="_blank">{{ site.week-15-topic }}</a></td>
</tr>
<!-- <tr>
<td markdown="span">16</td>
<td markdown="span">{{ site.week-16 }}</td>
<td markdown="span"><a href="schedule/#w16" target="_blank">Granular Synthesis and Bach Slots</a></td>
</tr>
<tr>
<td markdown="span">17</td>
<td markdown="span">{{ site.week-17 }}</td>
<td markdown="span"><a href="schedule/#w17" target="_blank"><em>No Class!</em></a></td>
</tr> -->
</tbody>
</table>
</div>

## 5. Academic Integrity Policy    

### 5.1 General Notes on Academic Integrity   

Students and all others who work with information, ideas, texts, images, music, inventions, and other intellectual property owe their audience and sources accuracy and honesty in using, crediting, and citing sources. As a community of intellectual and professional workers, the university recognizes its responsibility for providing instruction in information literacy and academic integrity, offering models of good practice, and responding vigilantly and appropriately to infractions of academic integrity. Accordingly, academic dishonesty is prohibited at Musikhochschule Lübeck (MHL) and is punishable by penalties, including failing grades, suspension, and expulsion. 

<!-- The complete text of the College policy on Academic Integrity may be found in the catalog. -->

<span style="color: red;">**Instructor Note:** _Code borrowed from another source must be attributed as a comment within your own code. If you are unsure of whether or not your work may constitute plagiarism, please check with the instructor before submitting. Where applicable and where marked within our course materials, follow the provisions of the [Creative Commons Attribution-ShareAlike 4.0 International License.](https://creativecommons.org/licenses/by-sa/4.0/){:target="_blank"}_</span>

### 5.2 Academic Integrity Pledge   

_By enrolling in this course, you pledge to uphold the policy on Academic Integrity described below:_  

I understand the value of personal integrity and ethical behavior in all aspects of my professional and personal life. By committing to honesty and personal responsibility, I earn the respect and trust of others. As a student at Musikhochschule Lübeck (MHL), I recognize that the value of my education is not just being able to say I am a college graduate, but it also incorporates the skills, values, and knowledge I have acquired. I thus commit myself to upholding academic integrity as an important aspect of my personal integrity and professional growth. I understand that academic integrity includes:  

1. Fully observing the rules governing exams and assignments regarding resource material, electronic aids, copying, collaborating with others, or engaging in any other behavior that subverts the purpose of the exam or assignment, and the directions of the instructor.   
2. Only turning in work that I have done myself, and not using unattributed work done by others. While working and studying with others can be an effective way to learn, submitted work will be my own.  
3. Giving full and proper credit to sources and references, and acknowledging the contributions and ideas of others, in my academic work.  

<!-- Further, I have read and understand the college’s [Academic Integrity Policy found in the New York City College of Technology College Catalog, p. 56 of the spring 2020 catalog.](http://www.citytech.cuny.edu/catalog/docs/catalog.pdf#page=56){:target="_blank"}   -->

(Modified from the Marquette University Honor Code, PB, RB; AM; 12/23/2020)  

## 6. General Grading Rubric   
   
_Your course grade will be a weighted average between your completion of in-class work and out-of-class project work, attendance, and participation._  
   
## 7. Course Accommodations for Students with Disabilities    

In order to receive disability-related academic accommodations students must contact [Inclusion at MHL](https://www.mh-luebeck.de/en/studium/inclusion/){:target="_blank"}.     

### 7.1 Counseling Center   

The Psychological Counseling Services Center supports the educational, emotional and career development of MHL students by providing opportunities for skill development, counseling and referrals that address obstacles to success. For questions and appointments, more information can be found at [Psychological Counselling](https://www.mh-luebeck.de/de/studium/beratung/psychologische-beratung/){:target="_blank"}.   

## 8. Inclusivity    

### 8.1 Name and Pronoun Usage   

This course consists of individual work and group discussion. We must therefore strive to create an atmosphere of inclusion and mutual respect: all students will have their chosen gender pronoun(s) and chosen name recognized. If the class roster does not align with your name, gender, and/or pronouns, please inform the instructor.  

### 8.2 Inclusivity Statement    

_It is my intent that students from all diverse backgrounds and perspectives be well-served by this course, that students’ learning needs be addressed both in and out of class, and that the diversity that the students bring to this class be viewed as an asset, resource, strength, and benefit, rather than a checklist item or worse, a hindrance. It is my intent to present materials and activities that are respectful of diversity: gender identity, sexuality, disability, age, socioeconomic status, ethnicity, race, nationality, religion, and culture. Your suggestions are encouraged and appreciated. Please let me know ways to improve the effectiveness of the course for you personally, or for other students or student groups. Feel free to reach out to me via email at any time about any issues concerning you or with any such ideas._  


