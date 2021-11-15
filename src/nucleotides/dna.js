function codingStrandToARNm(codingStrand) {
    /* This function changes coding strand bases to ARNm bases */
    return codingStrand.replace(/T/g, 'U')
}

function ARNmToCodingStrand(arn) {
    /* This function changes ARNm bases to coding strand bases */
    return arn.replace(/U/g, 'T')
}

function switchTemplateStrandCodingStrand(strand) {
    /* This function switch template strand to coding strand or coding strand to template strand */
    return strand.replace(/G/g, 'C').replace(/T/g, 'A').replace(/A/g, 'T').replace(/C/g, 'G')
}

function templateStrandToARNm(strand) {
    return strand.replace(/G/g, 'C').replace(/T/g, 'A').replace(/A/g, 'T').replace(/C/g, 'G')
}