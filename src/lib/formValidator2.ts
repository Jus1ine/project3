export interface Event {
    date: number;
    month: number;
    year: number;
    name: string;
    time: string;
    endDate: Date | null;
    phoneNumber: string;
}

export function validateEventForm(
    newEventTitle: string,
    newEventStart: string,
    newEventEnd: string,
    newPhoneNumber: string,
    selectedCountryCode: string,
    events: Event[],
    editingEvent: Event | null
): { isValid: boolean; message: string } {
    if (!newEventTitle.trim()) {
        return { isValid: false, message: 'Event title is required.' };
    }

    if (!newEventStart) {
        return { isValid: false, message: 'Start date and time are required.' };
    }

    if (!newPhoneNumber.trim()) {
        return { isValid: false, message: 'Phone number is required.' };
    }

    const startDate = new Date(newEventStart);
    const endDate = newEventEnd ? new Date(newEventEnd) : startDate;

    if (endDate < startDate) {
        return { isValid: false, message: 'End date cannot be before start date.' };
    }

    // Check for event conflicts, excluding the event being edited
    const isConflict = events.some(event => {
        if (editingEvent && event === editingEvent) {
            return false;
        }
        const eventStartDate = new Date(event.year, event.month, event.date);
        const eventEndDate = event.endDate ? new Date(event.endDate) : eventStartDate;

        return (startDate <= eventEndDate && endDate >= eventStartDate);
    });

    if (isConflict) {
        return { isValid: false, message: 'There is a conflict with an existing event.' };
    }

    return { isValid: true, message: '' };
}
