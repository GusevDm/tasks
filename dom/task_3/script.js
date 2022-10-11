const amount = document.querySelector(".amount");
const color = document.querySelector(".bg");
const blocks = document.querySelector(".blocks");

const createMarkup = numAmount => {
    let markup = "";

    for(let i = 0; i < numAmount; i++) {
        const block = document.createElement("div");
        block.classList = "item";
        block.innerText = i + 1;

        markup += block.outerHTML;
    }

    return markup;
}

amount.addEventListener("change", e => {
    const numAmount = e.target.value;
    const markup = createMarkup(numAmount);

    blocks.innerHTML = markup;
})

const colorTheBlock = (block, colorBlocks) => {
    block.style.backgroundColor = colorBlocks;
}

let changed = false;

color.addEventListener("change", e => {
    const colorBlocks = e.target.value;
    const items = document.querySelectorAll(".item");

    changed = !changed

    for(let i = 0; i < items.length; i++) {
        const currentBlock = items[i];
        const blockNumer = i + 1;
        let colorToApply = "";

        if (changed) {
            colorToApply = blockNumer % 2 !== 0 ? colorBlocks : "#fff";
        } else {
            colorToApply = blockNumer % 2 === 0 ? colorBlocks : "#fff";
        }
        
        colorTheBlock(currentBlock, colorToApply);
    }
});