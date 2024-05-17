import Image from "next/image";

type ParamsProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: Boolean;
};

const Button = ({ type, title, icon, variant, full }: ParamsProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="font-semibold whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
Button;
