import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingContent from "./BookingContent";

test('Renders the form heading 1', () => {
    render(<BookingContent />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('form validation for name', () => {
    render(<BookingContent />);
    const nameLabel = screen.getByText("Full Name")
    expect(nameLabel).toBeInTheDocument();
});

test('form validation for email', () => {
    render(<BookingContent />);
    const emailLabel = screen.getByText("Email")
    expect(emailLabel).toBeInTheDocument();
});

test('form validation for phone number', () => {
    render(<BookingContent />);
    const phoneLabel = screen.getByText("Telephone")
    expect(phoneLabel).toBeInTheDocument();
});

test('form validation for date and time', () => {
    render(<BookingContent />);
    const dateAndTimeLabel = screen.getByText("Date and Time")
    expect(dateAndTimeLabel).toBeInTheDocument();
});