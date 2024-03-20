---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: archive   
layout: single   
title: "Final Exam: Mixed Piece with Max Patch"   
lang: en   
ref: grade  
permalink: /final-mixed-piece/   
toc: true  
toc_label: "Final Exam Contents" # default: Content
toc_icon: "graduation-cap"  # corr esponding Font Awesome icon name without the "fa" prefix
toc_sticky: true   # enables sticky toc  
read_time: true  
date: 2023-08-01  
last_modified_at: 2023-08-28  

---

### Deadline: Week 13: {{ site.week-13 }}  

### 1. Overview   

The final exam is a composition for instrument(s) with electronics realized in MaxMSP with occasional _checkpoints_ where I evaluate your progress throughout the semester. For example, our Midterm Exam is one such _checkpoint_. Your project may be conceived as a _work-in-progress_ but **must be presented as a finished draft of a composition** whose performance will be featured during the _**Werkstatt für Aktuelle Musik**_ (17-20 January 2024). 

Your piece _and its performance_ count as your final exam grade in this class: **A work that is incomplete or that does not receive a performance will fail the exam**.    

Your piece should generally make use of the tools we explored this semester, including tools of computer-assisted composition, and especially those which best serve your creative goals.    

Your piece may evolve as an extension of the work you completed for our Midterm Exam “sketch.” You are encouraged (but not required) to use your Midterm “sketch” as the basis for your final exam. You can also use our Final Exam piece as an opportunity to develop a new piece for any other recital or commission obligation at MHL or elsewhere, but it must meet the requirements of our exam as detailed below. Of course, you can choose to treat the final exam as an entirely separate piece, but the option to use your Midterm as a “miniature” is strongly encouraged.      

<!-- The final is a complete piece (_recommended: 8-12 minutes in duration_) for fixed media, in 8-channel surround sound. 

This piece will be featured during the _**Werkstatt für Aktuelle Musik**_ (January 17-20, 2024).  

You are encouraged (but not required) to use your midterm “sketch” as a basis for your final piece.  

It would be an efficient use of time to expand upon the ideas you presented in your midterm, or somehow make use of the work you did there. Supplement this new mixing, multichannel, and MaxMSP techniques that you continued to learn since Week 6. Revise automation or record new sounds, etc.  

By the deadline, send me a Reaper project folder (by email, WeTransfer.com, or any cloud link), and a stereo mixdown (binaural), meeting the following criteria:   -->

### 2. Procedure / General Timeline   

1. If you’re unsure how to begin, **start with the sound(s) that most fascinate you**. Develop a plan that freely explores how to create and transform these sounds. Your project will take shape as you explore.  
2. Your piece should be a work that **includes a live performer (or small number of performers)** with electronically-produced sounds. You must consult, collaborate with, and rehearse your performer(s) in preparation for your January premiere. It is best to use this project as an opportunity to communicate and collaborate with another artist. You, as composer/creator, will also be responsible for controlling your Max patch at the mixing console while other musicians perform your piece on stage. You may perform on another classmate’s composition, but not on your own. _It is highly recommended that you consider and approach performers early so that you don't fall behind schedule. Pieces for 1 or 2 players are recommended: More parts will pose more challenges. Pieces involving more than 4 parts require special approval from the instructor._     
3. Your piece can be an improvisational performance environment if you prefer, but you must also include a **score** that aims to notate general performance events alongisde a cueing system that synchronizes your Max patch. So, be sure to budget time to notating your ideas in some clear and communicable way.     
2. **Your project and its materials may change** as you begin working and as we explore new topics each week. Allow yourself the flexibility to adapt and change direction, and to include new tools as you encounter them.  
3. Reach out to the instructor at any point for support, guidance, clarification, or with any questions that might arise.  
4. By the deadline, **submit your folder of patches, sound files, and everything necessary to run it on another computer**. To best prepare for this, load your project on another computer or a classmate’s computer — as you initialize your patch, check the console for error messages indicating any missing components.  

#### 2.1 Checkpoints   

Checkpoints are opportunities for me to evaluate your work as the semester continues. By the dates below, I will need to see evidence of your progress towards the final deadline:   

