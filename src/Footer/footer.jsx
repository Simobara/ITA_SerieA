import { currentYear } from "../START/app/0SerieAMatches";

const Footer = () => {
  // const currentYear = new Date().getFullYear(); // Ottieni l'anno corrente

  return (
    <footer className="fixed bottom-0 h-full w-[200rem] text-white text-start text-xl bg-black z-[-100] mt-[-8rem]  p-8">
      {/* &copy; {currentYear} All Rights Reserved */}
    </footer>
  );
};

export default Footer;
