export const getPath = (el) => {
    if (el.tagName == "BODY") {
        return "body";
    }
    let path = getPath(el.parentNode);
    if (el.id) {
        return `${path} ${el.tagName.toLowerCase()}#${el.id}`;
    }
    if (el.className) {
        return `${path} ${el.tagName.toLowerCase()}.${el.className}`;
    }
    if (el.nodeType === 1) {
        return `${path} ${el.nodeName.toLowerCase()}:first-child`;
    }
    let nth = 1;
    while (el.nodeType === Node.ELEMENT_NODE) {
        nth++;
    }

    return `${path} ${el.nodeName.toLowerCase()}:nth-child(${nth})`;
};
