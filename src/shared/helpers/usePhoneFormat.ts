export const usePhoneFormat = (phone: string) => {
    const cleanText = phone.replace(/\D/g, "");

    // // Форматируем в "+7 (XXX) XXX-XX-XX"
    let formatted = "+7";
    if (cleanText.length > 1) formatted += ` (${cleanText.slice(1, 4)}`;
    if (cleanText.length >= 4) formatted += `) ${cleanText.slice(4, 7)}`;
    if (cleanText.length >= 7) formatted += `-${cleanText.slice(7, 9)}`;
    if (cleanText.length >= 9) formatted += `-${cleanText.slice(9, 11)}`;

    return formatted;
};
