import { describe, it, expect } from 'vitest';
import { validateEventForm } from './lib/formValidator2';

// Mock Event interface for testing
const existingEvents = [
    { date: 15, month: 5, year: 2023, name: 'Meeting', time: '10:00 AM', endDate: new Date(2023, 5, 15, 11, 0), phoneNumber: '+63 1234567890' }
];

describe('validateEventForm', () => {
    it('should return invalid if title is empty', () => {
        const result = validateEventForm('', '2023-06-15T10:00', '', '', '+63', existingEvents, null);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Event title is required.');
    });

    it('should return invalid if start date is empty', () => {
        const result = validateEventForm('New Event', '', '', '1234567890', '+63', existingEvents, null);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Start date and time are required.');
    });

    it('should return invalid if phone number is empty', () => {
        const result = validateEventForm('New Event', '2023-06-15T10:00', '', '', '+63', existingEvents, null);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Phone number is required.');
    });

    it('should return invalid if end date is before start date', () => {
        const result = validateEventForm('New Event', '2023-06-15T10:00', '2023-06-15T09:00', '1234567890', '+63', existingEvents, null);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('End date cannot be before start date.');
    });

    it('should return invalid if there is a conflict with existing events', () => {
        const result = validateEventForm('New Event', '2023-06-15T10:30', '2023-06-15T11:30', '1234567890', '+63', existingEvents, null);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('There is a conflict with an existing event.');
    });

    it('should return valid if there are no issues', () => {
        const result = validateEventForm('New Event', '2023-06-16T10:00', '', '1234567890', '+63', existingEvents, null);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe('');
    });

    it('should return valid when editing an event with no conflict', () => {
        const editingEvent = existingEvents[0];
        const result = validateEventForm('Meeting', '2023-06-15T10:00', '2023-06-15T11:00', '1234567890', '+63', existingEvents, editingEvent);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe('');
    });
});
