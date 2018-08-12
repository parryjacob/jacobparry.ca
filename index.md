---
layout: default
---
<img width="200" src="{{ 'face.jpg' | asset_path }}" alt="Jacob Parry" class="float-right">

# I'm Jacob

I'm a Canadian system administrator and developer with a special interest in **web-based applications** and **Linux server administration**. Currently, I specialize in the administration and maintenance of medium-scale internal systems supporting a team of 50+ developers, artists, marketing specialists, and more.

I have experience working with

* Python
* PHP
* Java
* C++
* C#/.NET
* JavaScript
* HTML5/CSS3/JavaScript
* SQL (MySQL/MariaDB, PostgreSQL, MSSQL/Transact-SQL, and Oracle)
* Go
* Docker, LXC, and Hyper-V containers
* Markdown, reStructuredText, YAML
* Active Directory, LDAP, SAML
* Ubiquiti, Cisco, and other network equipment

## Work Experience

<img src="{{ 'bbb.png' | asset_path }}" alt="Big Blue Bubble" class="float-right">

I'm currently employed at [Big Blue Bubble](https://www.bigbluebubble.com) as a Systems Administrator. My primary responsibilities are ensuring that all internal systems continue to function to support the ongoing development of our games for several platforms. As part of this, I maintain several internal tools as well as the majority of our web presences. This involves administering local systems as well as cloud-based resources, and working with a variety of vendors both local and abroad.

<div class="clear"></div>

<img src="{{ 'digital_echidna.png' | asset_path }}" alt="Digital Echidna" class="float-right">

Previously I was employed at [Digital Echidna](http://echidna.ca) as a System Administrator. I was also employed during my co-op program as a web developer, mainly specializing in backend development for Drupal. I spent my days supporting an awesome team creating awesome websites using [Drupal](http://drupal.org), one of the world's leading Content Management Systems.

<div class="clear"></div>

## Education and Certifications

I graduated from [Fanshawe College's](http://fanshawec.ca) Computer Programmer Analyst program in December 2016 after completing three co-op work sessions with Digital Echidna.

In April 2017, I received my [Acquia Certified Developer - Drupal 8](https://www.acquia.com/customer-success/learning-services/acquia-certified-developer-d8-exam-blueprint) certification at DrupalCon 2017. This demonstrates a well rounded knowledge of building performant, secure Drupal websites.

## Writing

<dl class="writing">
{% for post in site.posts %}
    <dt>{{ post.date | date: "%b %-d, %Y" }}</dt>
    <dd><a href="{{ post.url }}">{{ post.title }}</a></dd>
{% endfor %}
</dl>

## Contact

The best way to contact me would be to send an email to [me@jacobparry.ca](mailto:me@jacobparry.ca) or to contact me via
GitHub.

<div class="centre">
    <em>All opinions expressed are my own and do not express the views or opinions of my employers, past or present.</em>
</div>