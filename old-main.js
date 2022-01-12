import answerAndQuestion from "./answerAndQuestion.js";

let userResultEnv = 0;
let userResultSoc = 0;

const obj = answerAndQuestion;
const infographicBlock = document.querySelector('#infographic');
let count = 1;

//generating questions
const previewBlock = (data) => {
    // ${ previewImageQuestion_1() !== undefined ? previewImageQuestion_1() : '' }
    // ${ previewImageQuestion( 'question_1' ) !== undefined ? previewImageQuestion( 'question_1' ) : '' }

    const element = `
        <div class="infographic-items">
            <div class="title-step">${data.section_title}</div>
                <div class="infographic-grid">
                    <div class="infographic-item">
                        <div class="question" data-answer="${data.question_1.result}">${data.question_1.question}</div>
                        <div class="answer">
                            <div class="title-wrap">
                                ${ data.question_1.title !== 'none' ? `<div class="title">${data.question_1.title}</div>` : '' }
                            
                                ${ previewImageQuestion( 'question_1' ) }
                            </div>
                            <div class="content">${data.question_1.answer}</div>
                        </div>
                    </div>
                    <div class="infographic-item">
                        <div class="question" data-answer="${data.question_2.result}">${data.question_2.question}</div>
                        <div class="answer">
                            <div class="title-wrap">
                                ${ data.question_2.title !== 'none' ? `<div class="title">${data.question_2.title}</div> `: '' }
                                
                                ${ previewImageQuestion( 'question_2' ) }
                            </div>
                        <div class="content">${data.question_2.answer}</div>
                    </div>
                </div>
           </div>
        </div>
    `;

    //added image -
    function previewImageQuestion (key){
        let result = '';

        if(data[key].count_score !== 0){
            let imageWrapper = document.createElement('div');
            imageWrapper.classList.add('score');

            for(let k = 1; k <= data[key].count_score; k++){
                imageWrapper.insertAdjacentHTML('beforeend', `<img src="./img/${data[key].score}.png" alt="img">`);
            }

            result = imageWrapper.outerHTML;
        }

        return result;
    }

    infographicBlock.insertAdjacentHTML('beforeend', element);
}

//Preview -first question
const previewQuestion = () => {
    let { 1: previewStep, ...other } = obj;
    previewBlock(previewStep);

    scorCount(previewStep);
}

previewQuestion();

//click answer question
infographicBlock.addEventListener('click', function (e) {
    const switchElement = e.target;

    if (switchElement.classList.contains('question')) {
        switchElement.nextElementSibling.style.display = 'block';

        //true
        if(switchElement.dataset.answer === 'true'){
            count++;

            if(count > Object.keys(obj).length){
                scorPreview('sociental', userResultSoc, 'environmental', userResultEnv);
                document.querySelector('.result').style.display = 'block';
            }else{
                scorCount(obj[count]);
                previewBlock(obj[count]);
            }

        }
    }
});

//scoring
function scorCount (data){

    if(data.question_1.result && typeof data !== undefined){
        if(data.question_1.score === 'environmental'){
            userResultEnv += data.question_1.count_score;
        } else if( data.question_1.score === 'sociental' ){
            userResultSoc += data.question_1.count_score;
        }

    }else if( data.question_2.result && typeof data !== undefined ){
        if(data.question_2.score === 'environmental'){
            userResultEnv += data.question_2.count_score;
        } else if( data.question_2.score === 'sociental' ){
            userResultSoc += data.question_2.count_score;
        }

    }
}

function scorPreview (sociental, resultSoc, environmental, resultEnv){
    let imageWrapper = document.createElement('div');
    imageWrapper.classList.add('score');

    console.log('resultSoc : ' + resultSoc);
    console.log('resultEnv : ' + resultEnv);

    if( resultSoc != 0 ){
        console.log('if_1');

        // for(let k = 1; k <= resultSoc; k++){
        //     imageWrapper.insertAdjacentHTML('beforeend', `<img src="./img/${sociental}.png" alt="img">`);
        // }

        // document.querySelector('.sociental').append( imageWrapper );
        // console.log(document.querySelector('.environmental'));
        // console.log(imageWrapper);
    }

    if(resultEnv != 0 ){
        console.log('if_2');

        // for(let k = 1; k <= resultEnv; k++){
        //     imageWrapper.insertAdjacentHTML('beforeend', `<img src="./img/${environmental}.png" alt="img">`);
        // }

        // document.querySelector('.environmental').append( imageWrapper );
        // console.log(document.querySelector('.environmental'));
        // console.log(imageWrapper);
        // imageWrapper.innerHTML = '';
    }
}
