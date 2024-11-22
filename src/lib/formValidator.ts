interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    selectedCountry: string;
}

interface Country {
    code: string;
    name: string;
    maxLength: number;
}

const countries: Country[] = [
    { code: '+63', name: 'Philippines', maxLength: 10 },
    { code: '+60', name: 'Malaysia', maxLength: 11 },
    { code: '+65', name: 'Singapore', maxLength: 8 },
    { code: '+62', name: 'Indonesia', maxLength: 11 },
    { code: '+66', name: 'Thailand', maxLength: 9 },
];

export function validateForm(data: FormData): boolean {
    const { firstName, lastName, email, phoneNumber, message, selectedCountry } = data;

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
        return false;
    }

    const country = countries.find(c => c.code === selectedCountry);
    if (!country || phoneNumber.length > country.maxLength) {
        return false;
    }

    return true;
}
