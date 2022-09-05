async function GetText(url) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        return text;
    }
    catch (error) {
        console.log(error);
    }

    return null;
}