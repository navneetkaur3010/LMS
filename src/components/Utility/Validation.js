function validateEmail(email)
{
    return /\S+@\S+\.\S+/.test(email);
}


function validatePassword(password){
    return /^(?=.*[a-z]).{8,32}$/.test(password)                        // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
}


function validateId(qci_id){
    return /^[0-9\b]+$/.test(qci_id)
}

function validateName(name){
    return /^[a-z ,.'-]+$/i.test(name)
}

function validateBoard(board){
    return /^[a-z ,.'-]+$/i.test(board)
}

function validateDesignation(designation){
    return /^[a-z ,.'-]+$/i.test(designation)
}



function validateBal_cl(bal_cl){
    return /^[0-9]{2}$/.test(bal_cl)  
}

function validateBal_sl(bal_sl){
    return /^[0-9]{2}$/.test(bal_sl)
}

function validateBal_ml(bal_ml){
    return /^[0-9]{2}$/.test(bal_ml)
}

function validateBal_pl(bal_pl){
    return /^[0-9]{2}$/.test(bal_pl)
}

function validateBal_eol(bal_eol){
    return /^[0-9]{2}$/.test(bal_eol)
}

function validatedateofapply(date_of_apply){
    return new Date().test(date_of_apply)
}



export {validatedateofapply,validateEmail,validatePassword,validateId, validateName,validateBoard,validateDesignation,validateBal_cl,validateBal_sl,validateBal_ml,validateBal_pl,validateBal_eol}

