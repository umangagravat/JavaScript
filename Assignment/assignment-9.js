const isPlayingObject = function (values) {
    if(typeof(values) === 'object' &&  Array.isArray(values) === false)
        {
            return true;
        }
        else
        {
            return false;
        }
}
    console.log(isPlayingObject());