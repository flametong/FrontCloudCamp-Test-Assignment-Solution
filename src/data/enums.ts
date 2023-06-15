export enum Sex {
    Man = "Мужской",
    Woman = "Женский"
}

export enum FormInputs {
    Phone = "phone",
    Email = "email",
    Nickname = "nickname",
    Name = "name",
    Sername = "sername",
    Sex = "sex",
    Advantages = "advantages",
    AdvantageItem = "advantage-item",
    CheckboxGroup = "checkbox-group",
    RadioGroup = "radio-group",
    About = "about"
}

export enum Steps {
    One = "one",
    Two = "two",
    Three = "three"
}

export enum ButtonThemes {
    Primary = "primary",
    Outline = "outline",
    Adding = "adding"
}

export enum InputThemes {
    BackgroundGray = "backgroundGray",
    BackgroundWhite = "backgroundWhite"
}

export enum RouteEndpoints {
    Home = "/",
    Form = "/create",
    Error404 = "/error404"
}

export enum Validations {
    required = "Поле обязательно для заполнения",
    email = "Поле должно содержать корректную форму email",
    phone = "Неправильный формат номера",
    phoneMin = "Номер должен состоять из 11 цифр",
    notSpecialSymbols = "Разрешены только буквы и цифры",
    nicknameMax = "Максимальная длина 30 символов",
    nameMax = "Максимальная длина 50 символов",
    onlyAlpabetic = "Разрешены только буквы",
    aboutMax = "Максимальная длина 200 символов"
}