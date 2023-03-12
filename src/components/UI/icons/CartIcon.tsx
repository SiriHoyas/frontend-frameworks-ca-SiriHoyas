type Props = {
  className: string;
};

function CartIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 16 15">
      <path d="M14 12.1V11H4.6L5.2 9.9L14.4 9L16 3H3.7L3 0H0V1H2.2L4.3 9.4L3 12V13.5C3 14.3 3.7 15 4.5 15C5.3 15 6 14.3 6 13.5C6 12.7 5.3 12 4.5 12H12V13.5C12 14.3 12.7 15 13.5 15C14.3 15 15 14.3 15 13.5C15 12.8 14.6 12.3 14 12.1V12.1ZM4 4H14.7L13.6 8L5.2 8.9L4 4V4Z" fill="#595959" />
    </svg>
  );
}

export default CartIcon;
