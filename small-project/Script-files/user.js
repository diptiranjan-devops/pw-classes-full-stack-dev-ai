const searchInput = document.getElementById("searchUser");

searchInput.addEventListener("keyup", function () {

    let filter = this.value.toLowerCase();

    let rows = document.querySelectorAll("#userTable tbody tr");

    rows.forEach(row => {

        let text = row.textContent.toLowerCase();

        if(text.includes(filter)){
            row.style.display = "";
        }else{
            row.style.display = "none";
        }

    });

});

document.querySelectorAll(".delete-btn").forEach(btn => {

    btn.addEventListener("click", function(){

        if(confirm("Delete this user?")){
            this.closest("tr").remove();
        }

    });

});

document.querySelectorAll(".edit-btn").forEach(btn => {

    btn.addEventListener("click", function(){

        alert("Edit User Function");

    });

});