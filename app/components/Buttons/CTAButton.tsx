type CTAButtonProps = {
    path: string;
    styles?: string;
    text: string;
  };
  
  const CTAButton = ({ path, styles, text }: CTAButtonProps) => {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block 
         border-2 hover:border-[#FF7972] transition px-6 py-2 text-sm rounded-md tracking-wider uppercase font-medium"
      >
        {text}
      </a>
    );
  };
  
  export default CTAButton;