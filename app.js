//create a dummy data representing the question,option and answer
let quizData =[
    {
        question: 'what is the name of the vertical lines that runs through the earth',
        options: [ "equator", "longitude","latitude"],
        answer: "equator"
    },
    {
        question: 'what is the name of the vertical lines that runs through the earth',
        options: [ "equator", "longitude","latitude"],
        answer: "eqr"
    },
    {
        question: 'what is the name of the vertical lines that runs through the earth',
        options: [ "equator", "longitude","latitude"],
        answer: "equator"
    }
]
let dataView = document.querySelector(".data-view")
// console.log(dataView);

function quizApp() {

let quizArray = quizData.map((quiz)=>{
    return ` <div class="question d-flex justify-content-center ">
    <div class="right col-6 px-5 pri-bg-col ">

        <h1 class="ques">
            ${quiz.question}
        </h1>
        <select name="select" id="select-item" class="w-100 py-3">
            <option value="" select-disabled> select an answer</option>
            <option value="">${quiz.options[0]}</option>
            <option value="">${quiz.options[1]}</option>
            <option value="">${quiz.options[2]}</option>
        </select>
    </div>
    <div class="left col-6 px-5 sec-bg-col ">
        <p class="choice"> selected answer: </p>
        <p class="answer"> correct answer:</p>
        <p class="stat"> Status: </p>
    </div>
</div>`;
});

 dataView.innerHTML= quizArray.join("");
//  let select = document.querySelectorAll('select');
 let selectElement =document.querySelectorAll("select");
 selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
        let selectValue = event.target.value;
        // document.querySelectorAll('choice')[index]. innercontent= `selected answer: ${selectValue}`;
        // consolelog(selectValue);
        let picked = document.querySelectorAll('.choice')[index];
        picked.innerHTML=`selected answer: ${selectValue}`;
        let answer = document.querySelectorAll('.answer')[index];
        answer.innerHTML =`correct answer: ${quizData[index].answer}`;



        if (quizData[index].answer===selectValue){
            document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
            // document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
        }else {
            document.querySelectorAll('.stat')[index].innerHTML =`status: incorrect`

        }

    });

 });
}

quizApp()
let input = document.getElementById('.input')
function selectMe(event) {
    event.target.value
}