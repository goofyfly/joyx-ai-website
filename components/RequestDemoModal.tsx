import React, { useState } from 'react';

interface RequestDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('submitting');

        const formData = new FormData(e.currentTarget);
        const data = new URLSearchParams();
        for (const [key, value] of formData) {
            data.append(key, value as string);
        }

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: data.toString(),
            });
            setFormState('success');
        } catch (error) {
            console.error('Form Error:', error);
            setFormState('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                <div className="p-8">
                    {formState === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                <i className="fas fa-check"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                            <p className="text-slate-500 mb-8">
                                Thanks for your interest. Our team will be in touch shortly to schedule your demo.
                            </p>
                            <button
                                onClick={onClose}
                                className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Demo</h3>
                                <p className="text-slate-500 text-sm">
                                    See how JOYX AI can transform your video inventory.
                                </p>
                            </div>

                            <form
                                name="request-demo"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {/* Hidden Input for Netlify */}
                                <input type="hidden" name="form-name" value="request-demo" />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm"
                                        placeholder="Tell us about your needs..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full bg-joyx-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                                >
                                    {formState === 'submitting' ? (
                                        <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                    ) : null}
                                    {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
                                </button>

                                {formState === 'error' && (
                                    <p className="text-red-500 text-sm text-center">
                                        Something went wrong. Please try again or email us directly.
                                    </p>
                                )}
                            </form>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                We value your privacy. No spam, ever.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RequestDemoModal;
