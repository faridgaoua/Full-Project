var func = function(string) {
    return (new Function( 'return (' + string + ')' )());
}


console.log(func('2 * 4'))