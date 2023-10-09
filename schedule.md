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

#### Tutorials   

#### Assignments   
* Install MaxMSP    
* Install the BACH Library   
* (deadlne for these installations: Week 2 before class! see our Resources page for instructions)   

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
* [Bach and `poly~` boiler patches](#){:target="_blank"}     

#### Tutorials  

#### Assignments  

<!-- ### File System: Shell Scripting, Permissions, Date/Time, Editing Files   -->

* * *

## Week 3: {{ site.week-03 }}  
### Spectral and Microtonal Harmony  

#### Tutorials 

#### Assignments  

* * *

## Week 4: {{ site.week-04 }}  
### Using Randomness and Distributions  

#### Tutorials  

#### Assignments   

* * *

## Week 5: {{ site.week-05 }}  
### Real-Time Analysis and Resynthesis  

#### Tutorials  

#### Assignments  

* * *

## Week 6: {{ site.week-06 }}  
### Generating Scales, Harmonies, and Chords  

#### Tutorials  

#### Assignments   

* * *

## Week 7: {{ site.week-07 }}  
### Chaotic Attractors  

#### Tutorials  

#### Assignments   

* * *

## Week 8: {{ site.week-08 }}  
### Interpolation of Pitch and Rhythm  

#### Tutorials  

#### Assignments   

* * *

## Week 9: {{ site.week-09 }}  
### Operations on Rhythm  

#### Tutorials  

#### Assignments  

* * *

## Week 10: {{ site.week-10 }}  
### Introduction to SPAT~ for Multichannel Audio Spatialization  

#### Tutorials  

#### Assignments   

* * *

## Week 11: {{ site.week-11 }}  
### Concert Patch Design   

### Tutorials 

### Assignments  

* * *

## Week 12: {{ site.week-12 }}   
### Mirrors and Fractals: Webern and Risset  

#### Tutorials  

#### Assignments   

* * *

## Week 13: {{ site.week-13 }}  
### Generation of Harmony: Boulez and Vivier    

#### Tutorials  

#### Assignments   

* * *

## Week 14: {{ site.week-14 }}  
### Advanced FM: Chowning _Stria_   

#### Tutorials 

#### Assignments  

* * *

## Week 15: {{ site.week-15 }}   
### Advanced FM: DX7 Emulation    

#### Tutorials  

#### Assignments   

* * *

## Week 16: {{ site.week-16 }}  
### Physical Modeling ("Modal" Synthesis), Part I: Max Library  

#### Tutorials   

#### Assignments  

* * *

## Week 17: {{ site.week-17 }}   
### Physical Modeling ("Modal" Synthesis), Part II: Finite Elements  

#### Tutorials  

#### Assignments   

* * *