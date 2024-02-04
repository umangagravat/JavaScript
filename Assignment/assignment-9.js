const isPlayingObject = function (values) {
    if(typeof(values) === 'object' &&  !Array.isArray(values) && (values) !== null)
        {
            return true;
        }
        else
        {
            return false;
        }
}
    console.log(isPlayingObject({}));
    console.log(isPlayingObject([]));
    console.log(isPlayingObject(1234));
    console.log(isPlayingObject(1234.54));
    console.log(isPlayingObject(true));
    console.log(isPlayingObject(null));
    console.log(isPlayingObject(undefined));
    console.log(isPlayingObject('umang'));

