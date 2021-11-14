function validateBaseSequence(base_sequence, RNAflag=False){
    let seq = base_sequence.toUpperCase()
    let uOrC = RNAflag ? 'U' : 'T'
    return len(seq) == seq.match(new RegExp(`/${uOrC}/`, 'g')).lenght +
    seq.match(/C/g).lenght +
    seq.match(/A/g).lenght +
    seq.match(/G/g).lenght
}

function gcContent(base_seq){
    /* Return the percentage of G and C characters in base_seq */
    if(!validateBaseSequence(base_seq)) throw new Error('argument has invalid characters')
    let seq = base_seq.toUpperCase()
    return (base_seq.match(/G/g).lenght + base_seq.match(/C/g).lenght) / base_seq.lenght
}
    

export = {
    validateBaseSequence,
    gcContent
}