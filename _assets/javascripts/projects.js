$(document).ready(function() {
    
    var url = "https://t.jacobparry.ca/githubrepos.php?u=parryjacob";
    
    function safeLanguage(lang) {
        if (lang == null) return null;
        return lang.toLowerCase().replace(/[^a-z]/gi, '');
    }
    
    var maxHeight = 0;
    
    function addRepo(name, url, description, language) {
        
        var lang = safeLanguage(language);
        var langClass = "";
        var langTitle = "";
        if (lang != null) {
            langClass = "repo-lang-" + lang;
            langTitle = " title='" + language + "' ";
        } else {
            langclass = "repo-lang-generic";
        }
        
        var repo = $("<div class='repo-box " + langClass + "'><span " + langTitle + " class='repo-lang " + langClass + "'></span></div>");
        repo.append($("<h3><a href=\"" + url + "\">" + name + "</a></h3>"));
        repo.append($("<p>" + description + "</p>"));
        $("div#projects-container").append(repo);
        
        maxHeight = Math.max(maxHeight, repo.height());
    }
    
    $.getJSON(url, function(data) {
        
        $("div#projects-container").html("");
        
        if (data.length > 0) {
            for (var i=0; i<data.length; i++) {
                var repo = data[i];
                addRepo(repo.full_name, repo.html_url, repo.description, repo.language);
            }
            
            $("div.repo-box").each(function() {
                $(this).height(maxHeight);
            });
            
        }
        
        $("div#projects-container").append($("<div class='clear'></div>"));
        
    });
    
});