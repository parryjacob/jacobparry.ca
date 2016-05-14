---
layout: default
title: Archive
---
# Archive

<dl>
{% for post in site.posts %}
    <dt>{{ post.date | date: "%b %-d, %Y" }}</dt>
    <dd>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>
            {{ post.excerpt }}
        </p>
    </dd>
{% endfor %}
</dl>