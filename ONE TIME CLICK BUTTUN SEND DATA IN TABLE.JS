var b = document.getElementById("my_submit_btn");
b && b.addEventListener("click", function() {
 var t = b.innerText;
 b.innerText = "Please wait...";
 b.disabled = true;

 setTimeout(function() {
 b.disabled = false;
 b.innerText = t;
 }, 3000);
});
