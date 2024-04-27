import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

    const count = useRef(0);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    count.current++;

    const onSubmit = async (data: any) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        })
        console.log(data)
    }

    return (
        <>
            <div>{count.current}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    {...register('name', { required: 'this is required' })}
                    placeholder='Name'
                />
                <p>{errors.name?.message}</p>

                <input
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"

                        }
                    })}
                    placeholder='Email'
                />
                <p>{errors.email?.message}</p>

                <input
                    {...register('password', {
                        required: true,
                        minLength: { value: 4, message: 'min is 4' },
                        validate: (value) => {
                            if (!value.includes('@')) {
                                return 'must include @'
                            }
                            return true;
                        }
                    })}
                    placeholder='Password'
                />
                <p>{errors.password?.message}</p>

                <input type="submit" />
            </form>
        </>
    )
}


const Ex12 = () => {
    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default Ex12