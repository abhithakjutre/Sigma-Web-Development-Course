 const track = document.getElementById('carousel');
    const btnLeft = document.querySelector('.arrow-left');
    const btnRight = document.querySelector('.arrow-right');

    const updateCardWidth = () => {
      const card = track.querySelector('.card');
      return card.offsetWidth + parseFloat(getComputedStyle(track).gap);
    };

    btnLeft.addEventListener('click', () => {
      track.scrollBy({ left: -updateCardWidth() * 4, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      track.scrollBy({ left: updateCardWidth() * 4, behavior: 'smooth' });
    });