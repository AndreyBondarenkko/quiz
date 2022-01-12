const answerAndQuestion = {
    1 : {
        'id' : 'step_first',
        'section_title' : 'DESIGN CHOICE #1',
        'question_1' : {
            'question' : 'USE PETROLEUM-BASED VIRGIN PLASTIC',
            'count_score' : 0, 
            'score' : 'none', 
            'title' : 'none',
            'result' : false,
            'answer' : 'Petroleum based virgin plastic depletes non-renewable resources. Try again!',
        },
        'question_2' : {
            'question' : 'USE RECYCLED PLASTIC',
            'count_score' : 2,
            'score' : 'environmental',
            'title' : 'GOOD CHOICE!',
            'result' : true,
            'answer' : 'Using recycled plastic does not deplete non-renewable resources and enables an effective end of life reusage of plastic.',
        },
    },  

    2 : {
        'id' : 'step_second',
        'section_title' : 'DESIGN CHOICE #2',
        'question_1' : {
            'question' : 'ADD RECYCLED PLASTIC',
            'count_score' : 0,
            'score' : 'none',
            'title' : 'none',
            'result' : false,
            'answer' : 'Adding recycled material is an excellent solution, congratulations! But if we inform consumers, they are empowered to make a responsible choice. Try adding a label …',
        },
        'question_2' : {
            'question' : 'ADD RECYCLED PLASTIC + ECO-LABEL ON PACKAGING',
            'count_score' : 4,
            'score' : 'sociental',
            'title' : 'BENEFITS INCREASED!',
            'result' : true,
            'answer' : 'An eco-label alerts shoppers to the sustainability of the product so they’re empowered with the right information when making purchases.',
        },
    },

    3 : {
        'id' : 'step_third',
        'section_title' : 'DESIGN CHOICE #3',
        'question_1' : {
            'question' : 'PRODUCE COMPONENTS IN-HOUSE',
            'count_score' : 3,
            'score' : 'environmental',
            'title' : 'OPTIMIZED',
            'result' : true,
            'answer' : 'By producing components in the same factory, you reduce transportation impact on the environment.',
        },
        'question_2' : {
            'question' : 'SOURCE COMPONENTS WHERE CHEAPER',
            'count_score' : 0,
            'score' : 'none',
            'title' : 'none',
            'result' : false,
            'answer' : 'Oh no! This could generate greater transportation needs if the source is far from the manufacturing facility.',
        },
    },

    4 : {
        'id' : 'step_fourth',
        'section_title' : 'DESIGN CHOICE #4',
        'question_1' : {
            'question' : 'MAKE THE PENCIL REFILLABLE WITH 4 REFILLS INCLUDED',
            'count_score' : 4,
            'score' : 'environmental',
            'title' : 'SCORE INCREASED!',
            'result' : true,
            'answer' : 'Product is designed to be longer-lasting and has a longer length of use right from the start. Smart choice!',
        },
        'question_2' : {
            'question' : 'MAKE  THE PENCIL REFILLABLE',
            'count_score' : 0,
            'score' : 'none',
            'title' : 'none',
            'result' : false,
            'answer' : 'Good start! However, providing refills with the pencil increases its length of use.',
        },
    },
}

export default answerAndQuestion;