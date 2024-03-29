export default function Title({ title, subtitle }) {
  return (
    <>
      <h1 className="text-painterGreyLight font-Poppins uppercase font-semibold text-[0.9em]">{title}</h1>
      <h2 className="font-Cormorant capitalize dark:text-white text-[3em]">{subtitle}</h2>
    </>
  );
}
