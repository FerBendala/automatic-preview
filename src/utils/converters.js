// Colors
// more info: https://css-tricks.com/converting-color-spaces-in-javascript/
const RGBAToHexA = ( rgba ) => {
    let sep = rgba.indexOf( ',' ) > -1 ? ',' : ' '
    rgba = rgba.substr( 5 ).split( ')' )[0].split( sep )

    // Strip the slash if using space-separated syntax
    if ( rgba.indexOf( '/' ) > -1 ) rgba.splice( 3, 1 )


    for ( let R in rgba ) {
        let r = rgba[R]
        if ( r.indexOf( '%' ) > -1 ) {
            let p = r.substr( 0, r.length - 1 ) / 100

            if ( R < 3 ) rgba[R] = Math.round( p * 255 )
            else rgba[R] = p
        }
    }

    let r = ( +rgba[0] ).toString( 16 ),
        g = ( +rgba[1] ).toString( 16 ),
        b = ( +rgba[2] ).toString( 16 ),
        a = Math.round( +rgba[3] * 255 ).toString( 16 )

    if ( r.length === 1 )
        r = '0' + r
    if ( g.length === 1 )
        g = '0' + g
    if ( b.length === 1 )
        b = '0' + b
    if ( a.length === 1 )
        a = '0' + a

    if ( a === 'ff' )
        return '#' + r + g + b
    else
        return '#' + r + g + b + a
}

const hexAtoRGBA = ( h, isPct ) => {
    let r = 0, g = 0, b = 0, a = 1
    isPct = isPct === true

    if ( h.length === 5 ) {
        r = '0x' + h[1] + h[1]
        g = '0x' + h[2] + h[2]
        b = '0x' + h[3] + h[3]
        a = '0x' + h[4] + h[4]

    } else if ( h.length === 9 ) {
        r = '0x' + h[1] + h[2]
        g = '0x' + h[3] + h[4]
        b = '0x' + h[5] + h[6]
        a = '0x' + h[7] + h[8]
    }

    a = +( a / 255 ).toFixed( 3 )

    if ( isPct ) {
        r = +( r / 255 * 100 ).toFixed( 1 )
        g = +( g / 255 * 100 ).toFixed( 1 )
        b = +( b / 255 * 100 ).toFixed( 1 )
    }

    return 'rgba(' + ( isPct ? r + '%,' + g + '%,' + b + '%,' + a + '%' : +r + ',' + +g + ',' + +b + ',' + a ) + ')'
}

// Strings
const removeSpecialChars = ( string ) => {
    return string.replace( /[^a-zA-Z0-9 ]/g, "" )
}

// Numbers
const addCero = ( number ) => {
    return number < 10 ? "0" + number : number
}

const useConverter = { RGBAToHexA, hexAtoRGBA, removeSpecialChars, addCero }
export default useConverter

