        //Read more or less
        function readMore(programme) {
            let dots = document.querySelector(`.panel[data-programme="${programme}"] .dots`);
            let moreText = document.querySelector(`.panel[data-programme="${programme}"] .more`); 
            let btnText = document.querySelector(`.panel[data-programme="${programme}"] .myBtn`);

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.textContent = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.textContent = "Read less"; 
                moreText.style.display = "inline";
            }
        }
        
        //Search Bar
        function search() {
            let input = document.getElementById('searchbar').value;
            input = input.toLowerCase();
            let i = document.getElementsByClassName('accordion')

            for (x = 0; x < i.length; x++) {
                if (!i[x].innerHTML.toLowerCase().includes(input)) {
                    i[x].style.display="none";
                }
                else {
                    i[x].style.display="list-item";
                }
            }
        }