export const validateNickname = (nickname: string): boolean => {
    const nicknameRegex = /^[a-zA-Z0-9]{2,16}$/;
    const koreanNicknameRegex = /^[가-힣]{2,8}$/;

    return nicknameRegex.test(nickname) || koreanNicknameRegex.test(nickname);
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

    return passwordRegex.test(password);
};

export const validateSamePassword = (
    password: string,
    samePassword: string
): boolean => {
    return password === samePassword;
};
