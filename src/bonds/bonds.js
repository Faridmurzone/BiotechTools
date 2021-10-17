
const {atoms} = require(`../atoms/atoms.js`)

async function getElectronegativyDiff(a1, a2) {
    /* 
        Returns electronegativy difference between atom 1 and atom 2
    */
    const ena1 = atoms.find(el => el.symbol === a1).electronegativity_pauling
    const ena2 = atoms.find(el => el.symbol === a2).electronegativity_pauling
    const endiff = Math.round((Math.abs(ena1 - ena2)  + Number.EPSILON) * 100) / 100
    return endiff
}

async function getAtomsCategory(...a) {
    /*
        Returns Atoms Category
    */

    return atomsCategory = a.map(atom => {
        console.log(atom)
        return atoms.find(el => el.symbol === atom).category
    })
}

async function getBondType(a1, a2) {
    /* 
        Returns one of:
            - ionic
            - metallic
            - covalent
            - polarized
            - hydrogen
            - van der Waals
            - clathrate
    */
    const endiff = await getElectronegativyDiff(a1, a2)
    const category = await getAtomsCategory(a1, a2)
    console.log(category)
    if(endiff === 0) {
        return "covalent"
    } else if (endiff < 1.7) {
        return "polar"
    } else if (endiff > 1.7) {
        return "ionic"
    }
}


module.exports = {
    getBondType,
    getElectronegativyDiff
}