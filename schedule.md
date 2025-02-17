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

<!-- # Schedule -->
_This page will be updated frequently with examples, video tutorials, links to new resources, and occasional updates to weekly patches. Our schedule follows the [Current MHL Academic Calendar]({{ site.MHL-calendar }}){:target="_blank"}. The following topics and their precise order may change. Check here for updates!_  

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

#### Downloads  

#### Assignments    
_(Unless otherwise noted, assignments are always due before the next class!)_    
* **Install** + **Authorize** MaxMSP   
* Join our Digitale Kreation Discord Server _(see link on Syllabus page)_   
* Install the **CNMAT Externals** package (_Search for_ `CNMAT Externals` _in Package Manager. See instructions for using the Max Package Manager on our Software + Resources page_.)   
* [Filter Characteristics (Digital Filter Basics)](https://youtu.be/autPNZ9XMa4?si=1FTZB6r6q1NZ5ymU){:target="_blank"}         

{% include video id="autPNZ9XMa4?si=pl-cVyLcmF4pHsWW" provider="youtube" %}    
* [Test Signals (Digital Filter Basics)](https://youtu.be/ItYpQ7hMupQ?si=6lK6s9uRPHI5T4Ck){:target="_blank"}         

{% include video id="ItYpQ7hMupQ?si=6lK6s9uRPHI5T4Ck" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - `bp.higher.order.filter.v01.maxpat`   
  - `00.series.and.parallel.maxpat`  
  - `01.plot.maxpat`   

#### Terms, Concepts, Objects, Shortcuts    
- filter   
- delay  
- constructive interference    
- destructive interference    
- digital filter   
- `<pass~>`  
- `<delay~>`   
- `<filterdesign~>`  
- `<filterdetail>`   
- `<cascade~>`   
- Butterworth filter   
- Chebyshev filter   
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
* Using GIT for Production Patches      

<img src="/MHL-Physical-Modeling/assets/images/GIT.for.production.patches.v01.drawio.png" width="70%" alt="git for production">   
    
At this point, you should be using GIT for your performance patches outside of our class work. In a situation where you have rapidly-changing parameters from one rehearsal to the next, you don't want to lose any of your work, and that is exactly the point of using GIT. Using the `git revert` command as illustrated above is **non-destructive**, meaning you will **not** lose your previous commits: Not only can you _step back in time_ to your previous commit (as in the diagram above), you can also return to the changes you made _after_ your 2nd rehearsal. In fact, you can return to _any commit without losing any history_ at all: simply use the command in the form `git revert <commit hash number>` with the hash number of any of commit in your version tree. We might do a separate lesson or demonstration on this use of GIT later.     
   
##### Mechanical Resonance    
_Watch just a few moments of these examples._   
* [Tacoma Narrows Bridge Collapse (1940)](https://youtu.be/j-zczJXSxnw?si=xmXJD0aquZbH-n8-&t=8){:target="_blank"}      

{% include video id="j-zczJXSxnw?si=BMd-ccMB243qXVi8&t=8" provider="youtube" %}    

* [Pogo Oscillations on the Apollo 6 Rocket (1967)](https://youtu.be/pOOrXWLLza0?si=Yl2PoY3VLfGfxG8A&t=14){:target="_blank"}      

{% include video id="pOOrXWLLza0?si=Yl2PoY3VLfGfxG8A&t=14" provider="youtube" %}    


#### Downloads   
* [**Resonance** Boiler Patches](https://github.com/einbahnstrasse/resonance.boiler){:target="_blank"}  

#### Listening   
* [Kaija Saariaho, _L'Amour de loin_, Première acte, I. _Traversée_](https://youtu.be/x0gDY3hXpQ0?si=rD_goTDxMqtE86ms){:target="_blank"}       
   
{% include video id="x0gDY3hXpQ0?si=rD_goTDxMqtE86ms" provider="youtube" %}    
  
#### Assignments   
* [Feedforward Filter (Digital Filter Basics)](https://youtu.be/ffVcEvYvtcQ?si=_ChokCMOvwgirz4f){:target="_blank"}       

{% include video id="ffVcEvYvtcQ?si=_ChokCMOvwgirz4f" provider="youtube" %}    

* [FIR: Finite Impulse Response Filters (Digital Filter Basics)](https://youtu.be/_WoqwSBkhj0?si=Nv6X9APyvN2TFK96){:target="_blank"}         

{% include video id="_WoqwSBkhj0?si=Nv6X9APyvN2TFK96" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - `01.modres.from.a.chord.maxpat`   

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
* [Reading Spectrograms: Vowels](https://youtu.be/mWel5j-F8lE?si=rlQzDD_KZA-CvjPc){:target="_blank"}         
   
{% include video id="mWel5j-F8lE?si=rlQzDD_KZA-CvjPc" provider="youtube" %}    
   
* Source-Filter Synthesis Model:   
   
<img src="/MHL-Physical-Modeling/assets/images/Source-filter-model-of-speech-production.png" alt="source-filter model">   
   
[Source](https://www.researchgate.net/figure/Source-filter-model-of-speech-production_fig1_265566668){:target="_blank"}       
   
* [Formant Values from the CSound Manual](https://www.classes.cs.uchicago.edu/archive/1999/spring/CS295/Computing_Resources/Csound/CsManual3.48b1.HTML/Appendices/table3.html){:target="_blank"}       
   
#### Downloads   
* [**Formant** Boiler Patches](https://github.com/einbahnstrasse/formant.boiler){:target="_blank"}  

#### Listening   
* [Jean-Baptiste Barrière, _Chreode I_ (1983)](https://youtu.be/5AEFhybYrPg?si=PRdgsCal_CTasVPA){:target="_blank"}       
   
{% include video id="5AEFhybYrPg?si=PRdgsCal_CTasVPA" provider="youtube" %}    
  
#### Assignments   
* [Feedback Filter (Digital Filter Basics)](https://youtu.be/NC_dAcvYLsc?si=8KZ38cZTjPHXmMcq){:target="_blank"}       

{% include video id="NC_dAcvYLsc?si=8KZ38cZTjPHXmMcq" provider="youtube" %}    

* [IIR: Infinite Impulse Response Filters (Digital Filter Basics)](https://youtu.be/ap1qXBTKU8g?si=v2Y2SJhsltlTc5La){:target="_blank"}         

{% include video id="ap1qXBTKU8g?si=v2Y2SJhsltlTc5La" provider="youtube" %}    

* **Finish these patches** we made in class:   
  - `01.formant.modeling.parent.patch.maxpat`   
  - `formant.polyCore.maxpat`   
   
#### Terms, Concepts, Objects, Shortcuts    
- formant   
- vowel   
- speech synthesis   
- pulse train   
- larynx   
- source-filter model   
- `<reson~>`       
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
* [Introduction to <gen~> (slides)](https://einbahnstrasse.github.io/MHL-intro-to-gen/){:target="_blank"}         
* [Gregory Taylor's Introduction to gen~ Tutorial series (optional)](https://cycling74.com/tutorials/gen-video-tutorial-series){:target="_blank"}         
* [Musicdsp.org (optional)](https://www.musicdsp.org/en/latest/){:target="_blank"}     

#### Downloads   
* [**Comb + Allpass** Boiler Patches](https://github.com/einbahnstrasse/comb.and.allpass.filters.boiler){:target="_blank"}  

#### Assignments   
* **Complete the patch** `05.FIR.echo.simulator.v02.maxpat` using the [video tutorial](https://youtu.be/zhJavv1kxYU){:target="_blank"} below, **this weekend if possible, or by Week 6** at the latest:   
   
{% include video id="zhJavv1kxYU" provider="youtube" %}    
   
* **Finish these patches** we made in class:   
  - `03.FIR+IIR.comb.maxpat`       
  - `my.IIR.comb.gendsp`    
  - `04.allpass.filter.maxpat`    
  - `my.schroeder.allpass.gendsp`   
  - `05.FIR.echo.simulator.v02.maxpat`    

#### Terms, Concepts, Objects, Shortcuts  
- FIR comb filter   
- IIR comb filter   
- moving delay   
- allpass filter  
- resonances + antiresonances   
- I/O vector   
- signal vector  
- JIT (“just-in-time”) compiling   
- single-sample delay   
- _Z<sup>(-N)</sup>_   
- `<dspstate~>`   
- `<gen~>`   
- `<delay>` _(the_ `<gen~>` _operator using @feedback 1)_    
- `<history>`   
- `<param>`   
- `<codebox>`    

* * *  

## Week 5: {{ site.week-05 }}  
### <span style="color: #10999e;">{{ site.week-05-topic }}</span>    

#### Tutorials    
* [gen~ Operators](https://docs.cycling74.com/max8/vignettes/gen~_operators){:target="_blank"}  
* [Reference page for the Karplus-Strong Algorithm (Stanford)](https://ccrma.stanford.edu/~jos/pasp/Karplus_Strong_Algorithm.html){:target="_blank"}     
* [Reference page for Digital Waveguides (Stanford)](https://ccrma.stanford.edu/~bilbao/booktop/node15.html){:target="_blank"}     
* Karplus-Strong Algorithm as a Simplified Block Diagram (much like a Topology):   

<img src="/MHL-Physical-Modeling/assets/images/Karplus-strong-schematic.png" width="100%" alt="Karplus-Strong Block Diagram">   

* Block Diagrams for the **Karplus-Strong String Model** (_above_), and an **Ideally Stiff, Rigidly Terminating String** (_below_):   

<img src="/MHL-Physical-Modeling/assets/images/KS_LP_and_AP_string_models.jpg" width="100%" alt="2 string models">   
   
#### Downloads  

#### Listening   

#### Assignments  
* Reminder: Next week's class is on Zoom! _(see link below)_    
* **Finish these patches** we made in class:   
  - `01.Karplus-Strong.maxpat`     
  - `Karplus-Strong.gendsp`      
  - `stiff-string-AP-LP.gendsp`         

#### Terms, Concepts, Objects, Shortcuts  
* Karplus-Strong Algorithm  
* Waveguide synthesis   
* string stiffness   
* dispersion   
* Allpass coefficient  
* attack reflections   
* bias  
* DC-blocking filter   
* `samplerate`    
* `<history>`   
* `<dcblock>`   
<!-- * scattering junction       -->
    
* * *   
  
## Week 6: {{ site.week-06 }}  
### <span style="color: #10999e;">{{ site.week-06-topic }}</span>    

#### Zoom Link   
* [https://columbiauniversity.zoom.us/j/93295410482?pwd=Q3Z5RUR6OU1SUDRNbVBrMkhyT3Vzdz09](https://columbiauniversity.zoom.us/j/93295410482?pwd=Q3Z5RUR6OU1SUDRNbVBrMkhyT3Vzdz09){:target="_blank"}     
   
#### Tutorials    
* [What is a Waveguide?](https://ccrma.stanford.edu/~jos/pasp/Digital_Waveguides.html){:target="_blank"}  
* [Waves Traveling in 2 Directions Give Rise to Standing Waves](https://youtu.be/Mhp9oEmWfXw?si=CyuLtbz9ti4NCLkJ){:target="_blank"}  
* [Digital Waveguide Bowed String (CCRMA):](https://ccrma.stanford.edu/~jos/pasp/Digital_Waveguide_Bowed_String.html){:target="_blank"}   
     
<img src="/MHL-Physical-Modeling/assets/images/Bowed-String.png" width="100%" alt="bowed string model">   
    
* Biquad Filter Block Diagram:   
  
<img src="/MHL-Physical-Modeling/assets/images/biquad.jpg" width="100%" alt="biquad block diagram">   
   
#### Assignments  
* [Study the **Debugging in MaxMSP** slides](https://einbahnstrasse.github.io/MHL-Debugging-in-Max/){:target="_blank"}   
* **Finish these patches** we made in class:   
  - `bowed.string.v01.maxpat`     
  - `bowed.string.gendsp`     
  - `biquad.gendsp`    

#### Terms, Concepts, Objects, Shortcuts  
* reflection coefficient   
* bow velocity   
* bow force scaling value     
* bow force offset value   
* reflection filter   
* body filter   
* bow position table  
* `<buffer>`   
* `<sample>`   

* * *

## Week 7: {{ site.week-07 }}  
### <span style="color: #10999e;">{{ site.week-07-topic }}</span>    

#### Tutorials    
* [Scattering Junctions](https://ccrma.stanford.edu/~jos/pasp/Scattering_Impedance_Changes.html){:target="_blank"}   
* Flute Model Block Diagram     
     
<img src="/MHL-Physical-Modeling/assets/images/flute.scattering.junction.jpg" width="100%" alt="flute model">   

* Scattering Junction   
     
<img src="/MHL-Physical-Modeling/assets/images/flute.scatter.jpg" width="50%" alt="Scattering Junction">   
  
* Dispersion vs. Scattering      
     
<img src="/MHL-Physical-Modeling/assets/images/Difference-Between-Dispersion-and-Scattering-of-Light-Tabular-Form.png" width="100%" alt="Dispersion vs. Scattering">   
   
[Source](https://www.differencebetween.com/difference-between-dispersion-and-scattering-of-light/){:target="_blank"}       
   
#### Listening   

#### Assignments   
* Prepare for our guest **Christopher Trapani** next week. Watch the following ScoreFollower videos of his music, which he will discuss in class. These are also posted under Week 8 Listening materials:        
  
* [Christopher Trapani: _Cognitive Consonance_](https://youtu.be/jsxb6sUatIs?si=zgGLW8nTPzBzbqO4){:target="_blank"}       
     
{% include video id="jsxb6sUatIs?si=zgGLW8nTPzBzbqO4" provider="youtube" %}    
   
* [Christopher Trapani: _Tesserae_](https://youtu.be/bbBXxeTmoXQ?si=wLQvx9lk43x-ictS){:target="_blank"}     
   
{% include video id="bbBXxeTmoXQ?si=wLQvx9lk43x-ictS" provider="youtube" %}    
   
* **Finish these patches** we made in class:   
  - `_flute.v01.MAIN.maxpat`      
  - `flute.v01.gendsp`   

#### Terms, Concepts, Objects, Shortcuts  
* wave impedance  
* scattering junction      

* * *

## Week 8: {{ site.week-08 }}  
### <span style="color: #10999e;">{{ site.week-08-topic }}</span>    

#### Tutorials  
* [Basic Concepts of Synthesis with Modalys](https://support.ircam.fr/docs/Modalys/current/Introduction.html#basic-concepts-of-synthesis-with-modalys){:target="_blank"}         
   
#### Downloads     
* [Introduction to Modalys Boiler](https://github.com/einbahnstrasse/modalys-intro-boiler){:target="_blank"}         
   
#### Listening   
   
* [Christopher Trapani: _Cognitive Consonance_](https://youtu.be/jsxb6sUatIs?si=zgGLW8nTPzBzbqO4){:target="_blank"}       
     
{% include video id="jsxb6sUatIs?si=zgGLW8nTPzBzbqO4" provider="youtube" %}    
   
* [Christopher Trapani: _Tesserae_](https://youtu.be/bbBXxeTmoXQ?si=wLQvx9lk43x-ictS){:target="_blank"}     
   
{% include video id="bbBXxeTmoXQ?si=wLQvx9lk43x-ictS" provider="youtube" %}    


#### Assignments  
* [Introduce + assign the Final Project](https://einbahnstrasse.github.io/MHL-Physical-Modeling/final-project/){:target="_blank"}   
* **due by Week 15 Monday night July 8 by 20:00**       
* [Discussion of Important Aspects of the Final Project](https://youtu.be/uAS1MVVIVI8){:target="_blank"}     
   
{% include video id="uAS1MVVIVI8" provider="youtube" %}    
  
* **Finish these patches** we made in class:   
  - `01.mlys.string.force.maxpat`   

* [Tutorial Video Building the Modalys String Force Patch](https://youtu.be/YPqxmi9akVY){:target="_blank"}     
   
{% include video id="YPqxmi9akVY" provider="youtube" %}    

#### Terms, Concepts, Objects, Shortcuts    
* `<mlys.point-input>`   
* `<mlys.signal>`   
* `<mlys.mono-string>`  
* `<mlys.script>`  
* `<modalys~>`   
* `access-in-position`   
* `access-out-position`   
* `<mlys.point-output>`   
   
* * *

## Week 9: {{ site.week-09 }}  
### <span style="color: #10999e;">{{ site.week-09-topic }}</span>    

#### Tutorials    

#### Assignments  
* **Finish these patches** we made in class:   
  - `01.mlys.plate.signal.force.v01.maxpat`      

#### Terms, Concepts, Objects, Shortcuts    
* `freq-loss`   
* `const-loss`    
* `<mlys.position>`  
* `<mlys.strike>`  
* `<mlys.mono-two-mass>`  
* `<mlys.rect-plate>`   
<!-- 05a-mlys_plate+strike_sigctrl.maxpat -->   

* * *

## Week 10: {{ site.week-10 }}  
### <span style="color: #10999e;">{{ site.week-10-topic }}</span>    

#### Downloads  
* [Cymbal model](/MHL-Physical-Modeling/assets/modified.simple.cymbal.v01.maxpat){:target="_blank"}   

#### Tutorials  
* [**Elasticity** vs. **Plasticity**](https://energyeducation.ca/encyclopedia/Elasticity_vs_plasticity){:target="_blank"}    
* [Modulus of _elasticity_ or **Young’s Modulus**](https://www.setareh.arch.vt.edu/safas/007_fdmtl_24_youngs_modulus.html){:target="_blank"}     
    
<img src="/MHL-Physical-Modeling/assets/images/youngs_ modulus-01-01.png" width="100%" alt="modulus of elasticity">     
> _Slope of the **stress-strain diagram** within the elastic zone is called “Modulus of Elasticity” or **“Young’s Modulus”**. This parameter depends only on the material type._   
   
* [Young’s Modulus as a function of **Density**](https://www.quora.com/What-will-be-Youngs-modulus-if-the-density-of-a-material-increases-whether-it-will-decrease-increase-or-remain-constant){:target="_blank"}     
  
<img src="/MHL-Physical-Modeling/assets/images/youngs.modulus.v01.jpg" width="100%" alt="density vs. young's modulus">   
   
* [**Poisson’s Ratio** of _ductility_ and _plasticity_ of a material](https://youtu.be/tuOlM3P7ygA?si=HHBhLD3EnkryQ2GO){:target="_blank"}      
    
{% include video id="tuOlM3P7ygA?si=HHBhLD3EnkryQ2GO" provider="youtube" %}    
    
#### Assignments  
* **Finish these patches** we made in class:   
  - `modified.simple.cymbal.v01.maxpat`    

#### Terms, Concepts, Objects, Shortcuts  
* material properties  
* elasticity  
* plasticity  
* density   
* Young's modulus   
* Poisson coefficient (Poisson's ratio)    
   
* * *

## Week 11: {{ site.week-11 }}  
### <span style="color: #10999e;">{{ site.week-11-topic }}</span>    

### Tutorials 

#### Assignments  
* **Finish these patches** we made in class:   
  - `01.membrane.felt.mallet.maxpat`    
  - `02.string.membrane.hybrid.maxpat`    
    
#### Terms, Concepts, Objects, Shortcuts  
* `<mlys.circ-membrane>`   
* `<mlys.felt>`   
* `<mlys.pluck>`   
* `<mlys.melt-hybrid>`   

* * *

## Week 12: {{ site.week-12 }}   
### <span style="color: #10999e;">{{ site.week-12-topic }}</span>    

#### Tutorials  
* [3D Finite Elements in Modalys](https://support.ircam.fr/docs/Modalys/current/Finite_Elements.html){:target="_blank"}    
* [**Eigenfrequencies** and **eigenmodes**](https://www.tf.uni-kiel.de/matwis/amat/iss/kap_c/backbone/rc_3_8.html){:target="_blank"}    
* [**Standing wave** (red) as the result of the superposition of a left traveling (blue) and right traveling (green) wave](https://en.wikipedia.org/wiki/Standing_wave#/media/File:Waventerference.gif){:target="_blank"}    
* [Common LISP Documentation](https://www.lispworks.com/documentation/common-lisp.html){:target="_blank"}    

#### Downloads    
* [Introduction to LISP Scripting (and _ModaLisp_)](/MHL-Physical-Modeling/assets/patches/01-basic-LISP-intro.lisp){:target="_blank"}    
   
#### Assignments  
* **Finish these patches** we made in class:   
  - `wineGlass-v01.mos` _(will finish next week)_  
  - ~~`import.3D.object.maxpat`~~ _(postponed until next week)_   

#### Terms, Concepts, Objects, Shortcuts    
* finite element   
* eigenfrequency   
* eigenmode   
* mesh   
* `make-mesh`   
* Medit   
* `duplicate 'rotation`   
* `duplicate 'translation`     
* `duplicate 'homothety`   

* * *

## Week 13: {{ site.week-13 }}  
### <span style="color: #10999e;">{{ site.week-13-topic }}</span>    

#### Tutorials  

#### Assignments   
* Prepare for our guest, composer **Jason Thorpe Buchanan** next week: [Watch and listen to the pieces in his portfolio _(follow the links)_](https://www.dropbox.com/scl/fi/07js8md3z0p0zy4zz1s8x/ThorpeBuchanan_SelectPortfolio_Jun4.2024-opt.pdf?rlkey=0oprtauipwsnv10t6lsjz0ib2&e=1&dl=0){:target="_blank"}        
* **Finish these patches** we made in class:   
  - `wineGlass-v01.mos` _(finish)_  
  - `import.3D.object.maxpat` _(finish)_   

#### Terms, Concepts, Objects, Shortcuts  
* `compute-modes`   
* `.modal`   
* `<mlys.read-from-file>`   

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

