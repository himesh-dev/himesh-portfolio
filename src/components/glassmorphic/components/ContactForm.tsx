import { useState, useEffect } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [isFormValid, setIsFormValid] = useState(false);

    const validate = (data: FormData): FormErrors => {
        const newErrors: FormErrors = {};

        if (!data.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!data.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    useEffect(() => {
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Mark all fields as touched on submit
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true
        });

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        setResult(null);

        const submitData = new FormData();
        submitData.append("name", formData.name);
        submitData.append("email", formData.email);
        submitData.append("subject", formData.subject);
        submitData.append("message", formData.message);

        const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (accessKey) {
            submitData.append("access_key", accessKey);
        } else {
            console.error("Web3Forms Access Key is missing!");
            setResult("Configuration Error: Access Key missing.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submitData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Success");
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTouched({});
            } else {
                console.error("Error submitting form:", data);
                setResult(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("Something went wrong! Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {result === "Success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <span className="material-icons text-4xl text-green-400">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-300 mb-8">
                        Thanks for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setResult(null)}
                        className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-8 relative z-10 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name <span className="text-purple-400">*</span></label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={`w-full glass-input px-4 py-3 text-white placeholder:text-slate-600 outline-none hover:bg-white/5 transition-all duration-300 ${touched.name && errors.name
                                    ? '!border-red-500 focus:!border-red-500 !shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                                    : 'focus:border-purple-500/50 hover:border-purple-500/50'
                                    }`}
                            />
                            {touched.name && errors.name && (
                                <p className="text-red-400 text-xs ml-1">{errors.name}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email <span className="text-purple-400">*</span></label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={`w-full glass-input px-4 py-3 text-white placeholder:text-slate-600 outline-none hover:bg-white/5 transition-all duration-300 ${touched.email && errors.email
                                    ? '!border-red-500 focus:!border-red-500 !shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                                    : 'focus:border-purple-500/50 hover:border-purple-500/50'
                                    }`}
                            />
                            {touched.email && errors.email && (
                                <p className="text-red-400 text-xs ml-1">{errors.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Project Inquiry"
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full glass-input px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-purple-500/50 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message <span className="text-purple-400">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`w-full glass-input px-4 py-3 text-white placeholder:text-slate-600 min-h-[120px] outline-none hover:bg-white/5 transition-all duration-300 ${touched.message && errors.message
                                ? '!border-red-500 focus:!border-red-500 !shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                                : 'focus:border-purple-500/50 hover:border-purple-500/50'
                                }`}
                        ></textarea>
                        {touched.message && errors.message && (
                            <p className="text-red-400 text-xs ml-1">{errors.message}</p>
                        )}
                    </div>

                    {result && result !== "Success" && (
                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {result}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </>
    );
};
