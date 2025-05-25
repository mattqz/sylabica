function LatinToSymbolitsa(inputText) {
    let text = inputText.toLowerCase();

    let transformedText = '';
    let i = 0;

    while (i < text.length) {
        let replaced = false;

        // Look for 4-letter clusters first
        if (i <= text.length - 4) {
            const fourChar = text.substring(i, i + 4);
            if (LetterClusters[fourChar]) {
                transformedText += LetterClusters[fourChar];
                i += 4;
                replaced = true;
                continue;
            }
        }

        // Then look for 3-letter clusters
        if (!replaced && i <= text.length - 3) {
            const threeChar = text.substring(i, i + 3);
            if (LetterClusters[threeChar]) {
                transformedText += LetterClusters[threeChar];
                i += 3;
                replaced = true;
                continue;
            }
        }

        // Then look for 2-letter clusters
        if (!replaced && i <= text.length - 2) {
            const twoChar = text.substring(i, i + 2);
            if (LetterClusters[twoChar]) {
                transformedText += LetterClusters[twoChar];
                i += 2;
                replaced = true;
                continue;
            }
        }

        // Finally, if not part of any cluster, check single characters
        if (!replaced) {
            const char = text[i];
            transformedText += SingleLetters[char] || char;
            i++;
        }
    }

    return transformedText;
}


document.addEventListener("DOMContentLoaded", ()=>{
    const syl = document.getElementsByClassName("syl");
    const sylLi = document.getElementsByClassName("sylLi");
    const sylSa = document.getElementsByClassName("sylSa");
    const sylMo = document.getElementsByClassName("sylMo");
    const lit = document.getElementsByClassName("lit");

    const translateBtn = document.getElementById('trbtn');

    // console.log(sym);

    for(let i = 0; i < syl.length; i++){
        syl[i].innerText = LatinToSymbolitsa(syl[i].innerText);
    }
    for(let i = 0; i < sylLi.length; i++){
        sylLi[i].innerText = LatinToSymbolitsa(sylLi[i].innerText);
    }
    for(let i = 0; i < sylSa.length; i++){
        sylSa[i].innerText = LatinToSymbolitsa(sylSa[i].innerText);
    }
    for(let i = 0; i < sylMo.length; i++){
        sylMo[i].innerText = LatinToSymbolitsa(sylMo[i].innerText);
    }

    for(let i = 0; i < lit.length; i++){
        let text = lit[i].innerText;
        lit[i].innerText = '/' + text + '/';
    }

    translateBtn.addEventListener("click", ()=>{
        const latArea = document.getElementById('lat');
        const sylArea = document.getElementById('syl');

        if (latArea.value != null){
            sylArea.value = LatinToSymbolitsa(latArea.value);
            // console.log(latArea.value);
        }
    });
});