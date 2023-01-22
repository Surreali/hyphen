$("#hyphenform").submit(function(e) {
            if(document.getElementById("hyphencode").value == "less than three") {
                e.preventDefault();
                
                document.getElementById("question").innerHTML = "Hyphen trial complete";
            }
        });
