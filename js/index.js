let percentageText = document.getElementById('percentage-text');
let rawPercent = document.getElementById('percent');
let loading = document.getElementById('loading');
let vk = document.getElementById('vk');
let telegram = document.getElementById('telegram');

let percent = Number.parseInt(
  rawPercent.innerText.replace('%', ''),
);

let dotsAmount = loading.innerText.length - 7;

function elementsBecomeVisible(...elements) {
  elements.forEach(
    (element) => {
      element.classList.add('visible');
      element.classList.remove('invisible');
    },
  );
}

function elementsBecomeInvisible(...elements) {
  elements.forEach(
    (element) => {
      element.classList.add('invisible');
      element.classList.remove('visible');
    },
  );
}

function elementsRemove(...elements) {
  elements.forEach(
    element => element.remove(),
  );
}

setTimeout(
  () => elementsBecomeVisible(percentageText),
  800,
);

let loadingInterval = setInterval(
  () => {
    if (dotsAmount === 3) {
      dotsAmount = -1;
    }

    dotsAmount++;

    loading.innerText = `loading${'.'.repeat(dotsAmount)}`;
  },
  1200,
);

let percentInterval = setInterval(
  () => {
    percent++;

    if (percent === 100) {
      clearInterval(percentInterval);

      setTimeout(
        () => {
          elementsBecomeInvisible(rawPercent, loading);
          elementsBecomeVisible(vk, telegram);

          setTimeout(
            () => elementsRemove(
              rawPercent,
              loading,
              percentageText,
            ),
            3000,
          );
        },
        2000,
      );
    }

    rawPercent.innerText = `${percent}%`;
  },
  100,
);
