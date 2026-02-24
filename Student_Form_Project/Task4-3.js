function saveData() {
            // 1. Get values from inputs
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var course = document.getElementById('course').value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            var email = document.getElementById('email').value;

            if(!name || !age || !email) {
                alert("Please fill all fields");
                return;
            }

            // 2. Create a new row
            var tableBody = document.getElementById('tableBody');
            var newRow = tableBody.insertRow();

            newRow.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>${course}</td>
                <td>${gender}</td>
                <td>${email}</td>
                <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
            `;

            // 3. Clear inputs
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('email').value = '';
        }

        function deleteRow(btn) {
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
		var Show=document.getElementById("Show")
		var close=document.getElementById("close")
		var S=document.getElementById("studentTable")
		var F=document.querySelector(".form-container")
		Show.addEventListener("click",function(event){
			S.style.display="inline-block"
			F.style.display="none"
			close.style.display="block"
			Show.style.display="none"
		})
		close.addEventListener("click",function(event){
			S.style.display="none"
			F.style.display="inline-block"
			Show.style.display="inline-block"
			close.style.display="none"
		})