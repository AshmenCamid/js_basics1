<script>
let numbers = [];

function insertNumber(){
    let input = document.getElementById("numberInput").value;
    if (input ==="") return;

    let num = parseInt(input);
    numbers.push(num);
    updateDisplay();
    
    Document.getElementById("numberInput").value = "";
}
 function deletAll() {
    numbers =[];
    updateDisplay();
 }
 function updateDisplay() { let numberList = document.getElementById("numberList");
    numberList.innerHTML = numbers.join("<br>");

    let sum = numbers.reduce((a,b) => a+b,0);
    let highest = numbers.length > 0 ?
    Math.max(...numbers) : 0;
    let lowest = numbers.length > 0 ? Math.min(...numbers) : 0;

    document.getElementById("sum").textContent=sum;
    document.getElementById("highest").textContent=highest;
    document.getElementById("lowest").textContent=lowest;
 } 
 </script>



