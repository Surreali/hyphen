$("#hyphenform").submit(function(e) {
            if(document.getElementById("hyphencode").value == Math.round(Math.random()*Math.pow(10, 1)).toString()) {
                e.preventDefault();
                
                document.getElementById("question").innerHTML = "Hyphen trial complete";
            }
        });
