const isPlayingObject = function (values) {
    if(typeof(values) === 'object' &&  !Array.isArray(values) && typeof(values) !== 'object')
        {
            return true;
        }
        else
        {
            return false;
        }
}
    console.log(isPlayingObject(null));