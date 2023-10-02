---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single 
title: Lehrplan   
lang: de   
ref: syl   
permalink: /MHL-Advanced-CAO/syllabus/   
toc: true  
toc_label: "Lehrplaninhalte" 
toc_icon: "book-open"  
toc_sticky: true   
read_time: true  
date: 2023-08-01  
last_modified_at: 2023-08-28   

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css"/>

<div class="lang-sidebar">
  {% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
  {% for page in pages %}
    <li class="zoom"><a href="{{ page.url }}" class="{{ page.lang }}"><span class="fi fi-{{ page.lang }}"></span></a></li>
  {% endfor %}
</div>

## Grundlegender Kurs + Kontaktinformationen  

**Kurs Nummer:** 00789   
**Semester:** Herbst/Winter 2023   
<!-- **Section:** OL20 (21310)   -->
**Zeit:** Dienstags 14:30-16:00    
**Standort:** 2.43 Elektronisches Musikstudio   
**Format:** Seminar   
**Modalität:** Persönlich<b>*</b>   
<span style="font-size: smaller;"><em><b>* Hybrid und virtuell verfügbar unter mildernden Umständen nach Ermessen des Kursleiters</b></em></span>   

**Lehrerin:** Louis Goldford  
**Email:** <a href="mailto:Louis.Goldford@mh-luebeck.de">Louis.Goldford@mh-luebeck.de</a>  
**Geschäftszeiten:** Montag — Mittwoch <mark>nach Vereinbarung</mark>   
**Bürostandort:** _"Das Aquarium"_ (neben 2.43 Elektronisches Musikstudio)  
**MHL Discord Server:** [https://discord.gg/ZQWrjtwq](https://discord.gg/ZQWrjtwq){:target="_blank"}      
**Kurs-Website:** [https://einbahnstrasse.github.io/MHL-Advanced-CAO/](https://einbahnstrasse.github.io/MHL-Advanced-CAO/){:target="_blank"}  

  

## Kursbeschreibung    

**Advanced Computer-Assisted Composition** ist ein MaxMSP- und Synthesekurs im zweiten Semester, der Studierende in die Werkzeuge der Computer-Assisted Composition (CAO) einführt. Unter Berücksichtigung einer Reihe von „Echtzeit“- und „Offline“-CAO-Paradigmen lernen die Studierenden, eine Vielzahl von MaxMSP-basierten Synthesizern und digitalen Signalverarbeitungsalgorithmen mithilfe von zu steuern [BACH library for Computer-Assisted Composition](https://www.bachproject.net/){:target="_blank"}, einschließlich Polysynthese, Audioräumlichkeit und physikalische Modellierungssynthese („modal“). Themen der algorithmischen Komposition werden häufig diskutiert, ebenso wie spezifische historische Werke zeitgenössischer Komponisten.   

Bei jedem wöchentlichen Seminar handelt es sich um einen Patching-Workshop zu einem neuen Thema, der auf der in der Vorwoche abgeschlossenen Arbeit aufbaut. _**Von den Studierenden wird daher eine regelmäßige Teilnahme erwartet.**_ Wir werden in jeder Klasse wöchentliche pädagogische Patches fertigstellen, die schnell in persönliche Projekte integriert werden können. Die meisten Arbeiten in diesem Kurs werden in Musiknotation gerendert, die leicht zur Verwendung in Software-Notationsprogrammen wie Finale, Sibelius, Lilypond usw. exportiert werden kann. Die Schüler lernen, neue Softwarebibliotheken zu verwenden, ein öffentliches _GitHub_-Repository einzurichten und zu verwalten, bestehend aus Kursarbeit, aktiver Austausch über Kursmaterialien auf unserem MHL-Discord-Server und Fertigstellung eines kleinen Projekts oder eines „work-in-progress_“, das während des vorgestellt werden soll _**Werkstatt für Aktuelle Musik**_ (17.–20. Januar 2024).   

## Kursziele      

Die Studierenden lernen, grundlegende formale Methoden der Musikgenerierung in ihren bereits etablierten persönlichen und grundlegenden MaxMSP-Workflow zu **integrieren**, indem sie **Kontrollstrukturen** wie Schleifen, Funktionen und Bedingungen erstellen. Verschiedene Datenklassen sowie historische Ansätze von Komponisten des 20. und 21. Jahrhunderts zu CAO-Methoden werden **beobachtet** und **verstanden**. Ein letzter Schritt in diesem Prozess ist die **Erstellung eines Konzertwerks** oder eines _work-in-progress_, das gegen Ende des Semesters im Rahmen eines Klassenkonzerts präsentiert wird. 

## Lernerfolge  

_Am Ende des Kurses werden erfolgreiche Studierende in der Lage sein, Folgendes zu tun:_  

* **Implementieren** und **demonstrieren** Sie die Werkzeuge der computergestützten Komposition innerhalb eines künstlerischen Arbeitsablaufs  
* **Klassifizieren** und **Identifizieren** einer Vielzahl von Synthesemethoden  
* **Entwurf** Kompositionsalgorithmen und **wende** sie auf die Steuerung von Synthesizern an  
* **Identifizieren**, **Kritik** und **Experimentieren** mit unterschiedlichen Ansätzen zur Klangsynthese  
* **Vergleich** und **Kontrast** computergestützte Echtzeit- und Offline-Methoden  
* **Fügen Sie bevorzugte Tools zu einer persönlichen kreativen Codierungspraxis zusammen, einschließlich eines logischen Debugging-Prozesses  
* **Submit**- und **Version**-Aufgaben über _GitHub_  

## Erforderliche Software + Hardware      

_See the [RESOURCES TAB](/resources){:target="_blank"} for download and documentation links._  
* personal laptop  
* headphones  
* MaxMSP  
* the bach library for computer-assisted composition  
* the Modalys library for physical modeling synthesis  
* Terminal (pre-packaged on macOS/Linux) or Terminal Emulator (download for Windows users)  
* Git version control system   
* a public account on _GitHub.com_  
* Google Chrome or any web browser that will allow you to access our Course Website & materials   
* various other plugins and apps listed throughout the semester  

## Expectations   

### Part I. General Expectations   

* **Arrive on time** to all course sessions.  
* Setup + maintain a public _GitHub_ account, and report your username to the instructor for grading at the start of the semester.  
* Spend **1-2 additional hours a week** _(outside of class)_ on the timely completion of our lab assignments and projects.  
* Submit assignments by the given deadlines: {{ site.weekly-deadline-statement }}  
* **Back up and organize your work REGULARLY on _GitHub_.** _Catastrophic loss of materials is not an excuse for missed deadlines!_  


### Part II. Weekly Preparation      

* **Study video tutorials, slides, and other assigned materials ahead of class.** Come prepared with questions if you don't understand them.  
* We will devote the majority of our class time to patching and creating, and therefore **we will be unable to present videos and slides in class.** Familiarize yourself with this background content beforehand so that you are not lost if we do not address it directly in our class session.   
* Additionally, you are strongly encouraged to **consult the recommended software documentation resources**. These provide context and will deepen your understanding as you build your own systems and creative tools.  

## Communication   

* Weekly class sessions will be held in the 2.43 Electronic Music Studio. Questions can easily be addressed before and after, if not during, our class.   
* MHL email accounts are our official means of communication, but we will also use Discord for additional discussion.  
* **Requests for assistance:** Send an email, or a message on Discord. I will respond during normal working hours; requests arriving "after hours" will be answered on subsequent weekdays.  
* Discord should be used during regular hours. Please respond during the workday as promptly as you can to inquiries from the instructor (both for email and messages sent on Discord). _Multiple successive days without a response is unacceptable._  
* **Actively participate** in our online class discussions. **Thoughtfully contribute to a positive classroom environment,** while supporting and challenging your colleagues’ ideas.  
* **Check Discord regularly** for group and private messages.  
* If you have a question that may be relevant to the group (about assignments, etc.), post it on Discord.  
* Use Discord for easy communication with your colleagues as well — you can DM individuals or selected groups.  

## General Schedule of Topics   

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
<td markdown="span"><a href="schedule/#w1" target="_blank">Introduction to the BACH library<br>for Computer-Assisted Composition (CAO)</a></td>
</tr>
<tr>
<td markdown="span">2</td>
<td markdown="span">{{ site.week-02 }}</td>
<td markdown="span"><a href="schedule/#w2" target="_blank">BACH and Polysynthesis in MaxMSP</a></td>
</tr>
<tr>
<td markdown="span">3</td>
<td markdown="span">{{ site.week-03 }}</td>
<td markdown="span"><a href="schedule/#w3" target="_blank">Spectral and Microtonal Harmony</a></td>
</tr>
<tr>
<td markdown="span">4</td>
<td markdown="span">{{ site.week-04 }}</td>
<td markdown="span"><a href="schedule/#w4" target="_blank">Using Randomness and Distributions</a></td>
</tr>
<tr>
<td markdown="span">5</td>
<td markdown="span">{{ site.week-05 }}</td>
<td markdown="span"><a href="schedule/#w5" target="_blank">Real-Time Analysis and Resynthesis</a></td>
</tr>
<tr>
<td markdown="span">6</td>
<td markdown="span">{{ site.week-06 }}</td>
<td markdown="span"><a href="schedule/#w6" target="_blank">Generating Scales, Harmonies, and Chords</a></td>
</tr>
<tr>
<td markdown="span">7</td>
<td markdown="span">{{ site.week-07 }}</td>
<td markdown="span"><a href="schedule/#w7" target="_blank">Chaotic Attractors</a></td>
</tr>
<tr>
<td markdown="span">8</td>
<td markdown="span">{{ site.week-08 }}</td>
<td markdown="span"><a href="schedule/#w8" target="_blank">Interpolation of Pitch and Rhythm</a>
</td>
</tr>
<tr>
<td markdown="span">9</td>
<td markdown="span">{{ site.week-09 }}</td>
<td markdown="span"><a href="schedule/#w9" target="_blank">Operations on Rhythm</a></td>
</tr>
<tr>
<td markdown="span">10</td>
<td markdown="span">{{ site.week-10 }}</td>
<td markdown="span"><a href="schedule/#w10" target="_blank">Introduction to SPAT~ for Multichannel Audio Spatialization</a></td>
</tr>
<tr>
<td markdown="span">11</td>
<td markdown="span">{{ site.week-11 }}</td>
<td markdown="span"><a href="schedule/#w11" target="_blank">Concert Patch Design</a></td>
</tr>
<tr>
<td markdown="span">12</td>
<td markdown="span">{{ site.week-12 }}</td>
<td markdown="span"><a href="schedule/#w12" target="_blank">Mirrors and Fractals: Webern and Risset</a></td>
</tr>
<tr>
<td markdown="span">13</td>
<td markdown="span">{{ site.week-13 }}</td>
<td markdown="span"><a href="schedule/#w13" target="_blank">Generation of Harmony: Boulez and Vivier</a></td>
</tr>
<tr>
<td markdown="span">14</td>
<td markdown="span">{{ site.week-14 }}</td>
<td markdown="span"><a href="schedule/#w14" target="_blank">Advanced FM: Chowning <i>Stria</i></a></td>
</tr>
<tr>
<td markdown="span">15</td>
<td markdown="span">{{ site.week-15 }}</td>
<td markdown="span"><a href="schedule/#w15" target="_blank">Advanced FM: DX7 Emulation</a></td>
</tr>
<tr>
<td markdown="span">16</td>
<td markdown="span">{{ site.week-16 }}</td>
<td markdown="span"><a href="schedule/#w16" target="_blank">Physical Modeling ("Modal" Synthesis), Part I: Max Library</a></td>
</tr>
<tr>
<td markdown="span">17</td>
<td markdown="span">{{ site.week-17 }}</td>
<td markdown="span"><a href="schedule/#w17" target="_blank">Physical Modeling ("Modal" Synthesis), Part II: Finite Elements</a></td>
</tr>
</tbody>
</table>
</div>



## Attendance + Participation Policy  

_Participation is based on attendance and your engagement in class, and will form a substantial portion of your grade._  

### Part I. Prompt Arrival   

* Students are expected to arrive promptly to all class sessions and remain engaged throughout.  
* On-time arrivals earn you an immediate 5 points (full participation).   
* Arrivals after 14:30 trigger the following weighted score system:

<div class="latetable">
<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Arrival Time</th>
<th>Participation Points</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">14:30 or earlier</td>
<td markdown="span">5 points (full credit)</td>
</tr>
<tr>
<td markdown="span">14:31—14:10</td>
<td markdown="span">4 points</td>
</tr>
<tr>
<td markdown="span">14:11—15:00</td>
<td markdown="span">3 points</td>
</tr>
<tr>
<td markdown="span">15:01—15:30</td>
<td markdown="span">2 points</td>
</tr>
<tr>
<td markdown="span">after 15:30</td>
<td markdown="span">1 point</td>
</tr>
<tr>
<td markdown="span">absent</td>
<td markdown="span">0 points</td>
</tr>
</tbody>
</table>
</div>

### Part II. Absences   

* Follow this **Procedure for Absences:**  
	* Contact a classmate for notes on what you missed (e.g. on Discord).
	* Check our Course Website for assignments, videos, slides, readings, etc.  
	* After these first 2 steps, contact the instructor with any additional questions.  
* **Excused absences/lateness must be accompanied by documentation** and/or include advance notice with the instructor where possible. Excused absences/lateness will not impact on your grade. Absences may be excused in cases of: documentation of illness provided by a doctor, religious observance with advance notice, official school-related activity (always with documentation and advanced notice), and on a case-by-case basis for other critical events, at the discretion of the instructor.
* _A lack of communication with the instructor about planned absences will therefore be treated as UNEXCUSED. Be in touch early._
* **Unexcused absences and lateness will result in lowered participation grades.** 

<div class="instructornote">
<p markdown="span"><em>Additionally, three (3) unexcused absences will <b>lower your participation score by 34 points</b>, which is equivalent to a 10% reduction of your Course Grade (i.e. one letter grade).<br />Each additional unexcused absence beyond 3 will further lower your participation score by <b>17 points</b>, or the equivalent of 5% increments in your Course Grade.</em></p></div>



## Academic Integrity Policy    

### Part I. General Notes on Academic Integrity   

Students and all others who work with information, ideas, texts, images, music, inventions, and other intellectual property owe their audience and sources accuracy and honesty in using, crediting, and citing sources. As a community of intellectual and professional workers, the university recognizes its responsibility for providing instruction in information literacy and academic integrity, offering models of good practice, and responding vigilantly and appropriately to infractions of academic integrity. Accordingly, academic dishonesty is prohibited in The City University of New York and at New York City College of Technology and is punishable by penalties, including failing grades, suspension, and expulsion. The complete text of the College policy on Academic Integrity may be found in the catalog.

<div class="instructornote">
<p markdown="span">**Instructor Note:** _Code borrowed from another source must be attributed as a comment within your own code. If you are unsure of whether or not your work may constitute plagiarism, please check with the instructor before submitting. Where applicable and where marked within our course materials, follow the provisions of the [Creative Commons Attribution-ShareAlike 4.0 International License.](https://creativecommons.org/licenses/by-sa/4.0/){:target="_blank"}_</p>
</div>

### Part II. Academic Integrity Pledge   

_By enrolling in this course, you pledge to uphold the policy on Academic Integrity described below:_  

I understand the value of personal integrity and ethical behavior in all aspects of my professional and personal life. By committing to honesty and personal responsibility, I earn the respect and trust of others. As a student at New York City College of Technology, I recognize that the value of my education is not just being able to say I am a college graduate, but it also incorporates the skills, values, and knowledge I have acquired. I thus commit myself to upholding academic integrity as an important aspect of my personal integrity and professional growth. I understand that academic integrity includes:  

1. Fully observing the rules governing exams and assignments regarding resource material, electronic aids, copying, collaborating with others, or engaging in any other behavior that subverts the purpose of the exam or assignment, and the directions of the instructor.   
2. Only turning in work that I have done myself, and not using unattributed work done by others. While working and studying with others can be an effective way to learn, submitted work will be my own.  
3. Giving full and proper credit to sources and references, and acknowledging the contributions and ideas of others, in my academic work.  

Further, I have read and understand the college’s [Academic Integrity Policy found in the New York City College of Technology College Catalog, p. 56 of the spring 2020 catalog.](http://www.citytech.cuny.edu/catalog/docs/catalog.pdf#page=56){:target="_blank"}  

(Modified from the Marquette University Honor Code, PB, RB; AM; 12/23/2020)  



## General Grading Rubric  

<div class="gradingtable">
<table>
<colgroup>
<col width="15%" />
<col width="8%" />
<col width="82%" />
</colgroup>
<thead>
<tr class="header">
<th>Score</th>
<th>Grade</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">93-100%</td>
<td markdown="span">A</td>
<td markdown="span">**Outstanding:** pushing the limits of both the student’s creativity and the assignment.</td>
</tr>
<tr>
<td markdown="span">90-92.9%</td>
<td markdown="span">A-</td>
<td markdown="span">**Impressive​:** demonstrates maximum aptitude and/or organizational skills.</td>
</tr>
<tr>
<td markdown="span">87-89.9%</td>
<td markdown="span">B+</td>
<td markdown="span">**High Achieving:** thoughtful and creative approach to the assignment.</td>
</tr>
<tr>
<td markdown="span">83-86.9%</td>
<td markdown="span">B</td>
<td markdown="span">**Thorough:** clear articulation of skills, concepts, and preparation.</td>
</tr>
<tr>
<td markdown="span">80-82.9%</td>
<td markdown="span">B-</td>
<td markdown="span">**Above Average:** quality work, but lacking in some problem-solving areas.</td>
</tr>
<tr>
<td markdown="span">77-79.9%</td>
<td markdown="span">C+</td>
<td markdown="span">**Well Intentioned:** submitted on time, completed according to minimum requirements.</td>
</tr>
<tr>
<td markdown="span">70-76.9%</td>
<td markdown="span">C</td>
<td markdown="span">**Average:** may need help with certain concepts and/or organization of ideas.</td>
</tr>
<tr>
<td markdown="span">60-69.9%</td>
<td markdown="span">D</td>
<td markdown="span">**Poor:** does not meet the minimum requirements.</td>
</tr>
<tr>
<td markdown="span">> 60%</td>
<td markdown="span">F</td>
<td markdown="span">**Fail:** not turned in, excessively late, or incomplete.</td>
</tr>
</tbody>
</table>
</div>  
_For a detailed list of assignments, points, and deadlines, see the [GRADING TAB.](grading.html){:target="_blank"}_  



## Course Accommodations for Students with Disabilities    

In order to receive disability-related academic accommodations students must first be registered with the Student Support Services Program (SSSP). Students who have a documented disability or suspect they may have a disability are invited to set up an appointment with Ms. Linda Buist, the program manager of SSSP (Phone: 718–260–5143, e-mail: <a href="mailto:buist@citytech.cuny.edu">buist@citytech.cuny.edu</a>). If you have already registered with SSSP, please provide your professor with the course accommodation form and discuss your specific accommodation with him/her/them.  

## A Note on City Tech’s Counseling Center   

The Counseling Services Center supports the educational, emotional and career development of City Tech students by providing opportunities for skill development, counseling and referrals that address obstacles to success. The Center is currently available to students remotely. For questions and appointments, contact the Center at <a href="mailto:counseling@citytech.cuny.edu">counseling@citytech.cuny.edu</a> or 718-260-5030.



## Inclusivity    

### Part I. Name and Pronoun Usage   

This course consists of individual work and group discussion. We must therefore strive to create an atmosphere of inclusion and mutual respect: all students will have their chosen gender pronoun(s) and chosen name recognized. If the class roster does not align with your name, gender, and/or pronouns, please inform the instructor.  

### Part II. Inclusivity Statement    

_It is my intent that students from all diverse backgrounds and perspectives be well-served by this course, that students’ learning needs be addressed both in and out of class, and that the diversity that the students bring to this class be viewed as an asset, resource, strength, and benefit, rather than a checklist item or worse, a hindrance. It is my intent to present materials and activities that are respectful of diversity: gender identity, sexuality, disability, age, socioeconomic status, ethnicity, race, nationality, religion, and culture. Your suggestions are encouraged and appreciated. Please let me know ways to improve the effectiveness of the course for you personally, or for other students or student groups. Feel free to reach out to me via email at any time about any issues concerning you or with any such ideas._  


