export const section_5_FormValidation = (inputValue) => {

    const _errors = {name: '', email: '', textarea: ''}

    if (inputValue.name.length < 2 ) {
        _errors.name = 'imię minimum dwa znaki'
    }
    if (!inputValue.email.includes("@")) {
        _errors.email = 'dodaj @'
    }
    if (inputValue.textarea.length < 2) {
        _errors.textarea = 'wiadomość minimum dwa znaki'
    }

    if (_errors.name.length > 0 ||
        _errors.email.length > 0 ||
        _errors.textarea.length > 0
    ){
        return _errors
    } else {
        return ''
    }

}