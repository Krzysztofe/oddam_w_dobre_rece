export const section_5_FormValidation = (inputValue) => {

    const _errors = {name: '', email: '', textarea: ''}

    if (inputValue.name.includes(' ') || !inputValue.name) {
        _errors.name = 'imię powinno być jednym wyrazem'
    }
    if (!inputValue.email.includes("@")) {
        _errors.email = 'dodaj @'
    }
    if (inputValue.textarea.length < 2) {
        _errors.textarea = 'wiadomość minimum dwa znaki'
    }

    if (_errors.name || _errors.email || _errors.textarea) {
        return _errors
    }
        return
}

export const registerValidation = (inputValuRregister) => {

    const _errors = []

    if (!inputValuRregister.email.includes("@")) {
        _errors.push('dodaj @')
    }
    if (inputValuRregister.password.length < 6) {
        _errors.push('hasło musi mieć conajmniej 6 znaków')
    }
    if (inputValuRregister.passwordRepeated !== inputValuRregister.password ||
    !inputValuRregister.passwordRepeated) {
        _errors.push("hasła muszą być takie same")
    }
    if (_errors.length > 0) {
        return _errors.join(' , ')
    }
        return
}

export const loginValidation = (inputValueLogin) => {

    const _errors = []

    if (!inputValueLogin.email.includes("@")) {
        _errors.push('dodaj @')
    }
    if (inputValueLogin.password.length < 6) {
        _errors.push('hasło musi mieć conajmniej 6 znaków')
    }
    if (_errors.length > 0) {
        return _errors.join(' , ')
    }
    return
}
