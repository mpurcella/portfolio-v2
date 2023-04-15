import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ContactFormLabel from '../components/ContactFormLabel';
import { Chat, RocketLaunch } from '@phosphor-icons/react';

type FormValues = {
    access_key: string;
    from_name: string;
    name: string;
    email: string;
    message: string;
};

type ContactForm = {
    successToast: () => void;
    errorToast: () => void;
};

const ContactForm = ({ successToast, errorToast }: ContactForm) => {
    const [isSuccessful, setIsSuccessful] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, isSubmitSuccessful },
    } = useForm<FormValues>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const resp = await fetch('https://api.web3forms.com/submit', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await resp.json();

            if (result.success) {
                setIsSuccessful(true);
            } else {
                setIsSuccessful(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful && isSuccessful) {
            reset();
        } else {
            reset({}, { keepValues: true });
        }
    }, [isSubmitSuccessful, isSuccessful, reset]);

    useEffect(() => {
        if (isSubmitSuccessful && isSuccessful) {
            successToast();
        } else if (isSubmitSuccessful && !isSuccessful) {
            errorToast();
        }
    }, [isSubmitSuccessful, isSuccessful, successToast, errorToast]);

    return (
        <form
            className="m-auto flex w-full max-w-440 flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex w-full flex-col items-center gap-52 rounded-xl bg-white px-20 py-40 shadow-lg shadow-black-100/25">
                <span className="text-48 text-purple">
                    <Chat weight="bold" aria-hidden />
                </span>
                <div className="flex w-full flex-col gap-24">
                    <input
                        type="hidden"
                        value="a17d3cc8-b9d7-4c89-a622-aec5c8c5171e"
                        {...register('access_key')}
                    />
                    <input type="hidden" value="Mission Control" {...register('from_name')} />
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="name" label="Name" />
                        <input
                            type="text"
                            id="name"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 focus:border-purple focus:outline-none focus-visible:transition-none"
                            required
                            autoCapitalize="off"
                            autoComplete="false"
                            autoCorrect="off"
                            inputMode="text"
                            {...register('name')}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="email" label="Email" />
                        <input
                            type="email"
                            id="email"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 focus:border-purple focus:outline-none focus-visible:transition-none"
                            required
                            autoCapitalize="off"
                            autoComplete="false"
                            autoCorrect="off"
                            inputMode="email"
                            {...register('email')}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <ContactFormLabel htmlFor="message" label="Message" />
                        <textarea
                            id="message"
                            className="w-full border-1 border-black-100/5 bg-grey-200 p-8 text-18 text-black-100 outline-none focus-visible:border-purple focus-visible:transition-none"
                            rows={8}
                            required
                            autoCorrect="off"
                            inputMode="text"
                            {...register('message')}
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className={isSubmitting ? 'button-submitting' : 'button-primary'}
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="loading-spinner"></span>
                            Submitting...
                        </>
                    ) : (
                        <>
                            <span className="text-20">
                                <RocketLaunch weight="bold" />
                            </span>
                            Submit
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
