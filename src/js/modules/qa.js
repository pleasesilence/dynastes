function qa() {
    if (document.querySelector('.qa__block') && document.querySelector('.qa__question')) {
        const qaBlocks = document.querySelectorAll('.qa__block'),
              qaBtns = document.querySelectorAll('.qa__question');

        function hideQaBlocks() {
            qaBlocks.forEach((block) => {
                block.classList.remove('qa__block_active');
            })
        }

        function showQaBlock(i) {
            qaBlocks[i].classList.toggle('qa__block_active');
        }

        for (let i = 0; i < 4; i++) {
            qaBtns[i].addEventListener('click', (event) => {
                hideQaBlocks();
                showQaBlock(i);
            })
        }
    }
};

module.exports = qa;