import image19 from '../assets/image19.png';

function WelcomePage() {
  return (
    <div className="relative w-[1440px] h-[1024px] bg-white mx-auto">
      {/* Top Rectangles */}
      <div className="absolute w-[720px] h-[31.44px] right-[720px] top-0 bg-custom-dark-blue transform scale-x-[-1]"></div>
      <div className="absolute w-[744.67px] h-[31.44px] left-[695.33px] top-0 bg-custom-dark-orange transform scale-x-[-1]"></div>

      {/* Background Image (19) 2 */}
      <div
        className="absolute w-[496.49px] h-[437.58px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>

      {/* Foreground Image (19) 1 */}
      <div
        className="absolute w-[181.76px] h-[160.19px] left-[116.27px] top-[68.99px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image19})` }}
      ></div>

      {/* Rectangle 744 */}
      <div className="absolute w-[778.52px] h-[810.81px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-[0.5px] border-custom-blue rounded-[10px] shadow-[0_0_5.93385px_rgba(0,0,0,0.08)]"></div>

      {/* Welcome Text */}
      <h1 className="absolute w-[727px] left-1/2 -translate-x-1/2 top-[198.42px] font-montserrat font-semibold text-[34px] leading-[41px] text-custom-orange text-center">
        Bienvenido a Plataforma de Gamificación
      </h1>

      {/* Description Text */}
      <p className="absolute w-[600.74px] h-[320px] left-1/2 -translate-x-1/2 top-[279.42px] font-montserrat font-medium text-[24px] leading-[40px] text-custom-text text-justify">
        Usted ha ingresado exitosamente a la Plataforma de Gamificación, en la cual deberá completar una serie de actividades para saber más de usted. Agradeceremos que complete las siguientes actividades en condiciones de concentración, tranquilidad y libre de distracción externa.
      </p>

      {/* Checkbox and Terms Text */}
      <div className="absolute w-[592.87px] h-[30.97px] left-1/2 -translate-x-1/2 top-[670.64px] flex items-center">
        <input
          type="checkbox"
          className="w-[30.97px] h-[30.97px] mr-2 border-custom-dark-blue"
        />
        <label className="font-montserrat font-medium text-[18.063px] leading-[22px] text-custom-text">
          Acepto los Términos y Condiciones y Políticas de Privacidad.
        </label>
      </div>

      {/* Accept Button */}
      <button className="absolute w-[217.98px] h-[42px] left-1/2 -translate-x-1/2 top-[762.39px] bg-custom-button rounded-[11.9606px] flex items-center justify-center gap-2">
        <span className="font-montserrat font-bold text-[18px] leading-[18px] text-custom-button-text">
          Acepto
        </span>
      </button>
    </div>
  );
}

export default WelcomePage;