import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInput, FormOutput, schema } from '../ValidSample/schema';

export const useSampleForm = () => {
  const form = useForm<FormInput>({
    defaultValues: {
      a: '',
      numbers: {
        b: '0',
        c: '0',
      },
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return {
    ...form,
    submit: form.handleSubmit((values: FormOutput) => {
      console.log(values);
    }),
  };
};
