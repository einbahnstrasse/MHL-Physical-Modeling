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
### <span style="color: #10999e;">{{ site.week-01-topic }}</span>    

#### Start-of-Semester Business  

* Review [Syllabus + course policies.](/MHL-Physical-Modeling/index.html){:target="_blank"}  
* Review [Software Installation.](/MHL-Physical-Modeling/resources/){:target="_blank"}   
<!-- * Review [Detailed Breakdown of Grading.](/MHL-Physical-Modeling/grading/){:target="_blank"}   -->

#### Listening     
* [Example of a metal beam structure excited by plucking forces (using the mi-gen~ package)](https://youtu.be/jgzVsZeTNGo?si=31ylLUjj55pTOVwO){:target="_blank"}     

{% include video id="jgzVsZeTNGo?si=31ylLUjj55pTOVwO" provider="youtube" %}   

* [Marco Stroppa, _Come Play with Me_, VI. Strike)](https://youtu.be/DFWmCVs5GV0?si=r6_2FyZTtQ6yGL80){:target="_blank"}     

{% include video id="DFWmCVs5GV0?si=r6_2FyZTtQ6yGL80" provider="youtube" %}   

#### Tutorials     
* [What is Physical Modeling Synthesis?](https://www.perfectcircuit.com/signal/what-is-physical-modeling){:target="_blank"}    
* Prof. Jon Nelson Physical Modeling slides:   
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSdN_FURnfLtRS0CMMsSkrHPWrZcsKUXj7wFuXP2GdzBQQlqfOfVGgMFyYYdXSjnQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="624" height="486" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>   

* [Demystyfying Digital Filters (reference)](https://cycling74-web-uploads.s3.amazonaws.com/57ec430afd747b8a71b4f1ab/2021-03-26T22:03:16Z/demystifying-digital-filters.pdf){:target="_blank"}  
* [Basic Signal Diagram Components](assets/images/basic.signal.diagram.components.png){:target="_blank"}    

<!-- ![Basic Signal Diagram Components](assets/images/basic.signal.diagram.components.png)   -->

#### Downloads  
<!-- * [Interacting With `bach.roll` boiler patches](https://github.com/einbahnstrasse/interacting-with-bach-roll){:target="_blank"}      -->

#### Assignments _(always due before the next class!)_   
* Install + Authorize MaxMSP    
* Install the CNMAT Externals package (_Search for_ `CNMAT Externals` _in Package Manager. See instructions for using the Max Package Manager on our Software + Resources page_.)   
* [Filter Characteristics (Digital Filter Basics)](https://youtu.be/autPNZ9XMa4?si=1FTZB6r6q1NZ5ymU){:target="_blank"}         

{% include video id="autPNZ9XMa4?si=pl-cVyLcmF4pHsWW" provider="youtube" %}    
* [Test Signals (Digital Filter Basics)](https://youtu.be/ItYpQ7hMupQ?si=6lK6s9uRPHI5T4Ck){:target="_blank"}         

{% include video id="ItYpQ7hMupQ?si=6lK6s9uRPHI5T4Ck" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
- filter   
- delay  
- `<pass~>`  
- `<delay~>`   
- constructive interference    
- destructive interference    
- digital filter   
- first-order filter    
- smoothing filter    
- frequency response   
- phase response   
- phase shift   
- attenuation   
- cutoff frequency      
- pass band   
- stop band   
- rolloff   
- DC signal   
- Nyquist signal   
- impulse signal   
- physical modeling synthesis      
- exciter  
- resonator    

* * *

## Week 2: {{ site.week-02 }}  
### <span style="color: #10999e;">{{ site.week-02-topic }}</span>    

#### Tutorials    

##### Mechanical Resonance    
_Watch just a few moments of these examples._   
* [Tacoma Narrows Bridge Collapse (1940)](https://youtu.be/j-zczJXSxnw?si=xmXJD0aquZbH-n8-&t=8){:target="_blank"}      

{% include video id="j-zczJXSxnw?si=BMd-ccMB243qXVi8&t=8" provider="youtube" %}    

* [Pogo Oscillations on the Apollo 6 Rocket (1967)](https://youtu.be/pOOrXWLLza0?si=Yl2PoY3VLfGfxG8A&t=14){:target="_blank"}      

{% include video id="pOOrXWLLza0?si=Yl2PoY3VLfGfxG8A&t=14" provider="youtube" %}    


#### Downloads   

#### Listening   

#### Assignments   
* [Feedforward Filter (Digital Filter Basics)](https://youtu.be/ffVcEvYvtcQ?si=_ChokCMOvwgirz4f){:target="_blank"}       

{% include video id="ffVcEvYvtcQ?si=_ChokCMOvwgirz4f" provider="youtube" %}    

* [FIR: Finite Impulse Response Filters (Digital Filter Basics)](https://youtu.be/_WoqwSBkhj0?si=Nv6X9APyvN2TFK96){:target="_blank"}         

{% include video id="_WoqwSBkhj0?si=Nv6X9APyvN2TFK96" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
- resonance   
- mechanical resonance   
- pogo oscillation   
- resonant frequency  
- resonant filter   
- resonance model        
- `<resonators~>`   
- filter topology   
- register   
- _x<sub>(n)</sub>_   
- _y<sub>(n)</sub>_  
- _x<sub>(n-1)</sub>_   
- _Z<sup>(-N)</sup>_   
- _a_   
- _a<sub>0</sub>_      
- _a<sub>1</sub>_      
- ∑     
- feedforward filter   
- finite impulse response (FIR)    
- filter stablility      
- filter tap    
- time smearing artefact      
- linear phase response      

* * *

## Week 3: {{ site.week-03 }}  
### <span style="color: #10999e;">{{ site.week-03-topic }}</span>    

#### Tutorials   

#### Downloads   
* [Chant manual (coming soon!)](#){:target="_blank"}       

#### Listening   

#### Assignments   
* [Feedback Filter (Digital Filter Basics)](https://youtu.be/NC_dAcvYLsc?si=8KZ38cZTjPHXmMcq){:target="_blank"}       

{% include video id="NC_dAcvYLsc?si=8KZ38cZTjPHXmMcq" provider="youtube" %}    

* [IIR: Infinite Impulse Response Filters (Digital Filter Basics)](https://youtu.be/ap1qXBTKU8g?si=v2Y2SJhsltlTc5La){:target="_blank"}         

{% include video id="ap1qXBTKU8g?si=v2Y2SJhsltlTc5La" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
- formant   
- vowel   
- speech synthesis   
- pulse train   
- larynx   
- source-filter model   
- `<poly~>`  
- feedback filter   
- _b<sub>1</sub>_   
- _∞_   
- inifnite impulse response (IIR)      
- filter instability   
- blowing up a filter   
- impulse response   
- driving a filter to 0 (zero)   
- driving a filter to ∞ (pole)   
- poles and zeros   
- bi-quad filter   
- non-linear phase response  
- transient response   

* * *  

## Week 4: {{ site.week-04 }}  
### <span style="color: #10999e;">{{ site.week-04-topic }}</span>    

#### Tutorials   
* [Gregory Taylor's Introduction to gen~ Tutorial series (optional)](https://cycling74.com/tutorials/gen-video-tutorial-series){:target="_blank"}         
* [Musicdsp.org (optional)](https://www.musicdsp.org/en/latest/){:target="_blank"}     

#### Assignments   

* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
- single-sample delay   
- _Z<sup>(-N)</sup>_   
- `<gen~>`    
- `<history>`   
- `<param>`   
- `<codebox>`   
- `<twopi>`  
- `<tan>`   
- `<samplerate>`   

* * *  

## Week 5: {{ site.week-05 }}  
### <span style="color: #10999e;">{{ site.week-05-topic }}</span>    

#### Tutorials    
* [Reference page for the Karplus-Strong Algorithm (Stanford)](https://ccrma.stanford.edu/~jos/pasp/Karplus_Strong_Algorithm.html){:target="_blank"}     
* [Reference page for Digital Waveguides (Stanford)](https://ccrma.stanford.edu/~bilbao/booktop/node15.html){:target="_blank"}     

#### Downloads  

#### Listening   

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
* Karplus-Strong Algorithm  
* Waveguide synthesis   
* scattering junction      
  
* * *   

## Week 6: {{ site.week-06 }}  
### <span style="color: #10999e;">{{ site.week-06-topic }}</span>    

#### Tutorials  

#### Assignments  
<!-- * <span style="color: red;"><em>Deadline to send + receive XLR Cable Coiling videos.</em></span>   -->
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

## Week 7: {{ site.week-07 }}  
### <span style="color: #10999e;">{{ site.week-07-topic }}</span>    

#### Tutorials    

#### Listening   

#### Assignments   
* prepare for our guest Christopher Trapani next week _(stand by for materials to examine, which will be posted here later)_   
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

## Week 8: {{ site.week-08 }}  
### <span style="color: #10999e;">{{ site.week-08-topic }}</span>    

#### Tutorials  
* [Basic Concepts of Synthesis with Modalys](https://support.ircam.fr/docs/Modalys/current/Introduction.html#basic-concepts-of-synthesis-with-modalys){:target="_blank"}         

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
* `access-in-position`   
* `access-out-position`   
* `<modalys~>`   
* `<mlys.script>`  
* `<mlys.point-input>`   
* `<mlys.point-output>`   
* `<mlys.mono-string>`  
* `<mlys.signal>`   
* `<mlys.bow>`   
* `<mlys.position>`   
<!-- 01a-string+force_sigctrl.maxpat -->   

* * *

## Week 9: {{ site.week-09 }}  
### <span style="color: #10999e;">{{ site.week-09-topic }}</span>    

#### Tutorials    

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
* `freq-loss`   
* `const-loss`   
* density   
* Young's modulus   
* Poisson coefficient (Poisson's ratio)    
* material properties   
* `<mlys.rect-plate>`  
* `<mlys.strike>`  
* `<mlys.mono-string>`  
* `<mlys.mono-two-mass>`   
<!-- 05a-mlys_plate+strike_sigctrl.maxpat -->   

* * *

## Week 10: {{ site.week-10 }}  
### <span style="color: #10999e;">{{ site.week-10-topic }}</span>    

#### Definitions  
  
#### Tutorials  

#### Downloads   

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

## Week 11: {{ site.week-11 }}  
### <span style="color: #10999e;">{{ site.week-11-topic }}</span>    

### Tutorials 

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
* `<mlys.melt-hybrid>`   

* * *

## Week 12: {{ site.week-12 }}   
### <span style="color: #10999e;">{{ site.week-12-topic }}</span>    

#### Tutorials  
* [3D Finite Elements in Modalys](https://support.ircam.fr/docs/Modalys/current/Finite_Elements.html){:target="_blank"}    
* Finite Elements in ModaLisp   
* Finite Elements using the `<mlys.lua>` controller    

#### Listening   

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts    
* finite element   
* mesh   
* controller   
* access  
* connection    
* listening point   
* `make-mesh`   
* `compute-modes`   
* `.modal`   
* `<mlys.read-from-file>`   
* Medit   
* `<mlys.lua>`   

* * *

## Week 13: {{ site.week-13 }}  
### <span style="color: #10999e;">{{ site.week-13-topic }}</span>    

#### Tutorials  

#### Assignments   
* prepare for our guest Jason Thorpe Buchanan next week _(stand by for materials to examine, which will be posted here later)_    
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

## Week 14: {{ site.week-14 }}  
### <span style="color: #10999e;">{{ site.week-14-topic }}</span>    

### Listening   
   
#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

## Week 15: {{ site.week-15 }}   
### <span style="color: #10999e;">{{ site.week-15-topic }}</span>    

#### Tutorials   

### Listening   

#### Assignments  
* **Finish these patches** we made in class:   
  - _Patch list coming soon!_    

#### Terms, Concepts, Objects, Shortcuts  
_Terms list coming soon!_    

* * *

