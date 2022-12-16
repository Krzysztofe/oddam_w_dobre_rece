import * as Yup from "yup";

export const validationUserForm = Yup.object({
        name: Yup.string().matches(
            /^[a-zA-Z0-9@]+$/, "imię powinno być jednym wyrazem")
            .min(2, "imię minimum dwa znaki")
            .required("wymagane"),
        email: Yup.string().email("email jest nieprawidłowy").required('wymagane'),
        message: Yup.string().min(2, "wiadomość minimum dwa znaki").required('wymagane'),
    })


