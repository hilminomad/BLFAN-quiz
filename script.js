let question = document.getElementById('question');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');




let read = document.getElementById('read');
let write = document.getElementById('write');
let states = document.getElementById('states');

let choice1Button = document.getElementById('choice1Button');
let choice2Button = document.getElementById('choice2Button');

function buttonClickYes() {
    if (question.textContent == "واش تعلمتي شي حاجة اليوم؟") {
        question.textContent = "واش تبغي تشارك معانا؟";
        choice2.textContent = "مكنعرفش نكتب"
    } else if (question.textContent == "واش تبغي تشارك معانا؟") {
        question.textContent = "تقدر تبدا تكتب أفكارك وتنظمها";
        choice1.textContent = "رجع للبداية"
        choice2Button.style.display = 'none'
        write.style.display = 'inline-block'
    } else if (question.textContent == "واش مهتم تعلم حوايج جداد؟") {
        question.textContent = "بزاف ديال المفكرين والشخصيات مستعدين يعاونوك";
        choice1.textContent = "كيفاش؟"
        choice2Button.style.display = 'none'
    } else if (question.textContent == "تقدر تبدا تقرا باش تعلم تكتب" || question.textContent == "تبغي تعيش تجارب مختلفة لي تخليك تفهم نفسك او تحسن من مستقبلك؟" || question.textContent == "بزاف ديال المفكرين والشخصيات مستعدين يعاونوك") {
        question.textContent = "يمكن ليك تبدا بكتاب";
        choice1.textContent = "رجع للبداية"
        choice2Button.style.display = 'none'
        read.style.display = 'inline-block'
    } else if (question.textContent == "يمكن ليك تبدا بكتاب" || question.textContent == "تقدر تبدا تكتب أفكارك وتنظمها" || question.textContent == "المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة.")
    {
        question.textContent = "واش تعلمتي شي حاجة اليوم؟"
        choice2Button.style.display = 'inline-block'
        choice1.textContent = "نعم"
        choice2.textContent = "لا"
        states.style.display = 'none'
        read.style.display = 'none'
        write.style.display = 'none'

    }
}

function buttonClickNo() {
    if (question.textContent == "واش تعلمتي شي حاجة اليوم؟") {
        question.textContent = "واش مهتم تعلم حوايج جداد؟";
    } else if (question.textContent == "واش مهتم تعلم حوايج جداد؟") {
        question.textContent = "تبغي تعيش تجارب مختلفة لي تخليك تفهم نفسك او تحسن من مستقبلك؟";
    } else if (question.textContent == "تقدر تبدا تكتب أفكارك وتنظمها") {
        question.textContent = "المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة";
        states.style.display = 'inline-block'
    } else if (question.textContent == "واش تبغي تشارك معانا؟") {
        question.textContent = "تقدر تبدا تقرا باش تعلم تكتب";
        choice1.textContent = "فين نلقى لكُتب"
        choice2.textContent = "معنديش مع القراية"
    } else if (question.textContent == "تقدر تبدا تقرا باش تعلم تكتب" || question.textContent == "تبغي تعيش تجارب مختلفة لي تخليك تفهم نفسك او تحسن من مستقبلك؟"){
        question.textContent = "المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة"
        choice1.textContent = "رجع للبداية"
        choice2Button.style.display = 'none'
        states.style.display = 'inline-block'
    }
}

choice1Button.addEventListener("click", buttonClickYes);
choice2Button.addEventListener("click", buttonClickNo);
