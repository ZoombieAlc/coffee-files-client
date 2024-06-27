function Input(placeholder: string | undefined) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-violet-400 text-coffee_text_pale_blue border-2 border-coffee_violet_light rounded-xl px-4 py-2 focus:outline-none"
    />
  );
}
export default Input;
