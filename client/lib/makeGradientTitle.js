import clsx from "clsx";

export default function makeGradientTitle(title, gradientWords, parentClass = "", gClass = "") {
  let segments = [];
  let currentIdx = 0;

  // console.log(title, gradientWords);

  if (gradientWords && gradientWords.length > 0) {
    const gradientMap = {
      gLbMbMp:
        "gLbMbMp",
      gLbMb:
        "gLbMb",
      gLbMpMb:
        "gLbMpMb",
    };

    gradientWords.forEach((wordObj) => {

      const { word, gradientType } = wordObj;

      if (word == null) {
        return;
      }

      const idx = title.toLowerCase().indexOf(word.toLowerCase(), currentIdx);



      if (idx !== -1) {
        // Add the part before the gradient word
        segments.push(title.substring(currentIdx, (idx - 1)));
        // Add the gradient word with its class

        segments.push(
          <span key={word} className={`${gradientMap[gradientType]} ${gClass}`}>
            {" " + word}
          </span>,
        );
        currentIdx = idx + word.length;
      }
    });
  }

  // Add the remaining part of the title
  if (currentIdx < title.length) {
    segments.push(title.substring(currentIdx));
  }

  return <span className={clsx(parentClass)}>{segments}</span>;
}
