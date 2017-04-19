function nodeInsertedCallback(event) {
    if (event.target.className === "test_result_table infoTable"){
        var elem = event.target;
        elem.insertAdjacentHTML('beforebegin','<button id="show_ci" "type="button">Show CI results</button>')
        var btn = document.getElementById("show_ci");
        btn.onclick = function(){
            if(elem.style.display === 'none'){
                elem.style.display = 'block';
                btn.textContent = "Hide CI results";
            }
            else{
                elem.style.display = 'none';
                btn.textContent = "Show CI results";
            }
        }
        elem.style.display = 'none';
    }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
