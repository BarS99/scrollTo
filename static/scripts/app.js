/** Scroll page to given offset
 * @param {int} value - offsetY to scroll
 * @param {int} time - duration of scroll animation
 * @callback callback - easing equation where: t = current time, b - start value, c - change in value, d - duration
 */
const scrollDocumentTo = (value = 0, time = 0, callback = (t, b, c, d) => {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
}) => {
    let start,
        ellapsed,
        startPosition = window.pageYOffset,
        difference = value - startPosition;

    const moveY = (timestamp) => {
        if (start === undefined) start = timestamp;
        ellapsed = timestamp - start;

        scrollTo(0, callback(ellapsed, startPosition, difference, time));

        if (ellapsed < time) requestAnimationFrame(moveY);
    }

    requestAnimationFrame(moveY);
}