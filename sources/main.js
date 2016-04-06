module.exports = function (suite) {
    if (!suite)
        return 0;
    if (suite.length <= 2)
        return suite;

    suite = '' +  suite;
    var i = 0;
    var out = 0;
    var temp = 0;

    while (i < suite.length) {
        temp = parseInt(suite.substr(i, 2));
        if (temp > out)
            out = temp;
        i++;
    }

    return out;
};
