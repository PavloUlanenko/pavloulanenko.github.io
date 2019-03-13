window.addEventListener("load", function() {
    (function() {
    let string = "";
    let result = "";
    document.querySelector(".put").addEventListener("input", function() {
      string = this.value;
      result = string.replace(/(\s\d+)/g, ' |$1');
      result = check(result);
      document.querySelector(".set").value = result;
    });
    let pattern = []; 
    if(localStorage.patternWrong && localStorage.patternCorrect) {
      pattern[0] = localStorage.getItem("patternWrong").split("||");
      pattern[1] = localStorage.getItem("patternCorrect").split("||");
      console.log({pattern});
    }else {
      pattern = [
        ["w/o", "w/", "DR", "Dnver", "nght", "Pass.", "Dover", "AJC", "A'C", "Belov/"],
        ["without", "with", "door", "Driver", "right", "Passenger", "Driver", "A/C", "A/C", "Below"]
      ];
    }
    function check(str) {
        let newString = str;
        for(let i=0; i<pattern[0].length;i++){
           let exp = new RegExp(pattern[0][i],"g");
           newString = newString.replace(exp, pattern[1][i]);
         }
        return newString;
    }
    let copy = document.querySelector(".copy");
    copy.addEventListener("click", function() {
      document.querySelector(".set").select();
      document.execCommand("copy");
    });
    copy.addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("-active");
      setTimeout(function() {
        copy.classList.toggle("-active");
      }, 1000);
    })
    let addRule = document.querySelector(".add-rule");
    let rulesField = document.querySelector(".rules");
    let wrongData = rulesField.querySelector(".wrong-data");
    let correctData = rulesField.querySelector(".correct-data");
    addRule.addEventListener("click", function() {
      if(wrongData.value && correctData.value) {
        pattern[0].push(wrongData.value);
        pattern[1].push(correctData.value);
      }else{
        alert("Fill in data properly!");
      }
      localStorage.setItem("patternWrong", pattern[0].join("||"));
      localStorage.setItem("patternCorrect", pattern[1].join("||"));
    });
  })();
});