* **Alternative Proposal Checkpoint**: Week 4: {{ site.week-04 }}   
    - See [3.1 Concert Patch with Live Performer(s)](#31-concert-patch-with-live-performers): If you want to do a project that is different from the scenario outlined below, email me 2-4 paragraphs describing your ideas. Pending approval, you can shape your piece another way.   
* **1st Checkpoint**: Week 5: {{ site.week-05 }}   
    - Share your initial plans, algorithms, sounds, compositional or musical ideas   
    - At least 1 small Max patch demonstrating your work drawing upon our course materials   
    - Start working on your Tech Rider  
* **Midterm Exam Checkpoint**: Week 7: {{ site.week-07 }}   
    - 2-3 Max patches or presets with evidence of your control over synthesis using bach/CAO tools  
    - Your ideas about compositional _transitions_ between these 2-3 "states"  
    - **name of the performer** who has committed to playing your piece in January   
* **Concert Patch Checkpoint**: Week 11: {{ site.week-11 }}  
    - Your concert patch (_in progress_) utilizing template built in [Week 10](https://einbahnstrasse.github.io/MHL-Physical-Modeling/schedule/#week-10-12-dec){:target="_blank"}   
    - Individual **events** should now be numbered and coded into your patch   
    - Send your **score** to your perfomer(s)  
* **Tech Rider Deadline**: Week 12: {{ site.week-12 }}  
    - Email me your Tech Rider no later than this date!!  
* **FINAL EXAM DEADLINE!**: Week 13: {{ site.week-13 }}   
    - Final copies of your patch / project folder tested and sent to instructor  
* **Debrief Checkpoint**: Week 16: {{ site.week-16 }}   
    - Revisions of your patch, score, and tech rider (as necessary)  
    - Your review of how your performance went  

Be prepared to send me your working patch(es) and score(s) on these dates. We may also schedule **individual meetings** around the time of these deadlines to discuss the progress of your work.  

### 3. Things Your Project Should Have   

Many of the elements described below are provided in a Concert Patch Template we will build during our [Week 10 Seminar: Concert Patch Design](https://einbahnstrasse.github.io/MHL-Physical-Modeling/schedule/#week-10-12-dec){:target="_blank"}   

1. A **folder** of patches, abstractions, sounds, or other dependencies, as a Max project folder of the type demonstrated in [Week 10](https://einbahnstrasse.github.io/MHL-Physical-Modeling/schedule/#week-10-12-dec){:target="_blank"}  
2. A clearly labeled **main patch**, which serves as your central interface and loads your other sub-patches and sounds    
3. An **initialization (“init”)** routine that sets your piece's opening parameters, readying everything before your patch produces its first sound or event number.  
4. An **input and output patch**: steal these from the versions we created earlier in the semester!  
5. A **“script” (cueing system)** for individual events and transitions.  
6. Your project should draw on a **combination** of sound sources, synthesis processes, and/or treatments of your choosing.    
7. Because we have focused on CAO this semester, your piece should include the use of CAO tools in some way: most easily accomplished by the incorporation of the bach library into your Max patch.  
8. Your project should in some way **respond to the tools and aesthetic approaches we learned in class**, even if it is positioned as a strong departure from these. How is your work related (or not) to these lessons?   
9. If you choose to use **multichannel spatialization**, kindly note: On this concert, we are **limited to an 8-channel ring**. Your multichannel `spat~` scene may have more inputs than this, but should not exceed this 8-channel output configuration.  
10. Strive for **tonal balance in your sounds and layers**. For example, use **EQ** and **compression** to improve the interaction between overlapping sounds or layers, with special attention to how the sounds change as a result of multichannel spatial movement.  
11. Sound files and samples should be exported at our standard **sample rate of 48 kHz** and a **bit depth of 24 bits** (48 kHz / 24 bits).  
12. Your patch should also run at this sampling rate.  
13. A **score** for your piece that _includes event numbers_ to be executed in your patch alongside your performer’s notated line. Include a PDF copy of your score inside your project folder.  
14. A **tech rider** that satisfies the requirements of [MHL Digitale Kreation's Tech Rider Template](#){:target="_blank"}. Use the tempalate provided in class and through our periodically offered Tech Rider Workshops. The more detail, the better.     

#### 3.1 Concert Patch with Live Performer(s)   

Your performance patch accompanies a live musician (or musicans) as part of a **concert work with electronic sounds and processes (mixed music)**. This scenario may work best for those composing musical time _linearly_ (that is, for those accustomed to planning the general _moment-to-moment succession of musical events_), but you are **highly encouraged to explore _non-linear_ approaches**: that is, by allowing the classical performer or improvsier, audience members, or even a real-time data analysis stream to spontaneously influence or change the course of the piece. Despite its name, this option can employ any number of real-time tools.  

If you have an idea for a project outside of this description listed above, you may develop an alternative project proposal **as long as it is approved in advance by the instructor**. If you choose this option, submit a description of your ideas anytime before Week 4: simply email me with a 2-4 paragraph summary of your ideas and plans. I will be in touch to discuss options and to proceed.  

### 4. Problematic Elements   

In general, almost everything is permissible, but there are a few ground rules. Avoid these:   

* **Signal processing of music or audio that is not your own**. All source materials should belong to you: _your_ patches and _your_ recordings. As much as I love mashup artists, this is unfortunately not the proper setting for using identifiable excerpts of someone else’s music. The use of “found” sound materials is permissible and is not equivalent to the use of fully-produced recordings for which you do not have copyright clearance secured, so please avoid this. 
* **Patches in which sound is produced only from a single source**. We explored this during the semester for pedagogical purposes, but by the end it is your job to use our various tools as building blocks for some larger structure. Monosynths are also problematic in this way. If you are exploring the gradual transformation of one sound, these procedures need to unfold in some way that makes use of multiple tools and perceivable changes over time.  
* **Overemphasis on pop music production norms at the expense of our synthesis goals**. While I don’t mind if your final composition utilizes a typical pop music instrumentation or includes a beat, music that adheres strongly to song form based on typical chorus/refrain, or which overemphasizes vocals and lyrics, does not make sufficient use of our synthesis tools, or does not address or respond to the aesthetic questions studied in our class, will not be considered sufficient in scope. This class is an opportunity to deepen your understanding of more subtle and abstract musical relationships. If you normally write songs, use this project to compose something you’ve never composed before, like a granular piece, which will enrich your compositional and listening skills. A creative departure from basal songwriting is expected and will be graded closely.  
* **Use of software we did not learn in class**. All of your materials should stem from our lessons in MaxMSP and bach, using your own field recordings or samples, and any other tools explored in class. The use of other software tools and external sample libraries is strictly prohibited. Pending availability, you may opt to record your own sounds on our MHL modular synthesizers, but you may not sample other software instruments or synthesizers.  

### 5. Rubric  

Details in the boxes below will be filled in upon grading and provided as feedback at the end of the semester. Each of the grading components below will be weighed against the others for a complete project grade.  

![Rubric image for Final Exam](assets/images/final-rubric.png)  

If you have any questions, please don't hesitate to reach out to me and ask.  

_I'm looking forward to seeing your pieces come to life!_  

* * *    
