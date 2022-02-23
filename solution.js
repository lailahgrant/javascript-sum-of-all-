function sumTo(n) {
        
        let sum = 0;
          for (let i = 1; i <= n; i++) {
            sum += i;
          }
        return sum;
      }

      function inp(){
        let num = document.getElementById("num").value;
        document.getElementById("results").innerHTML="Input number is <b>"+num+"</b>: "+"Sum of all numbers till "+num+ " is <b>"+sumTo(num)+"</b>";
      }