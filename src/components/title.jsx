export default function Title({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-painterGreyLight font-Poppins uppercase font-semibold text-[0.9em]">{title}</h1>
      <h2 className="text-[3em] font-Cormorant capitalize">{subtitle}</h2>
    </div>
  );
}
