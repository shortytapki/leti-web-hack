

export const formItemsPass = [
    {
        id: 0,
        placeholder: "Введите ваш логин",
        name: "login",
        type: "text",
        label:"Логин",
        options: {
            pattern: {
                value: /^\S*$/,
                message: 'В имени не должно быть пробела',
            },
            required: "Обязательное поле"
        }
    },
    {
        id: 1,
        placeholder: "Введите пароль",
        name: "password",
        type: "password",
        label:"Пароль",
        options: {
            required: "Обязательное поле",
            minLength: {
                message: 'Минимальное количество символов - 8',
                value: 8,
            },
            pattern: {
                value: /^\S*$/,
                message: 'В пароле не должно быть пробела',
            },
        }
    },
]