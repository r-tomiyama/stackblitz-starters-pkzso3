import * as React from 'react';
import Input from '../../components/Input';
import NumberInput from '../../components/NumberInput';
import { useSampleForm } from '../ValidSample/useSampleForm';

export default function ValidSample() {
  const {
    control,
    formState: { isValid },
    submit,
    trigger,
  } = useSampleForm();
  return (
    <div>
      <h1>フォームサンプル</h1>

      <Input name="a" control={control} />
      <NumberInput name="numbers.b" control={control} />
      <NumberInput
        name="numbers.c"
        control={control}
        trigger={trigger}
        triggerKey="numbers.b"
      />

      <div>
        <button onClick={submit} disabled={!isValid}>
          submit
        </button>
      </div>
    </div>
  );
}
