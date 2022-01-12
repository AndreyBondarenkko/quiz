import answerAndQuestion from "./answerAndQuestion.js";

let userResultEnv = 0;
let userResultSoc = 0;
let count = 1;

const obj = answerAndQuestion;
const infographicBlock = document.querySelector('#infographic');

//generating questions
const previewBlock = (data) => {
    const element = `
        <div id="${data.id}" class="infographic-items">
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
    //Add first questions
    previewBlock(previewStep);
    //Count -sociental and -environmental
    scorCount(previewStep);
}
previewQuestion();

//click answer question
infographicBlock.addEventListener('click', function (e) {
    const switchElement = e.target;


    if (switchElement.classList.contains('question') && !switchElement.closest('.infographic-items').classList.contains('checked')) {
        switchElement.nextElementSibling.style.display = 'flex';

        //click to true answer
        if(switchElement.dataset.answer === 'true'){
            switchElement.closest('.infographic-items').classList.add('checked');
            count++;

            if(count > Object.keys(obj).length){
                //Preview results block
                scorPreview('sociental', userResultSoc, 'environmental', userResultEnv);
                //Show block results
                document.querySelector('.result').style.display = 'flex';
                //ScrollToElements
                scrollToElement( 'none', 'result' );
            }else{
                //Count -sociental and -environmental
                scorCount( obj[count] );
                //Add new questions
                previewBlock( obj[count] );
                //ScrollToElements
                scrollToElement( obj[count], 'none' );
            }
        }
    }
});

//scrollToElement
function scrollToElement( scrollToQustion, scrollToResult ){

    let scrollToBlock, elementPosition, offsetPosition;

    if(scrollToResult != 'none'){
        scrollToBlock = document.querySelector(`.${scrollToResult}`),
        elementPosition = scrollToBlock.getBoundingClientRect().top,
        offsetPosition = elementPosition - 50;

    }else if (scrollToQustion != 'none'){
        scrollToBlock = document.querySelector(`#${scrollToQustion.id}`),
        elementPosition = scrollToBlock.getBoundingClientRect().top,
        offsetPosition = elementPosition - 50;

    }

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

//Count -sociental and -environmental
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
        
    if( resultSoc > 0 ){
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('score');

        for(let k = 1; k <= resultSoc; k++){
            imageWrapper.insertAdjacentHTML( 'beforeend', `<img src="./img/${sociental}.png" alt="img">`);
        }

        document.querySelector('.sociental').append(imageWrapper);
    }

    if( resultEnv > 0 ){
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('score');

        for(let k = 1; k <= resultEnv; k++){
            imageWrapper.insertAdjacentHTML( 'beforeend', `<img src="./img/${environmental}.png" alt="img">`);
        }

        document.querySelector('.environmental').append(imageWrapper);
    }

}
