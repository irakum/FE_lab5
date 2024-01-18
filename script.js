function validateForm() {
    const form = document.getElementById('myForm');
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const isValid = input.checkValidity();

        if (!isValid) {
            // Якщо валідація не пройшла, виділити поле з помилкою
            input.classList.add('error');
        } else {
            // Якщо валідація пройшла, прибрати виділення помилки (якщо є)
            input.classList.remove('error');
        }
    }

    if (form.checkValidity()) {
        // Якщо форма валідна, вивести введену інформацію у вікні
        const fullName = document.getElementById('fullName').value;
        const faculty = document.getElementById('faculty').value;
        const birthdate = document.getElementById('birthdate').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        //alert(`ПІБ: ${fullName}\nФакультет: ${faculty}\nДата народж.: ${birthdate}\nАдреса: ${address}\ne-mail: ${email}`);
        const resultsHtml  = `
        <p style="font-weight: bold;">Введені дані</p>
        <p>ПІБ: ${fullName}</p>
        <p>Факультет: ${faculty}</p>
        <p>Дата народження.: ${birthdate}</p>
        <p>Адреса: ${address}</p>
        <p>e-mail: ${email}</p>
      `;

        // Відкриття нового вікна
        const resultsWindow = window.open('', '_blank', 'width=400,height=400');
        resultsWindow.document.write(resultsHtml);

        // Показати контейнер з результатами (не обов'язково, якщо ви використовуєте вікно)
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = resultsHtml;
        resultsContainer.style.display = 'block';
    }
}

const table = document.getElementById("myTable");
const cells = table.getElementsByTagName("td");
const colorPicker = document.getElementById("colorPicker");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function() {
        if (this.id === "cell_15") {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
    });

    cells[i].addEventListener("click", function() {
        if (this.id === "cell_15") {
            this.style.backgroundColor = colorPicker.value;
            this.classList.add("highlight");
        }
    });

    cells[i].addEventListener("dblclick", function() {
        if (this.id === "cell_15") {
            const color = "#" + Math.floor(Math.random()*16777215).toString(16);
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].id !== "cell_15") {
                    cells[j].style.backgroundColor = color;
                    cells[j].classList.add("highlight");
                }
            }
        }
    });

    cells[i].textContent = i + 1;
}