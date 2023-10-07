var store = [{
        "title": "Post: Modified Date",
        "excerpt":"This post has been updated and should show a modified date if used in a layout. All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a...","categories": ["Blog"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/blog/post-modified/",
        "teaser": null
      },{
        "title": "Post: Standard",
        "excerpt":"All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she...","categories": ["Blog"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/blog/post-standard/",
        "teaser": null
      },{
        "title": "Post: Chat",
        "excerpt":"Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames. Now, on the St. Louis team we have Who’s on first, What’s on second, I Don’t Know is on third– Costello: That’s what I want to find out. I want...","categories": ["Blog"],
        "tags": ["chat","Post Formats"],
        "url": "/blog/post-chat/",
        "teaser": null
      },{
        "title": "Post: Notice",
        "excerpt":"A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown {: .notice} can be added after a sentence to assign the .notice to the &lt;p&gt;&lt;/p&gt; element. Changes in Service: We just updated our privacy policy here to better service our...","categories": ["Blog"],
        "tags": ["Post Formats","notice"],
        "url": "/blog/post-notice/",
        "teaser": null
      },{
        "title": "Post: Quote",
        "excerpt":"   Only one thing is impossible for God: To find any sense in any copyright law on the planet.       Mark Twain   ","categories": ["Blog"],
        "tags": ["Post Formats","quote"],
        "url": "/blog/post-quote/",
        "teaser": null
      },{
        "title": "Post: Link",
        "excerpt":"This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML front matter and you’re done.      And this is how a quote looks.    Some link can also be shown.  ","categories": ["Blog"],
        "tags": ["link","Post Formats"],
        "url": "/blog/post-link/",
        "teaser": null
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "/blog/welcome-to-jekyll/",
        "teaser": null
      },{
    "title": "Page Not Found!",
    "excerpt":"Sorry, but the page you were trying to view does not exist.            ","url": "http://localhost:4000/404.html"
  },{
    "title": "Benotung",
    "excerpt":"de en A list of assignments, deadlines, and points to help you plan for the semester. For an overview of grading policies for this course, see XI. General Grading Rubric, located in the SYLLABUS. Reminder: Unless otherwise noted, assignments are always due online on GitHub at 11:59 PM the following...","url": "http://localhost:4000/benotung/"
  },{
    "title": "About",
    "excerpt":"Tempor velit sint sunt ipsum tempor enim ad qui ullamco. Est dolore anim ad velit duis dolore minim sunt aliquip amet commodo labore. Ut eu pariatur aute ea aute excepteur laborum. Esse ea esse excepteur minim mollit qui cillum excepteur ex dolore magna. Labore deserunt fugiat incididunt incididunt sint ea....","url": "http://localhost:4000/about/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Grading",
    "excerpt":"A list of assignments, deadlines, and points to help you plan for the semester. For an overview of grading policies for this course, see XI. General Grading Rubric, located in the SYLLABUS. Reminder: Unless otherwise noted, assignments are always due online on GitHub at 11:59 PM the following Monday night...","url": "http://localhost:4000/grading/"
  },{
    "title": "Lehrplan",
    "excerpt":"Grundlegender Kurs + Kontaktinformationen Kurs Nummer: 00789 Semester: Herbst/Winter 2023 Zeit: Dienstags 14:30-16:00 Standort: 2.43 Elektronisches Musikstudio Format: Seminar Modalität: Persönlich* * Hybrid und virtuell verfügbar unter mildernden Umständen nach Ermessen des Kursleiters Lehrerin: Louis Goldford Email: Louis.Goldford@mh-luebeck.de Geschäftszeiten: Montag — Mittwoch nach Vereinbarung Bürostandort: “Das Aquarium” (neben 2.43 Elektronisches...","url": "http://localhost:4000/syllabus/"
  },{
    "title": "Syllabus",
    "excerpt":"1. Essential Contact Information Course Number: 00789 Semester: Fall/Winter 2023 Time: Tuesdays 14:30-16:00 Location: 2.43 Electronic Music Studio Format: Seminar Modality: In-person* * hybrid and virtual available in extenuating circumstances at the discretion of the instructor Instructor: Louis Goldford Email: Louis.Goldford@mh-luebeck.de Office Hours: Monday — Wednedsay by appointment Office Location:...","url": "http://localhost:4000/"
  },{
    "title": "Software + Resources",
    "excerpt":"A list of stuff we’ll be using throughout the course. Be sure to install + test these before you arrive in class. MaxMSP Download + install the current build from: MaxMSP Most recent releases should support our work in class, however. At the time of this publication, all software for...","url": "http://localhost:4000/resources/"
  },{
    "title": "Schedule",
    "excerpt":"This page will be updated frequently with examples, video tutorials, links to new resources, and occasional updates to LAB ASSIGNMENTS. Our schedule follows the Current MHL Academic Calendar. The following topics and their precise order may change. Check here for updates! Week 1: 10 Oct. Week #1 Survey/Quiz — Personal...","url": "http://localhost:4000/schedule/"
  },{
    "title": "Posts by Tag",
    "excerpt":" ","url": "http://localhost:4000/tags/"
  },{
    "title": "Posts by Year",
    "excerpt":" ","url": "http://localhost:4000/posts/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  }]
