import { validateForm } from './lib/formValidator';

describe('Form Validator', () => {
    it('should return false if any required field is missing', () => {
        const formData = {
            firstName: '',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '1234567890',
            message: 'Hello',
            selectedCountry: '+63'
        };
        expect(validateForm(formData)).toBe(false);
    });

    it('should return false if phone number exceeds max length for the country', () => {
        const formData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '123456789012',
            message: 'Hello',
            selectedCountry: '+63'
        };
        expect(validateForm(formData)).toBe(false);
    });

    it('should return true if all fields are valid', () => {
        const formData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '1234567890',
            message: 'Hello',
            selectedCountry: '+63'
        };
        expect(validateForm(formData)).toBe(true);
    });
});
