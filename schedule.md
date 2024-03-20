---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: archive
layout: single   
title: Schedule   
lang: en   
ref: sched   
permalink: /schedule/   
# sidebar:
#   nav: "schedule-toc"   
toc: true  
toc_label: "Schedule" # default: Content
toc_icon: "bell"  # corr esponding Font Awesome icon name without the "fa" prefix
toc_sticky: true   # enables sticky toc 
read_time: true  
date: 2024-03-20   
last_modified_at: 2024-03-20   

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css"/>

<div class="lang-sidebar">
  {% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
  {% for page in pages %}
    <li class="zoom"><a href="{{ page.url }}" class="{{ page.lang }}"><span class="fi fi-{{ page.lang }}"></span></a></li>
  {% endfor %}
</div>

<div class="top-h1-icon">
  <i class="fas fa-bell fa-2x"></i>
</div>

<!-- <img src="/Goldford-MTEC1003/assets/organized.gif" alt="organized" width="400" align="right"> -->

<!-- # Schedule -->
_This page will be updated frequently with examples, video tutorials, links to new resources, and occasional updates to LAB ASSIGNMENTS. Our schedule follows the [Current MHL Academic Calendar]({{ site.MHL-calendar }}){:target="_blank"}. The following topics and their precise order may change. Check here for updates!_  

* * *

## Week 1: {{ site.week-01 }}  
### Introduction to the BACH library for Computer-Assisted Composition (CAO)  

#### Start-of-Semester Business  

* Review [Syllabus + course policies.](/MHL-Advanced-CAO/index.html){:target="_blank"}  
* Review [Software Installation.](/MHL-Advanced-CAO/resources/){:target="_blank"}  
* Review [Detailed Breakdown of Grading.](/MHL-Advanced-CAO/grading/){:target="_blank"}  

#### Listening   
* [Hugh Le Caine, _Dripsody_ (1955)](https://youtu.be/zvHSvSBwFYM?si=5ZvFFPUpYwWrJ08L){:target="_blank"}  
* [Joshua Banks Mailman‘s analysis of _Dripsody_](/MHL-studio-methods/assets/images/Mailman.Dripsody.Analysis.png){:target="_blank"}  

#### Downloads  
* [Interacting With `bach.roll` boiler patches](https://github.com/einbahnstrasse/interacting-with-bach-roll){:target="_blank"}     

#### Assignments   
* Install MaxMSP    
* Install the BACH Library   
* (deadline for these installations: Week 2 before class! see our Resources page for instructions)   

<!-- * [About the Command Line](/Goldford-MTEC1003/labs/01/command-line.html){:target="_blank"}  
* [Entering Commands](/Goldford-MTEC1003/labs/01/entering-commands.html){:target="_blank"}  
* [Navigating the File System](/Goldford-MTEC1003/labs/01/file-system.html){:target="_blank"}  
* [Paths](/Goldford-MTEC1003/labs/02/paths-review.html#1.0){:target="_blank"}  
* [Output, Download, and Uncompress](/Goldford-MTEC1003/labs/02/output-download-uncompress.html){:target="_blank"}   -->

<!-- #### Video Tutorial
##### Stepping Through Week 1 Slides + Labs     -->

<!-- <div class="video">
    <figure>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O617zAPuNng" frameborder="0" allowfullscreen></iframe>
    </figure>
</div>
_Normally we won't record our classes but sometimes we may in order to clarify complex topics. This video is archived from a previous version of this class, but the directions are all the same. For the 2 labs (below) this week, enter your respones in the text files and then save your changes directly on GitHub (i.e. "commit" your changes), as demonstrated and described in class and in this video. The slides above will help guide you to these answers, so be sure to study them and use to your advantage. Don't forget to study the slides for Week 2 before next class!_   

##### Lab Assignments

<div class="instructornote"><p markdown="span"><em>{{ site.weekly-deadline-statement }}</em></p></div>  
* [Setting Up GitHub for Submitting Labs](/Goldford-MTEC1003/labs/01/how.to.submit.1st.week.labs.html){:target="_blank"}  
* [Lab 1 / Part 1: Commands + Navigation](https://github.com/einbahnstrasse/mtec1003-week1-labs/blob/master/lab.01.part1.commands.navigation.txt){:target="_blank"}  
* [Lab 1 / Part 2: Download + (Un)Compress](https://github.com/einbahnstrasse/mtec1003-week1-labs/blob/master/lab.01.part2.download.compress.txt){:target="_blank"}   -->

* * *

<!-- <a id="w2"></a> -->
<!-- <h3 class="schedule-page-date">Week 2: {{ site.week-02 }}</h3> -->
## Week 2: {{ site.week-02 }}  
### BACH and Polysynthesis in MaxMSP  

#### Downloads   
* [Bach and `poly~` boiler patches](https://github.com/einbahnstrasse/bach-poly-boiler-patches/){:target="_blank"}     

#### Listening   
* Goeun talks about her new piece _"Into Another"_  

<!-- #### Tutorials   -->

#### Assignments   
* Assign & disucss [Final Exam: Mixed Piece with Max Patch](/MHL-Advanced-CAO/final-mixed-piece/){:target="_blank"}   
* Consider the [score for _**Giffen Good**_ (2014) for Trombone and Live Electronics](https://drive.google.com/file/d/0BwEuqJNr_Pm2SVhTNlZwdWRMSDQ/view?usp=sharing&resourcekey=0-VGg0No-RZ5esl5DVr_0Ygg){:target="_blank"} — as an example approach to using Bach for **generative notation** in a piece of **mixed music**        


<!-- ### File System: Shell Scripting, Permissions, Date/Time, Editing Files   -->

* * *

## Week 3: {{ site.week-03 }}  
### Spectral and Microtonal Harmony  

<!-- #### Tutorials  -->  

#### Listening   
* "Nikola Kołodziejczyk’s **_Instant Ensemble_** is a response to predictable and repeatable music tours. Sheet music for each concert of the seven-piece band is created live literally in front of the audience, composed in real-time by Nikola" :   

{% include video id="gasJc0VEuo8" provider="youtube" %}    

* Claude Vivier, **_Lonely Child_** (1980)      
  <!-- - _Excerpts to be determined._ -->

{% include video id="pnaeUfNE-ew" provider="youtube" %}    

#### Assignments  
* Assign + discuss the [Microphone Cable Coiling](https://einbahnstrasse.github.io/MHL-Advanced-CAO/xlr-cable-coiling/){:target="_blank"} Assignment.  

* * *  

## Week 4: {{ site.week-04 }}  
### _No Class!_    

#### Assignments   
* [Alternative Proposal Checkpoint](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}    

* * *  

## Week 5: {{ site.week-05 }}  
### Using Randomness and Distributions  

<!-- #### Tutorials   -->  

#### Downloads  
* [Using Randomness and Reservoirs: Boiler Patches](https://github.com/einbahnstrasse/week.5.boiler.patches){:target="_blank"}     

#### Listening   
* Shai Cohen, **_Algorithmic Puzzle_** (2020) for Piano and Electronics: "_By pressing a key, the Markov synthesis moves forward one step. The notation is what the players press..._"     

{% include video id="SYxSvWVY17Q" provider="youtube" %}    

#### Assignments   
* Assign the [Story Curves Project](https://einbahnstrasse.github.io/MHL-Advanced-CAO/story-curves/){:target="_blank"}      
* [1st Checkpoint](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}     

* * *   

## Week 6: {{ site.week-06 }}  
<!-- ### Generating Scales, Harmonies, and Chords   -->
### _No Class!_  

<!-- #### Tutorials   -->

#### Assignments  
* <span style="color: red;"><em>Deadline to send + receive XLR Cable Coiling videos.</em></span>  

* * *

## Week 7: {{ site.week-07 }}  
### Real-Time Analysis and Resynthesis  

#### Tutorials    
* [Introduction to <pfft~> Boiler Patches](https://github.com/einbahnstrasse/week.7.boiler.pfft/){:target="_blank"}     

#### Listening   
* Jonathan Bell, **_Au Commencement_** (2016) for Choir and Electronics       

{% include video id="uVGPa1Z6Ji8" provider="youtube" %}    

#### Assignments   
* <span style="color: red;"><em>Deadline for Story Curves Project</em></span>     
* [Midterm Exam Checkpoint](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}    

* * *

## Week 8: {{ site.week-08 }}  
### _No Class!_  

<!-- #### Tutorials   -->

#### Assignments      
* Install MuBu before Week 8 _(See Resources page for details...)_    
* Hans Tutschku, **_Shadow of bells_** (2014) for Piano and Live Electronics  
  - _Watch all 4 video clips in Hans’ series. Here is Part 1:_    

<iframe src="https://player.vimeo.com/video/371859612?h=bb2544d760&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>  

  - [Part 2](https://vimeo.com/371859285){:target="_blank"}     
  - [Part 3](https://vimeo.com/371859404){:target="_blank"}     
  - [Part 4](https://vimeo.com/371859503){:target="_blank"}     

* * *

## Week 9: {{ site.week-09 }}  
### Concert Patch Design   

#### Tutorials    
* [MyMagnumOpus Boiler Patch](https://github.com/einbahnstrasse/MHL-CAO-spat-boiler){:target="_blank"}     

#### Assignments   
* Start assembling and formatting your piece using today's concert patch template!  

* * *

## Week 10: {{ site.week-10 }}  
### Chaotic Attractors    

#### Definitions  
* [Chaos Theory](https://en.wikipedia.org/wiki/Chaos_theory){:target="_blank"}   
* [Strange Attractor](https://en.wikipedia.org/wiki/Attractor){:target="_blank"}   
* [Thomas' cyclically symmetric attractor](https://en.wikipedia.org/wiki/Thomas%27_cyclically_symmetric_attractor){:target="_blank"}   
* [MIT Animation of the Thomas Attractor](https://turbowarp.org/197965154){:target="_blank"}   

>"the trajectory of a frictionally dampened particle moving in a 3D lattice of forces"  

>"_b_ corresponds to how dissipative the system is"   

>"_dt_ is the time step: larger values means the particles move faster"   

#### Tutorials  
* [List of Strange Attractors + Fractals](http://www.3d-meier.de/tut19/Seite0.html){:target="_blank"}   
* [Chaotic Sounds Video Tutorial](https://youtu.be/EwunJYwxNcs?si=Rl-yXsSsj6ZUIVhV){:target="_blank"}    

<iframe width="560" height="315" src="https://www.youtube.com/embed/EwunJYwxNcs?si=K4f8AMN_iiqDRYsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Downloads   
* [Chaotic boiler patches](https://github.com/einbahnstrasse/MHL-AC-chaos-boiler){:target="_blank"}    

<!-- #### Assignments    -->

* * *

## Week 11: {{ site.week-11 }}  
### Introduction to SPAT~ for Multichannel Audio Spatialization  

<!-- ### Tutorials  -->

### Assignments   
* [Concert Patch Checkpoint](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}    


* * *

## Week 12: {{ site.week-12 }}   
### Interpolation of Pitch and Rhythm   

<!-- #### Tutorials   -->

#### Listening   
* Magnus Lindberg, **_Joy_** (1989) for Ensemble and Electronics (_excerpts_)  
  <!-- - _Excerpts to be determined._ -->

{% include video id="qtzqw2Gv2pQ" provider="youtube" %}    

<!-- #### Assignments   -->

#### Assignments   
* <span style="color: red;"><em><a href="https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints" target="_blank">Tech Rider Deadline</a></em></span>
<!-- * [Tech Rider Deadline](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}     -->

* * *

## Week 13: {{ site.week-13 }}  
### Werkstatt für Aktuelle Musik   
_Schedule to be announced..._    

<!-- #### Tutorials   -->

#### Assignments   
* <span style="color: red;"><em><a href="https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints" target="_blank">Deadline for Final Exam piece</a></em></span>
<!-- * [Deadline for Final Exam piece](https://einbahnstrasse.github.io/MHL-Advanced-CAO/final-mixed-piece/#21-checkpoints){:target="_blank"}     -->

* * *

## Week 14: {{ site.week-14 }}  
### Mirrors and Fractals: Webern and Risset  

### Listening   
* Anton Webern, **_Variations for Piano_**, Op. 27 (1936)   

{% include video id="LOhZjgsqQ04" provider="youtube" %}    

* Jean-Claude Risset, **_Huit esquisses en duo pour un pianiste_** (1989)  
  - II. Mirrors (2:19)    
  - IV. Fractals (5:53)   

{% include video id="Tz5qqMyAg88" provider="youtube" %}    

### Assignments  

* * *

## Week 15: {{ site.week-15 }}   
### Advanced FM   

<!-- #### Tutorials  -->

### Listening   
* John Chowning, **_Stria_** (1977)   

{% include video id="fTU1v0bPRE4" provider="youtube" %}    

#### Assignments  

* * *