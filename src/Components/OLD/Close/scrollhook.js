import { useEffect, useState } from 'react';

function useScollPosition() {
    const [percentageScroll, setPercentageScroll] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            //TODO: Check the documentElement and body won't cause issues being different.
            const maxScroll =
                document.body.scrollHeight -
                document.documentElement.clientHeight;

            setPercentageScroll(document.documentElement.scrollTop / maxScroll);

            //TODO - The UseState method appears to be stoppping exact measurements coming through.
            // console.log("document.documentElement.scrollTop/maxScroll)", document.documentElement.scrollTop/maxScroll);
            // console.log(offset, "offset");
        };
    });

    return percentageScroll;
}

export { useScollPosition };
