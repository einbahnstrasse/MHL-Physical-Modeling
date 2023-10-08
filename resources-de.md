---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: archive
layout: single   
title: Software und Ressourcen     
lang: de   
ref: res   
permalink: /resources/   
toc: true
toc_label: "Software und Ressourcen"  
toc_icon: "laptop"  
toc_sticky: true   
read_time: true  
show_date: true  
date: 2023-08-01  
date_format: "%Y-%m-%d"  
last_modified_at: 2023-08-28   

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css"/>

<div class="lang-sidebar">
  {% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
  {% for page in pages %}
    <li class="zoom"><a href="/MHL-Advanced-CAO{{ page.url }}" class="{{ page.lang }}"><span class="fi fi-{{ page.lang }}"></span></a></li>
  {% endfor %}
</div>

<div class="top-h1-icon">
  <i class="fas fa-book-open fa-2x"></i>
</div>

Eine Liste der Dinge, die wir im Laufe des Kurses verwenden werden.  

_Stellen Sie sicher, dass Sie diese installieren und testen, bevor Sie in den Unterricht kommen._   

## MaxMSP      

_Laden Sie den aktuellen Build herunter und installieren Sie ihn von:_ <span style="font-size: smaller; text-transform: uppercase; font-weight: bold;"><a href="https://cycling74.com/downloads" target="_blank" class="btn btn--primary">MaxMSP</a></span>

Die neuesten Veröffentlichungen sollten jedoch unsere Arbeit im Unterricht unterstützen.  

Zum Zeitpunkt dieser Veröffentlichung wurde die gesamte Software für die Klasse bis zur Max-Version 8.5.2 (c9ba072623d) (x64 Mac Rosetta) auf macOS Version 12.3 (Build 21E230) x86_64 Rosetta getestet.  

### Temporäre Max-Lizenzschlüssel     

Wenn Sie kein eigenes haben, <span style="font-size: smaller; text-transform: uppercase; font-weight: bold;"><a href="mailto:Louis.Goldford@mh-luebeck.de/?subject=[MHL%20Advanced%20CAO]%20Max%20License%20request" target="_blank" class="btn btn--danger">**Senden Sie mir eine E-Mail, um einen Softwarelizenzschlüssel anzufordern**</a></span>     

Wir verfügen in der Regel über einige wenige Lizenzen für Studierende, die an unseren Kursen teilnehmen.  

Sie werden nach dem Prinzip „Wer zuerst kommt, mahlt zuerst“ zur Verfügung gestellt.  

Wenn ein Lizenzschlüssel kostenlos ist, kann ich ihn Ihnen für die Dauer dieses Kurses und möglicherweise länger zur Verfügung stellen, je nachdem, wie viele andere Anfragen ich bekomme. Im Idealfall möchten wir sicherstellen, dass Sie so lange Zugriff auf Max haben, wie Sie für die Fertigstellung eines Projekts benötigen.  

## Max Packages + Libraries     

Eine fortlaufende Liste der Max-Pakete, die wir verwenden werden.  
_Wir können diese Liste im Laufe des Semesters ergänzen:_  

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	1. <a href="https://www.bachproject.net/dl/" target="_blank" class="btn btn--primary">bach</a> for computer-assisted composition   
	2. <a href="https://forum.ircam.fr/projects/detail/spat/" target="_blank" class="btn btn--primary">IRCAM spat~</a> for multichannel audio spatialization   
	3. <a href="https://forum.ircam.fr/projects/detail/modalys/" target="_blank" class="btn btn--primary">IRCAM Modalys</a> for physical modeling ("modal") synthesis   
	4. <a href="https://github.com/maccallum/x/" target="_blank" class="btn btn--primary">X</a> for random number generation and distribution   
</span>

### Manuelle Paketinstallation  

Von den oben aufgeführten Paketen kann #1 direkt über den [Max Package Manager](#using-the-max-package-manager) _(siehe Beschreibung unten)_ installiert werden.  

#2 – #4 müssen direkt von den oben verlinkten Websites heruntergeladen und dann manuell installiert werden.  

Laden Sie jedes Installationsprogramm herunter, dekomprimieren Sie es und legen Sie den entpackten Ordner in „Max 8/Packages“ ab.  

Dieser Ordner befindet sich unter:    

```
/Users/username/Documents/Max 8
```
_Unbedingt ersetzen_ `username` _mit dem tatsächlichen Benutzernamen auf Ihrem Computer._  

#### Registrieren Sie sich für das IRCAM-Forum     

Um die oben genannten Max-Pakete Nr. 2 und Nr. 3 zu erwerben, müssen Sie ein **kostenloses** Konto erstellen [IRCAM Forum website](https://forum.ircam.fr/){:target="_blank"}.  

Sobald Sie sich registriert haben, können Sie Modalys und Spat herunterladen.  

Diese Pakete sind kostenlos und es fallen keine zusätzlichen Kosten an.  

### Verwendung des Max Package Managers    

Einige Pakete können sofort über installiert werden [Max Package Manager](https://docs.cycling74.com/max7/vignettes/package_manager){:target="_blank"}, wie Nr. 1 oben, wodurch die Notwendigkeit umgangen wird, alle Ordner manuell zu entpacken und an bestimmte Speicherorte zu verschieben.  

Gehen Sie zunächst in MaxMSP zu `File > Show Package Manager`.   

Geben Sie im daraufhin angezeigten Paket-Manager-Fenster den Namen eines Pakets, z. B. `miraweb`, in die Suchleiste oben rechts ein und klicken Sie dann unten auf das MiraWeb-Paket, um es zu installieren:   

<img src="/MHL-Advanced-CAO/assets/images/01.package.manager.png" alt="package manager">

Klicken Sie auf der nächsten Seite auf die <span style="font-weight: bold; color: lightblue;">blaue</span> Schaltfläche `Install` :  
  
<img src="/MHL-Advanced-CAO/assets/images/02.install.png" alt="install">

Wenn Sie fertig sind, sollten Sie eine <span style="font-weight: bold; color: lightblue;">blue</span> Schaltfläche `Launch` und die Meldung "Successfully installed Miraweb" sehen:  

<img src="/MHL-Advanced-CAO/assets/images/03.success.png" alt="install">

Von hier aus können Sie einfach das Paket-Manager-Fenster schließen.  

Wiederholen Sie diesen Schritt, um schnell zusätzliche Pakete zu installieren.  

_Leider funktioniert diese Methode nicht für die IRCAM-Pakete, die manuell von der IRCAM-Forum-Website installiert werden müssen, wie oben unter [Manual Package Installation](#manual-package-installation) beschrieben._   

## Windows: Terminalemulator     

Wenn auf Ihrem Computer ein Windows-Betriebssystem ausgeführt wird, benötigen Sie ein Programm, das das Verhalten der Unix-Befehlszeile nachahmt.  

<span style="color: red;">_HINWEIS: Benutzer von macOS + Linux können diesen Schritt ignorieren!_</span>  

Installieren Sie **eine** dieser Apps:  

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://gitforwindows.org/" target="_blank" class="btn btn--primary">Git BASH</a> <a href="https://cmder.net/" target="_blank" class="btn btn--primary">Cmder</a> <a href="https://xshell.en.softonic.com/" target="_blank" class="btn btn--primary">Xshell</a> <a href="https://www.puttygen.com/download-putty" target="_blank" class="btn btn--primary">XPuTTY</a>      
</span>

Von diesen war die erste Option (Git Bash) für meine früheren Schüler die zuverlässigste.  

Oder schauen Sie sich einige Alternativen an: [15 Best Terminal Emulators for Windows in 2023](https://www.puttygen.com/windows-terminal-emulators){:target="_blank"}  

## macOS + Linux: Homebrew  

Ein Paketverwaltungssystem zur einfacheren Installation anderer Tools und Software im Terminal.  

<span style="color: red;">_HINWEIS: Windows-Benutzer können diesen Schritt ignorieren!_</span>  

### Installieren       

Öffnen Sie Ihr Terminal und führen Sie diesen Befehl aus:  

```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Anschließend müssen Sie möglicherweise die folgenden Befehle ausführen, um Ihre Installation und Aktualisierung zu überprüfen:  

```
brew doctor
```

und  

```
brew update
```

### Verifizieren       

Führen Sie in Ihrem Terminal diesen Befehl aus:  

```
brew --version
```

Ihre Konsole sollte eine Meldung zurückgeben, die wie folgt aussieht:  

```
Homebrew 2.4.9
```

oder  

```
Homebrew/homebrew-core (git revision 58437; last commit 2020-08-08)
```

## Versionskontrolle mit GIT + GitHub     

Git ist ein sehr leistungsfähiges **verteiltes Versionskontrollsystem** zum intelligenten Sichern und Verfolgen von Änderungen in Ihrem Code oder in beliebigen Dateisätzen.  

Es funktioniert neben **GitHub.com**, das wir als Cloud-Speicherplattform verwenden, um unsere Dateien sicher aufzubewahren und Projekte und Aufgaben einzureichen.  

<span style="color: red;">_HINWEIS: Wir haben diese Tools im vorherigen Seminar **Klangsynthesetechniken** installiert und verwendet und werden sie auch in diesem Semester weiterhin verwenden._</span>  

Wenn Sie sich bereits die Zeit genommen haben, diese Tools zu installieren, **überspringen Sie einfach diesen Abschnitt**. Wenn Sie jedoch gerade erst an unserem Kurs teilnehmen und noch nicht mit diesen Tools gearbeitet haben, folgen Sie den folgenden Video-Tutorials.  

### Registrieren Sie sich für GitHub.com  

<span style="color: red;">_HINWEIS: Sie werden GIT (und GitHub.com) verwenden, um regelmäßig Kurspatches und Ihre Abschlussprojekte einzureichen. Richten Sie dies also unbedingt ein!_</span>  

Gehen Sie zu [GitHub.com](http://github.com){:target="_blank"} und befolgen Sie die Anweisungen, um Ihr **kostenloses** Konto einzurichten.  

Oder besuchen [this 'How-To' Page for extra support.](https://www.wikihow.com/Create-an-Account-on-GitHub){:target="_blank"}  

#### Bestätigen: Schicken Sie mir eine E-Mail!  

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;"><a href="mailto:Louis.Goldford@mh-luebeck.de/?subject=[MHL%20Advanced%20CAO]%20GitHub%20user%20name" target="_blank" class="btn btn--danger">**Senden Sie mir sofort Ihren GitHub-Benutzernamen per E-Mail**</a></span>, um Noten für diesen Kurs zu erhalten!

### GIT-Versionskontrolle    

Um GIT auf Ihrem Computer einzurichten, folgen Sie dem Video-Tutorial als Schnellstartanleitung:  

{% include video id="Lw2OgM6tQd8" provider="youtube" %}  

Windows-Benutzer: Installieren Sie GIT mit [Git for Windows](https://gitforwindows.org/){:target="_blank"}  

macOS-Benutzer: Befolgen Sie die Anweisungen mit Homebrew unten ...  


#### Installieren     

Führen Sie den folgenden Befehl aus:  

```
brew install git  
```

#### Verifizieren  

Führen Sie den folgenden Befehl aus:  

```
git --version
```

Ihre Konsole sollte eine Meldung zurückgeben, die wie folgt aussieht:  

```
git version 2.20.1 (Apple Git-117)
```

### Large File Storage (LFS)  

Large File Storage (LFS) ist eine Git-**Erweiterung**, mit der Sie große Binärdateien – wie Audio-, Video- und Bilddateien – verifizieren können.  

Git allein ist nicht sehr gut in der Lage, Binärdateien zu versionieren. Ohne diese Erweiterung wird Ihr Git-Ordner („Repository“) schnell „repository“ und der Speicherplatz wird knapp.  

Installieren Sie diese wertvolle Erweiterung, damit Sie Ihre Mediendateien sicher sichern und wertvollen Repository-Speicherplatz für Ihren Code reservieren können!  

Laden Sie die Erweiterung hier herunter und installieren Sie sie: <span style="font-size: smaller; text-transform: uppercase; font-weight: bold;"><a href="https://git-lfs.com/" target="_blank" class="btn btn--primary">Git LFS</a></span>

Alternativ können macOS-Benutzer über Homebrew installieren:  

```
brew install git-lfs
```

Befolgen Sie die im folgenden Video-Tutorial beschriebenen Schritte, um alles einzurichten:  

{% include video id="HLyoH7xfoF8" provider="youtube" %}

<!-- 
## 6. Google Chrome  
_A web browser with great built-in device compatibility tools._  

1. INSTALL:  
	* [Direct from Chrome homepage](https://www.google.com/intl/en/chrome/){:target="_blank"}  
2. VERIFY:  
	* Chrome can be launched from your /Applications folder.  


## 7. Python 3 + pip
_**Python** is an object-oriented, interpreted, and interactive programming language that we'll be introducing alongside JavaScript. It's great for quick prototyping and even better for data visualization._  

_**pip** is the standard package manager for the Python language, allowing you to easily install code packages + modules from the extensive [standard library.](https://docs.python.org/3/py-modindex.html){:target="_blank"}_  

1. INSTALL using these tutorials:  
	* [macOS](https://evansdianga.com/install-pip-osx/){:target="_blank"}  
	* [Windows](https://phoenixnap.com/kb/install-pip-windows){:target="_blank"}  
2. VERIFY:  
	* Verify Python 3:  
		* Open your Terminal and run:  
			`python3 --version`  
		* Your console should return something that looks like this:  
			`Python 3.8.5`
	* Verify pip:  
		* Open your Terminal and run:  
			`pip --version`  
		* Your console should return something that looks like this:  
			`pip 20.2 from /Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/site-packages/pip (python 3.8)`  
		* or:  
			`pip 18.1 from C:\Python37\lib\site-packages\pip (python 3.7)`  
3. Create an alias so that anytime you run `python` on the command line, you'll be using Python 3 instead of older versions.  
	* When using Python, run this command when you **begin** a Terminal session:  
			`alias python=/usr/local/bin/python3`   -->

## Zusätzliche und optionale Ressourcen  

### Software      

#### Texteditor    

Markieren Sie Ihren Code, finden und ersetzen Sie ihn einfach und vieles mehr ...  

_Überprüfen Sie die Kompatibilität Ihres Betriebssystems und installieren Sie eines davon:_  

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://code.visualstudio.com/download/" target="_blank" class="btn btn--primary">Visual Studio Code</a> <a href="https://www.sublimetext.com/" target="_blank" class="btn btn--primary">Sublime Text</a> <a href="https://espressoapp.com/" target="_blank" class="btn btn--primary">Espresso</a> <a href="https://brackets.io/" target="_blank" class="btn btn--primary">Brackets.io</a>
</span>

#### Digital Audio Workstations (DAWs)   

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://www.reaper.fm/download.php/" target="_blank" class="btn btn--primary">Reaper</a> <a href="https://www.ableton.com/en/trial/" target="_blank" class="btn btn--primary">Ableton Live</a>
</span>

#### Audioanalysetools     

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://logiciels.pierrecouprie.fr/" target="_blank" class="btn btn--primary">iAnalyse</a> <a href="https://www.izotope.com/en/rx.html?" target="_blank" class="btn btn--primary">iZotope RX</a> <a href="https://www.klingbeil.com/spear/" target="_blank" class="btn btn--primary">SPEAR</a>
</span>

### Kostenlose Beispielbibliotheken      

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://freesound.org/" target="_blank" class="btn btn--primary">FreeSound.org</a> <a href="https://archive.org/details/nasaaudiocollection" target="_blank" class="btn btn--primary">NASA Audio Collection</a> <a href="https://www.nps.gov/subjects/sound/gallery.htm" target="_blank" class="btn btn--primary">Natural Sounds Gallery</a> <a href="https://theremin.music.uiowa.edu/MIS.html" target="_blank" class="btn btn--primary">Instrumental Samples</a>
</span>

### Tutorials   

#### MaxMSP   

<span style="font-size: smaller; text-transform: uppercase; font-weight: bold;">
	<a href="https://music.arts.uci.edu/dobrian/maxcookbook/node/56" target="_blank" class="btn btn--primary">Max Cookbook</a> <a href="https://cycling74.com/forums" target="_blank" class="btn btn--primary">MaxMSP User Forum</a> <a href="https://docs.cycling74.com/max8" target="_blank" class="btn btn--primary">Max 8 Documentation</a> <a href="http://peterelsea.com/maxtutorials.html" target="_blank" class="btn btn--primary">Peter Elsea Tutorials</a> <a href="http://www.maxobjects.com/" target="_blank" class="btn btn--primary">Max Objects Database</a>
</span>


