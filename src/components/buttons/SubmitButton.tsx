interface SubmitButtonProps {
  text: string;
  type: 'submit' | 'button' | 'reset' | undefined;
  disabled: boolean;
}

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = ({
  text,
  type,
  disabled,
}) => {
  return (
    <div>
      <div className='flex h-12 w-40 flex-col items-center justify-center bg-sky-400'>
        <button
          className='relative h-20 w-40  text-center transition-all
            duration-500 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-sky-700
            before:opacity-10 before:transition-all before:duration-300 after:absolute
            after:top-0 after:left-0 after:h-full after:w-full after:scale-125 after:border after:border-sky-700 after:opacity-0
            after:transition-all after:duration-300 before:hover:scale-50 before:hover:opacity-0 after:hover:scale-100
            after:hover:opacity-100'
          type={type}
          disabled={disabled}
        >
          <span className='relative  uppercase text-white'>{text}</span>
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
